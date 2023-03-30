import styled from '@emotion/styled';
import React from 'react';
import { CartLogo } from '../../assets';
import { Link } from 'react-router-dom';
import { ROUTE } from '../../constants/route';
import { NavButton, NavButtons, NavTitle, StyledHeader } from './Header.style';

const Header = () => {
  return (
    <StyledHeader>
      <Link to={ROUTE.HOME}>
        <NavTitle>
          <CartLogo /> NEXTSTEP
        </NavTitle>
      </Link>
      <NavButtons>
        <Link to={ROUTE.CART}>장바구니</Link>
        <Link to={ROUTE.ORDER}>주문목록</Link>
      </NavButtons>
    </StyledHeader>
  );
};

export default Header;
