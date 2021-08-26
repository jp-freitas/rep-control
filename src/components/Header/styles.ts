import styled from 'styled-components';

export const Content = styled.header`
  max-width: 71rem;
  margin: 1rem auto;
  padding: 0 0 4rem;
  display: flex;

  input {
    width: 100%;
    height: 3rem;
    margin: 0.5rem;
    padding: 1rem 3rem;
    border-radius: 0.5rem;
    border: 0;
    background: var(--background-input);
    padding-left: 4rem;
    font-size: 1rem;

    :focus {
      outline: none;
    }

    ::placeholder {
      color: var(--text);
    }
  }

  .button-group {
    display: flex;
    flex-direction: row;
  }

  button {
    height: 3rem;
    font-size: 1rem;
    margin: 0.5rem;
    padding: 1rem 3rem;
    background: var(--background-button-sidebar);
    border: 0;
    border-radius: 0.5rem;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8)
    }
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