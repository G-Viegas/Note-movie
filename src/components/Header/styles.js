import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  padding: 24px 123px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  border-bottom: solid 1px ${({ theme }) => theme.COLORS.BACKGROUND_700};;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 64px;
`;

export const Brand = styled.h1`
  color: ${({ theme }) => theme.COLORS.ROSA};
  font-size: 24px;
  font-weight: 700;
`;

export const Search = styled.div`
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
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;

  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const User = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;

  strong {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 14px;
  }

  span {
    color: ${({ theme }) => theme.COLORS.GRAY};
    font-size: 12px;
    cursor: pointer;
  }
`;
