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
  justify-content: space-between;
  height: 8rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .info {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
      background: var(--background-table-header);

      &:first-child {
        border-radius: 0.5rem 0 0 0.5rem;
      }

      &:last-child {
        border-radius: 0 0.5rem 0.5rem 0;
      }
    }

    td {
      background: var(--background-table-data);
      padding: 1rem 2rem;

      &:first-child {
        border-radius: 0.5rem 0 0 0.5rem;
      }

      &:last-child {
        border-radius: 0 0.5rem 0.5rem 0;
      }
    }
  }
  
  .repair-header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      margin-top: 2.5rem;
      margin-bottom: 2.5rem;
    }
    
    button {
      margin-top: 0;
    }
  }

  .repair {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
      background: var(--background-table-header);

      &:first-child {
        border-radius: 0.5rem 0 0 0.5rem;
      }

      &:last-child {
        border-radius: 0 0.5rem 0.5rem 0;
      }
    }

    td {
      padding: 1rem 2rem;
      background: var(--background-table-data);

      &:first-child {
        border-radius: 0.5rem 0 0 0.5rem;
      }

      &:last-child {
        border-radius: 0 0.5rem 0.5rem 0;
      }
    }
  }
`;