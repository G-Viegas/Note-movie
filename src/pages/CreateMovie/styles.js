import styled from 'styled-components';

export const Container = styled.div``;

export const AddMovie = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 80%;
  margin: auto;

  .input-row {
    display: flex;
    gap: 1rem;
  }

  .full-height {
    height: 100%;
  }

`;

export const Forms = styled.div`
  margin: 40px auto;
  width: 80%;
  display: flex;
  text-align: center;
  align-items: center;
  > p {
    margin-left: 8px;
  }
`;
