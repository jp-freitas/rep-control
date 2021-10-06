import styled from 'styled-components';

export const Container = styled.form`
  .react-modal-close {
    font-size: 2.5rem;

    svg {
      stroke-width: 2;
    }
  }

  h2 {
    color: var(--text);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  label {
    margin-top: 1rem;
  }
`;

export const RoleContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 0.5rem;
  gap: 0.5rem
`;