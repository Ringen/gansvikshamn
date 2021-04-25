/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import Hero from '../components/hero';
import Layout from '../components/layout';
import ArticlePreview from '../components/article-preview';
import ArticleList from '../components/ArticleList';
import SectionHeadline from '../components/SectionHeadline';
import ContentWrapper from '../components/ContentWrapper';

const RootIndex = ({ data, location }) => {
  // const siteTitle = get(this, 'props.data.site.siteMetadata.title');
  // const posts = get(this, 'props.data.allContentfulBlogPost.edges');
  // const [author] = get(this, 'props.data.allContentfulPerson.edges');

  const siteTitle = 'siteTitle';
  const posts = data.allContentfulBlogPost.edges;
  const [author] = data.allContentfulPerson.edges;

  return (
    <Layout location={location}>
      <div style={{ background: '#fff' }}>
        <Helmet title={siteTitle} />
        <Hero data={author.node} />
        <ContentWrapper>
          <SectionHeadline as="h2">Recent articles</SectionHeadline>
          <ArticleList>
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

export default RootIndex;

export const pageQuery = graphql`
  query HomeQuery {
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
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            fluid(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;
