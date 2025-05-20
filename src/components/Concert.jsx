import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: 2rem 2rem;
  background: linear-gradient(
    to bottom,
    rgba(250, 232, 255, 0) 0%,
    #f9e9f9 20%,
    #f9e9f9 100%
  );

  color: #111;
  text-align: center;

  img {
    height: 500px;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  font-family: "ReciaSerifDisplay", serif;
`;

const Description = styled.p`
  max-width: 800px;
`;

const Concert = () => {
  return (
    <Section>
      <Title>Coming Soon</Title>
      <img src="/assets/poster/panorama.png" alt="부첫밴드 8월 공연 포스터" />
      <Description></Description>
    </Section>
  );
};

export default Concert;
