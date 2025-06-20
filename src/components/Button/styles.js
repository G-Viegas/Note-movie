import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.ROSA};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  height: 56px;
  border: 0px;
  padding: 0px 16px;
  margin-top: 16px;
  border-radius: 10px;
  font-weight: 500;

  &:disabled {
    opacity: 0.5;
  }
`;
