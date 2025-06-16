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
  text-align: center;

  a {
    width: 207px;
    background-color: ${({ theme }) => theme.COLORS.ROSA};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    height: 48px;
    border: 0px;
    padding: 0px 16px;
    margin-top: 16px;
    border-radius: 10px;

    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    
    margin-right: 150px;
    
    &:disabled {
      opacity: 0.5;
    }
  }

  h1 {
    display: flex;
    font-size: 32px;
    color: #f4ede8;
    margin-left: 150px;
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
