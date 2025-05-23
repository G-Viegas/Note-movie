import styled from "styled-components";

export const Container = styled.span`
  font-size: 12px;
  padding: 5px 16px;
  border-radius: 8px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  margin-right: 8px;
  margin-bottom: 8px;
  white-space: nowrap;
  display: inline-block;
`;
