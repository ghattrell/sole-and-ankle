import React from 'react';
import styled from 'styled-components/macro';

import SHOES from '../../data';
import ShoeCard from '../ShoeCard';

const ShoeGrid = () => {
  return (
    <Wrapper>
      {SHOES.map((shoe) => (
        <CardWrapper>
          <ShoeCard {...shoe} />
        </CardWrapper>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 36px;
`;

const CardWrapper = styled.div`
  min-width: 275px;
  flex: 1;
`;

export default ShoeGrid;
