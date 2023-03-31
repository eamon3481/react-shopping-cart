import React from 'react';
import { Product } from '../../../types';
import styled from '@emotion/styled';
import { Button } from '../../../components';
import { Cart, Trash } from '../../../assets';

const ProductItem = ({ id, name, price, imageUrl }: Product) => {
  const handleCartClick = () => {
    //TODO: 장바구니 담기
    console.log('장바구니 담기');
  };
  return (
    <ProductItemContainer>
      <img src={imageUrl} />
      <ProductInfos>
        <ProductInfo>
          <span>{name}</span>
          <span>{price.toLocaleString()} 원</span>
        </ProductInfo>
        <Button.IconButton icon={<Cart />} onClick={handleCartClick} />
      </ProductInfos>
    </ProductItemContainer>
  );
};

export default ProductItem;
const ProductInfos = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 12px;
`;
const ProductItemContainer = styled.li`
  display: flex;
  justify-content: center;
  img {
    width: 100%;
  }

  width: 282px;
  height: 358.03px;
  flex-wrap: wrap;
  gap: 20px;
`;

const ProductInfo = styled.p`
  display: flex;
  flex-direction: column;
  span {
    font-size: 16px;
  }
`;
