import styled from 'styled-components';

export const Container = styled.nav`
  max-width: 60rem;
  margin: 2rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.ul`
  display: flex;
  align-items: center;
`;

export const ListItem = styled.li`
  list-style: none;
  margin: 0.3rem;
  background: var(--background-table-header);
  border-radius: 50%;
  cursor: pointer;
  transition: filter 0.2s;

  a {
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    filter: brightness(0.8);
  }
`;