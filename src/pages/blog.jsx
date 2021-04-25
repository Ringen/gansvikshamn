import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import Layout from '../components/layout';
import ArticlePreview from '../components/article-preview';
import ArticleList from '../components/ArticleList';
import SectionHeadline from '../components/SectionHeadline';
import ContentWrapper from '../components/ContentWrapper';

const Hero = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 61.8vh;
  max-height: 400px;
  background: #e1e1e1;
  font-size: 2em;
  overflow: hidden;
`;

// eslint-disable-next-line react/prop-types
const BlogIndex = ({ data, location }) => {
  // TODO fetch title
  // const siteTitle = get(this, 'props.data.site.siteMetadata.title');
  const siteTitle = 'Blog';
  // eslint-disable-next-line react/prop-types
  const posts = data.allContentfulBlogPost.edges;

  return (
    <Layout location={location}>
      <div style={{ background: '#fff' }}>
        <Helmet title={siteTitle} />
        <Hero>Blog</Hero>
        <ContentWrapper>
          <SectionHeadline as="h2">Recent articles</SectionHeadline>
          <ArticleList>
            {/* eslint-disable-next-line react/prop-types */}
            {posts.map(({ node }) => (
              <li key={node.slug}>
                <ArticlePreview article={node} />
              </li>
            ))}
          </ArticleList>
        </ContentWrapper>
      </div>
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query BlogIndexQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`;
