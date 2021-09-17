import styled from 'styled-components';

export const Container = styled.div`
  max-width: 68rem;
  margin: 0 auto;
  display: flex;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
    font-size: 1.1rem;

    svg {
      stroke-width: 2;
      margin-right: 0.5rem;
    }
  }
`;