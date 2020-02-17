import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />

      <h2 className="bg-yellow-400 text-2xl font-bold inline-block my-8 p-3">
        Looks like this page is a ghost that got abducted by aliens...
      </h2>
    </Layout>
  );
}

export default NotFoundPage;
