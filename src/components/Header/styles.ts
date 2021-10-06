import styled from 'styled-components';

export const Content = styled.header`
  padding: 0 0 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .user-group {
    display: flex;
    align-items: center;
    margin-top: 1rem;
    justify-content: space-between;

    svg {
      width: 2em;
      height: 2em;
    }

    p {
      font-size: 1.1rem;
      font-weight: 400;
      padding-left: 1rem;
    }

    button {
      margin-left: 1rem;

      svg {
        width: 1em;
        height: 1em;
      }
    }
  }

  .action-group {
    display: flex;
    align-items: center;

    button {
      margin-left: 0.5rem;
    }
  }

  @media (max-width: 680px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 40rem;
    margin: 0 auto;

    .action-group {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      input {
        width: 35rem;
      }

      button {
        width: 38.6rem;
        margin-left: 0;
      }
    }
  }

  @media (max-width: 512px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;

    .action-group {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      input {
        width: 20rem;
      }

      button {
        width: 23.6rem;
        margin-left: 0;
      }
    }
  }
`;