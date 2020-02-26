/* eslint-disable react/prop-types */
import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import "./template-styling.css";

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <div className="p-8 max-w-5xl mx-auto text-skoll">
        <h1 className="text-5xl font-bold">{frontmatter.title}</h1>
        <div id="markdown-content" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  );
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
