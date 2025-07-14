// Header.tsx
import { Link } from "react-router-dom";
import styled from "styled-components";
import LogoImg from "../assets/logo.jpg";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f0f0f0;
  padding: 0 2rem;
  position: sticky;
  top: 0;
  z-index: 1;
`;

const Logo = styled.img`
  height: 70px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-size: 0.875rem;
  transition: 0.3s ease color;
  font-weight: bold;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={LogoImg} alt="Foursales Logo" />
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/favorites">Favoritos</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
