import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Layout } from "../../components/layout";

const BlogPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Layout>
        <div>Blog page</div>
      </Layout>
    </main>
  );
};

export default BlogPage;

export const Head: HeadFC = () => <title>Blogs</title>;
