import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Layout } from "../../components/layout";

const ProjectsPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Layout>
        <div>Projects page</div>
      </Layout>
    </main>
  );
};

export default ProjectsPage;

export const Head: HeadFC = () => <title>Recent Projects</title>;
