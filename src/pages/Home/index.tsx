import React, { useEffect } from 'react';
import ProductItem from './ProductItem';
import styled from '@emotion/styled';
import { getProducts } from '../../api';
import useFetch from '../../hooks/useFetch';

const Home = () => {
  const { data } = useFetch(getProducts);

  return (
    <HomeContainer>
      <ProductListContainer>
        {data?.map((product) => (
          <ProductItem key={product.id} {...product} />
        ))}
      </ProductListContainer>
    </HomeContainer>
  );
};

export default Home;

const ProductListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex: 1;

  gap: 20px;
  padding: 20px;
`;

const HomeContainer = styled.main`
  display: flex;
  flex: 1;
  width: 100%;
  overflow-y: scroll;
`;
