import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Content = styled.div`
  max-width: 36rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--background-table-data);
  border-radius: 0.5rem;
  
  h1 {
    margin: 1rem;
  }

  button {
    width: 15rem;
    margin: 1.5rem;
  }

  p {
    margin: 1rem;
  }
`;
