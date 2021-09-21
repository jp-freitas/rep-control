import styled from 'styled-components';

export const Container = styled.div`
  height: 3rem;
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid var(--background-table-data);
  background: var(--background-input);
  box-shadow: 0 0.5rem 0.5rem -0.25rem rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  color: var(--text);


  input {
    flex: 1;
    background: transparent;
    color: var(--text);
    border: 0;
    font-size: 1rem;

    :focus {
      outline: none;
    }

    ::placeholder {
      color: var(--text);

    }

    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  input[type=number] {
    -moz-appearance: textfield;
  }

  svg {
    margin-right: 1rem;
  }
`;