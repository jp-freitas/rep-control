import styled from 'styled-components';

export const Container = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.6rem;
    font-size: 1rem;
    margin-top: 0.6rem;
    padding: 0.6rem;
    background: var(--background-sidebar);
    border: 0;
    border-radius: 0.25rem;
    transition: filter 0.2s;
    box-shadow: 0 0.5rem 0.5rem -0.25rem rgba(0, 0, 0, 0.25);

    svg {
      margin-right: 1rem;
    }

    &:hover {
      filter: brightness(0.8);
    }
`;