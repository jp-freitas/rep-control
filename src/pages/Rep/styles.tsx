import styled from 'styled-components';

export const Container = styled.div`
  max-width: 68rem;
  margin: 0 auto;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 2rem;
    font-size: 2rem;

    svg {
      stroke-width: 2.5;
      margin-right: 0.5rem;
    }

    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.7);
    }
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 8rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .group {
    width: 25rem;
    padding: 1rem;
    
    h2 {
      height: 4rem;
      display: flex;
      align-items: center;
    }

    p {
      background: var(--background-table-data);
      height: 3rem;
      border-radius: 0.5rem;
      display: flex;
      align-items: center;
      padding-left: 0.5rem;

    }
  }
`;