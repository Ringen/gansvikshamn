/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import SectionHeadline from '../components/SectionHeadline';
import ContentWrapper from '../components/ContentWrapper';

import { HeroImage, Wrapper } from '../components/hero';

const BlogPostTemplate = ({ data, location }) => {
  // TODO fetch title
  // const siteTitle = get(this, 'props.data.site.siteMetadata.title');
  const siteTitle = 'Blog';
  const post = data.contentfulBlogPost;

  return (
    <Layout location={location}>
      <div style={{ background: '#fff' }}>
        <Helmet title={`${post.title} | ${siteTitle}`} />
        <Wrapper>
          <HeroImage alt={post.title} fluid={post.heroImage.fluid} />
        </Wrapper>
        <ContentWrapper>
          <SectionHeadline>{post.title}</SectionHeadline>
          <p
            style={{
              display: 'block',
            }}
          >
            {post.publishDate}
          </p>
          <div
            dangerouslySetInnerHTML={{
              __html: post.body.childMarkdownRemark.html,
            }}
          />
        </ContentWrapper>
      </div>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
