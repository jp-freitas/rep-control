import styled from 'styled-components';

export const Container = styled.div`
  table {
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
      border: 0;
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