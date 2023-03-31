import styled from '@emotion/styled';

export const StyledHeader = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;

  background: #2ac1bc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  margin-bottom: 8px;
`;

export const NavTitle = styled.h1`
  font-size: 40px;
  margin: 0;
  font-weight: 900;
  text-align: center;
  justify-content: center;
  display: flex;
  vertical-align: middle;

  color: #ffffff;
  svg {
    margin-right: 10px;
  }
`;

export const NavButtons = styled.nav`
  a {
    font-weight: 500;
    font-size: 24px;
    color: #ffffff;
    margin-left: 20px;
  }
`;

export const NavButton = styled.button`
  font-weight: 500;
  font-size: 24px;

  color: #ffffff;
`;
