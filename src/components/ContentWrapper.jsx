/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: calc(100% - 10vmin);
  margin: 0 auto;
  padding: 5vmin 0;
`;

const ContentWrapper = ({ children }) => <Wrapper>{children}</Wrapper>;

export default ContentWrapper;
