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

  .user-group {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 18%;
    border-bottom: 0.15rem solid var(--text);
    width: 100%;

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

  .navigation-group {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    height: 62%;
    a {
      display: flex;
      align-items: center;
      transition: filter 0.2s;

      svg {
        margin-right: 0.5rem;
      }
    }

    a:hover {
      filter: brightness(0.8);
    }
    
    a:first-child {
      padding-bottom: 0.5rem;
      padding-left: 1rem;
    }

    a:last-child {
      padding-top: 0.5rem;
      padding-left: 1rem;
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