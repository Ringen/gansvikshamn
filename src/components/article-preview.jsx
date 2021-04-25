/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const PreviewTitle = styled.h3`
  font-size: 1.5em;
`;

export default ({ article }) => (
  <div>
    <Img alt="" fluid={article.heroImage.fluid} />
    <PreviewTitle>
      <Link to={`/blog/${article.slug}`}>{article.title}</Link>
    </PreviewTitle>
    <small>{article.publishDate}</small>
    <p
      dangerouslySetInnerHTML={{
        __html: article.description.childMarkdownRemark.html,
      }}
    />
  </div>
);
