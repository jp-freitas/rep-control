import styled from 'styled-components';

export const Container = styled.nav`
  width: 12rem;
  height: 100vh;
  background: var(--background-sidebar);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 1rem;
  border-radius: 0 0.5rem 0.5rem 0;

  button {
    background: none;
    box-shadow: none;    
  }
`;