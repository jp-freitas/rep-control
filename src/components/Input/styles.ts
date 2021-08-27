import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 3rem;
  margin: 0.5rem;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 0;
  background: var(--background-input);
  box-shadow: 0 0.5rem 0.5rem -0.25rem rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;

  input {
    flex: 1;
    background: transparent;
    border: 0;
    font-size: 1rem;

    :focus {
      outline: none;
    }

    ::placeholder {
      color: var(--text);
    }
  }

  svg {
    margin-right: 1rem;
  }
`;