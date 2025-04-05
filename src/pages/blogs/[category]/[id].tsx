import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Layout } from "../../../components/layout";

const BlogDetailsPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Layout>
        <div>Blog Details page</div>
      </Layout>
    </main>
  );
};

export default BlogDetailsPage;

export const Head: HeadFC = () => <title>Blog Details</title>;
