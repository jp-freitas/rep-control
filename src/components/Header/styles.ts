import styled from 'styled-components';

export const Content = styled.header`
  padding: 0 0 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .user-group {
    display: flex;
    align-items: center;
    margin-top: 1rem;
    justify-content: space-between;

    img {
      width: 3rem;
      border-radius: 50%;
    }

    p {
      font-size: 1.1rem;
      font-weight: 400;
      padding-left: 1rem;
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