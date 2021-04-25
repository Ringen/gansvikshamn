/* eslint-disable react/prop-types */
import React from 'react';
// import './base.css';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyle';
import Container from './container';
import Navigation from './navigation';

const Template = ({ children }) => (
  <ThemeProvider theme={{}}>
    <GlobalStyle />
    <Container>
      <Navigation />
      {children}
    </Container>
  </ThemeProvider>
);

export default Template;
