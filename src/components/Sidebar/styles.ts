import styled from 'styled-components';

export const Container = styled.nav`
  width: 8rem;
  height: 100vh;
  background: var(--background-sidebar);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding-top: 1rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 1rem;

    img {
      border-radius: 50%;
      width: 4rem;
      height: 4rem;
      margin-bottom: 0.5rem;
    }

    p {
      font-size: 1rem;
      margin-top: 0.5rem;
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    box-shadow: none;
  }
`;