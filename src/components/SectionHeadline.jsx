/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const StyledHeading = styled.h1`
  padding: 0 0 0.4em 0;
  margin: 0 0 5vmin 0;
  border-bottom: 1px solid #ddd;
`;

const SectionHeadline = ({ children }) => (
  <StyledHeading>{children}</StyledHeading>
);

export default SectionHeadline;
