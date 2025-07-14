import styled from "styled-components";

const UserCard = styled.div`
  box-sizing: border-box;
  width: 100%;
  min-height: 150px;
  border: 1px solid ${({ theme }) => theme.colors.mainGray};
  box-shadow: 12px 17px 51px rgba(0, 0, 0, 0.10);
  backdrop-filter: blur(6px);
  border-radius: 17px;
  text-align: left;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  user-select: none;

  &:hover {
    border: 1px solid #e0dede;
    transform: scale(1.03);
  }

  strong {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.text};
    font-size: 1rem;
  }

  p {
    color: ${({ theme }) => theme.colors.textLight};
    font-size: 0.875rem;
    margin: 0.1rem 0;
  }
`;

export default UserCard;
