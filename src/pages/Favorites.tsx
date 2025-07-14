// Libraries
import styled from "styled-components";
import { FaTrash } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";

// My Creations
import type { RootState } from "../store/store";
import { removeFromFavorites } from "../features/favorites/favoritesSlice";

// Styles
import UserCard from "../components/styles/UserCard";
import PageContainer from "../components/styles/PageContainer";

const RemoveButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.danger}; 
  transition: 0.3s ease color;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary}; 
  }
`;

const EmptyState = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.textLight};
`;

const Favorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites.list);

  const handleRemove = (userId: number) => {
    dispatch(removeFromFavorites(userId));
  };

  return (
    <PageContainer>
      <h1>Usuários Favoritos</h1>

      {favorites.length === 0 && (
        <EmptyState>Nenhum usuário favorito no momento.</EmptyState>
      )}

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
        {favorites.map((user) => (
          <UserCard key={user.id}>
            <div>
              <strong>{user.name}</strong>
              <p>{user.email}</p>
              <p>{user.phone}</p>
            </div>
            <RemoveButton onClick={() => handleRemove(user.id)}><FaTrash /></RemoveButton>
          </UserCard>
        ))}
      </div>
    </PageContainer>
  );
};

export default Favorites;
