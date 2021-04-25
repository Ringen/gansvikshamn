/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 5vmin;
`;

const ArticleList = ({ children }) => <StyledList>{children}</StyledList>;

export default ArticleList;
