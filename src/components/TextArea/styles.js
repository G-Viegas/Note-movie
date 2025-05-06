import styled from 'styled-components';

export const Container = styled.textarea`
  width: 100%;
  height: 275px;
  padding: 10px;
  border: none;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  color: ${({ theme }) => theme.COLORS.GRAY};
  resize: none; /* evita redimensionamento manual */
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY};
  }
`;