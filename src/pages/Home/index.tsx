import React from 'react';
import ProductItem from './ProductItem';
import styled from '@emotion/styled';

const Home = () => {
  return (
    <ProductListContainer>
      <ProductItem
        imageUrl="https://cdn-mart.baemin.com/sellergoods/main/6ae4c431-6988-41ab-8894-7df7ee7b7cb3.jpg"
        id={1}
        price={12000}
        name="dsf"
      />
      <ProductItem
        imageUrl="https://cdn-mart.baemin.com/sellergoods/main/6ae4c431-6988-41ab-8894-7df7ee7b7cb3.jpg"
        id={1}
        price={12000}
        name="dsf"
      />

      <ProductItem
        imageUrl="https://cdn-mart.baemin.com/sellergoods/main/6ae4c431-6988-41ab-8894-7df7ee7b7cb3.jpg"
        id={1}
        price={12000}
        name="dsf"
      />
      <ProductItem
        imageUrl="https://cdn-mart.baemin.com/sellergoods/main/6ae4c431-6988-41ab-8894-7df7ee7b7cb3.jpg"
        id={1}
        price={12000}
        name="dsf"
      />
    </ProductListContainer>
  );
};

export default Home;

const ProductListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
`;
