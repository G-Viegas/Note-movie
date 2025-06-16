import styled from 'styled-components';

export const Container = styled.div`
  main {
    width: 80%;
    margin: auto;
    display: flex;
    align-items: center;

    svg {
      color: ${({ theme }) => theme.COLORS.ROSA};
      width: 20px;
      height: 20px;
    }
  }

  h1 {
    margin-right: 19px;
  }
  nav {
    margin: auto;
    width: 80%;

    flex-direction: column;
    p {
      text-align: justify;
      font-size: 16 px;
      font-family: Roboto;
      margin-top: 40px;
    }
  }
`;

export const Forms = styled.div`
  margin: 40px auto;
  width: 80%;
  display: flex;
  text-align: center;
  align-items: center;
  > a {
    margin-left: 8px;
    color: ${({ theme }) => theme.COLORS.ROSA};
    display: flex;
    text-align: center;
    align-items: center;
    svg{
      margin-right: 8px;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;

  img {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const User = styled.div`
  display: flex;
  text-align: right;
  align-items: center;

  strong,
  h4,
  p {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 14px;
    line-height: auto;
    font-weight: normal;
    margin: 24px 0px;
  }
  strong {
    margin-right: 8px;
  }
  h4 {
    margin-left: 8px;
  }
`;
export const Section = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 15px;
`;
