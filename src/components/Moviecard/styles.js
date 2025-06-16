import styled from 'styled-components';

export const Container = styled.div`
  margin: 24px auto;

  button {
    background: none;
    border: none;
  }

  p {
    color: white;
    text-align: justify;
  }
`;

export const Header = styled.div`
  margin: auto;
  background-color: #312e38;
  justify-content: center;
  padding: 32px;
  svg {
    color: ${({ theme }) => theme.COLORS.ROSA};
  }

  border-radius: 15px;
  a{
    display: flex;
    color: white;
    font-size: 14px;
  }
  p {
    margin: 15px 0;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 15px;
`;
