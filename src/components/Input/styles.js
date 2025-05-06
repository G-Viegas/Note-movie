import styled from "styled-components";

export const Container = styled.div`
flex: 1;

input {
  width: 100%;
  padding: 12px 16px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  border: none;
  border-radius: 10px;
  color: ${({ theme }) => theme.COLORS.WHITE};

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY};
  }
}
`