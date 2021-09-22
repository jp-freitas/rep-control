import styled from 'styled-components';

export const Container = styled.div`

`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
    
  button {
    margin-top: 0;
  }
`;

export const Content = styled.table`
  width: 100%;
  border-spacing: 0 0.5rem;

  th {
    font-weight: 400;
    padding: 0.6rem 1.6rem;
    text-align: left;
    line-height: 1.5rem;
    background: var(--background-table-header);
    &:first-child {
      border-radius: 0.25rem 0 0 0.25rem;
    }
    &:last-child {
      border-radius: 0 0.25rem 0.25rem 0;
    }
  }

  td {
    padding: 0.6rem 1.6rem;
    background: var(--background-table-data);
    &:first-child {
      border-radius: 0.25rem 0 0 0.25rem;
    }
    &:last-child {
      border-radius: 0 0.25rem 0.25rem 0;
    }
  }
`;