import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, isNew }) =>
    isNew ? 'transparent' : theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.GRAY};
  border: ${({ theme, isNew }) =>
    isNew ? `dashed 1px ${theme.COLORS.GRAY}` : 'none'};

  margin: 16px 24px;
  border-radius: 10px;
  padding-right: 16px;

  > button {
    border: none;
    background: none;
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.ROSA};
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.ROSA};
  }

  > input {
    display: inline-block;
    height: 56px;
    width: fit-content;

    padding: 16px;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;

    border: none;

    &::placeholder {
      ${({ theme }) => theme.COLORS.GRAY};
    }
  }
`;
