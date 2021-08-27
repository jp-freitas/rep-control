import styled from 'styled-components';

export const Container = styled.button`
    display: flex;
    align-items: center;
    height: 3rem;
    font-size: 1rem;
    margin: 0.5rem;
    padding: 1rem;
    background: var(--background-button-sidebar);
    border: 0;
    border-radius: 0.5rem;
    transition: filter 0.2s;
    box-shadow: 0 0.5rem 0.5rem -0.25rem rgba(0, 0, 0, 0.25);

    svg {
      margin-right: 1rem;
    }

    &:hover {
      filter: brightness(0.8);
    }
`;