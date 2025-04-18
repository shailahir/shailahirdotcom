import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Layout } from "../components/layout";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Layout>
        <div>Index page</div>
      </Layout>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
