import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { graphql } from "gatsby";
import Hero from "../components/Hero";
import Features from "../components/Features/Features";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`online coaching`, `fitness`, `training`, `ernährung`]}
        title="Home"
      />
      <Hero />
      <Features />
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
