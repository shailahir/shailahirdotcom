import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Layout } from "../../../components/layout";
import { SubPageHeader } from "../../../components/subpage-header";

const BlogPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Layout>
        <div>
          <section>
            <SubPageHeader pageTitle="Blogs" />
          </section>
        </div>
      </Layout>
    </main>
  );
};

export default BlogPage;

export const Head: HeadFC = () => <title>Blogs</title>;
