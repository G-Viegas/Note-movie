import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    'header'
    'content';
  .tags {
    display: flex;
    flex-wrap: wrap;
    background-color: black;
    border-radius: 10px;
  }

  > Section {
    margin: auto;
    width: 80%;
  }

  .Buttons {
    gap: 40px;
    margin: auto;
    width: 80%;
    display: flex;
    justify-content: space-between;
  }
  > Button {
    width: 536px;
    margin: auto;
  }

  .Buttons > Button:nth-child(1) {
    background-color: black;
    color: ${({theme}) => theme.COLORS.ROSA};
  }
`;

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
