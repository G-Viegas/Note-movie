import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px;

  h1 {
    display: flex;
    font-size: 32px;
    color: #f4ede8;
    margin-left: 150px;
  }

  > Button {
    width: 230px;
    height: 48px;
    margin-right: 150px;
  }
`;

export const CardList = styled.div`
  flex: 1;
  overflow-y: auto; 
  display: flex;
  flex-direction: column;
  padding-right: 8px;
  width: 80%;
  height: 736px;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ff859b;
    border-radius: 4px;
  }

  margin: auto;
`;
