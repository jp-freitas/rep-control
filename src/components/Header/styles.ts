import styled from 'styled-components';

export const Container = styled.header`
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-around;

  input {
    width: 50rem;
    margin-right: 1rem;
    height: 3.75rem;
    border-radius: 0.6rem;
    border-style: none;
    background: var(--background-input);
    padding-left: 4rem;

    :focus {
      outline: none;
    }

    ::placeholder {
      color: var(--text);
    }
  }

  button {
    width:  13.43rem;
    background: var(--background-button-sidebar);
    border-style: none;
    border-radius: 0.6rem;
  }
`;