/* eslint-disable react/prop-types */
import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

// TODO refactor hero component to be reused in blog post
export const Wrapper = styled.div`
  position: relative;
  background: #000;
  color: #fff;
  text-align: center;
`;

export const HeroImage = styled(Img)`
  /*
    Ensure golden ratio for the hero size while limiting it to some extend to
    the viewport width
  */
  height: 61.8vh;
  max-height: 400px;
`;

const Details = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.7);
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 0);
  font-size: 14px;
  padding: 0 0.5em;

  @media (min-width: 600px) {
    font-size: 16px;
  }
  @media (min-width: 1000px) {
    font-size: 20px;
  }
`;

const Headline = styled.h3`
  margin: 0;
`;

const Title = styled.p`
  margin: 0;
  font-size: 1.125em;
  font-weight: bold;
`;

const Hero = ({ data }) => (
  <Wrapper>
    <HeroImage alt={data.name} fluid={data.heroImage.fluid} />
    <Details>
      <Headline>{data.name}</Headline>
      <Title>{data.title}</Title>
      <p>{data.shortBio.shortBio}</p>
    </Details>
  </Wrapper>
);

export default Hero;
