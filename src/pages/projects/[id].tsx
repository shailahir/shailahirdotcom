import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Layout } from "../../components/layout";

const ProjectDetailsPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Layout>
        <div>Project Details page</div>
      </Layout>
    </main>
  );
};

export default ProjectDetailsPage;

export const Head: HeadFC = () => <title>Project Details</title>;
