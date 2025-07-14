// React
import React, { useEffect, useMemo, useState } from "react";

// Libraries
import styled, { keyframes } from "styled-components";
import debounce from "lodash.debounce";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaStar, FaRegStar } from "react-icons/fa";

// My Creations
import type { User } from "../types/user";
import type { RootState } from "../store/store";
import { useAppDispatch } from "../hooks/useAppDispatch";
import {
    fetchUsersRequest,
    setSelectedUser,
} from "../features/users/userSlice";
import {
    addToFavorites,
    removeFromFavorites,
} from "../features/favorites/favoritesSlice";

// Styles
import UserCard from "../components/styles/UserCard";
import PageContainer from "../components/styles/PageContainer";

const SearchInput = styled.input`
  font-size: 0.857rem;
  padding: 0 15px;
  width: 100%;
  height: 35px;
  margin-bottom: 2rem;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.mainGray};
  outline: none;
  transition: 0.3s ease all;
`;

const FavoriteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.secondary};
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  border: 4px solid ${({ theme }) => theme.colors.mainGray};
  border-top: 4px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite;
  margin: 2rem auto;
`;

const Error = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.danger};
  font-weight: bold;
`;

const Home = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { list: users, loading, error } = useSelector(
        (state: RootState) => state.users
    );
    const favorites = useSelector((state: RootState) => state.favorites.list);

    const isFavorite = (userId: number) =>
        favorites.some((fav) => fav.id === userId);

    const [search, setSearch] = useState("");
    const [filteredUsers, setFilteredUsers] = useState<User[]>([]);

    const handleClick = (user: User) => {
        dispatch(setSelectedUser(user));
        navigate("/details");
    };

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        debouncedFilter(e.target.value);
    };

    const handleToggleFavorite = (user: User) => {
        if (isFavorite(user.id)) {
            dispatch(removeFromFavorites(user.id));
        } else {
            dispatch(addToFavorites(user));
        }
    };

    useEffect(() => {
        if (users.length === 0) {
            dispatch(fetchUsersRequest());
        }
    }, [dispatch, users.length]);

    useEffect(() => {
        setFilteredUsers(users);
    }, [users]);

    const debouncedFilter = useMemo(
        () =>
            debounce((value: string) => {
                const query = value.toLowerCase();
                const filtered = users.filter((user) =>
                    user.name.toLowerCase().includes(query)
                );
                setFilteredUsers(filtered);
            }, 300),
        [users]
    );

    return (
        <PageContainer>
            <h1>Lista de Usuários</h1>

            <SearchInput
                type="text"
                placeholder="Buscar por nome..."
                value={search}
                onChange={handleSearch}
            />

            {loading && <Spinner />}
            {error && <Error>{error}</Error>}

            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "1rem",
                }}
            >
                {filteredUsers.map((user) => (
                    <UserCard key={user.id} onClick={() => handleClick(user)}>
                        <div
                            style={{
                                display: "flex",
                                width: "100%",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <div>
                                <strong>{user.name}</strong>
                                <p>{user.email}</p>
                                <p>{user.phone}</p>
                            </div>
                            <FavoriteButton
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleToggleFavorite(user);
                                }}
                            >
                                {isFavorite(user.id) ? <FaStar /> : <FaRegStar />}
                            </FavoriteButton>
                        </div>
                    </UserCard>
                ))}
            </div>
        </PageContainer>
    );
};

export default Home;
