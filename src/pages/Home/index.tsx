import React, { useEffect } from 'react';
import ProductItem from './ProductItem';
import styled from '@emotion/styled';
import { getProducts } from '../../api';
import useFetch from '../../hooks/useFetch';

const Home = () => {
  const { data } = useFetch(getProducts);

  return (
    <ProductListContainer>
      {data?.map((product) => (
        <ProductItem key={product.id} {...product} />
      ))}
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
