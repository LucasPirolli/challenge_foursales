import styled from "styled-components";

const PageContainer = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;

  h1 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 1.5rem;
    text-align: center;
  }
`;

export default PageContainer;
