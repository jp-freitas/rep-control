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
  }

  @media (max-width: 468px) {
    flex-direction: column;
    max-width: 25rem;
    margin: 0 auto;

    input {
      margin: 1rem 0 1rem 0;
      width: 100%
    }

    .button-group {
      display: flex;
      justify-content: space-between;
    }

    button {
      margin: 1rem;
      width: 50%;
    }
  }
`;