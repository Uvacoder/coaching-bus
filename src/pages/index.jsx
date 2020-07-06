import React from "react";

import { graphql } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Hero from "../components/Hero";
import Features from "../components/Features/Features";
import About from "../components/About";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import CoachingInquiry from "../components/CoachingInquiry";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`online coaching`, `fitness`, `training`, `ernährung`]}
        title="SkollCoaching"
      />
      <Hero />
      <About />
      <Features />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CoachingInquiry />
    </Layout>
  );
}

export const query = graphql`
  query {
    hero: file(relativePath: { eq: "hero.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
export default IndexPage;
