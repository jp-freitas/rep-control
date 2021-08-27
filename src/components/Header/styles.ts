import styled from 'styled-components';

export const Content = styled.header`
  max-width: 71rem;
  margin: 1rem auto;
  padding: 0 0 4rem;
  display: flex;

  .button-group {
    display: flex;
    flex-direction: row;
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
      justify-content: space-around;
    }

    button {
      margin: 1rem;
      width: 50%;
    }
  }
`;