import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Layout } from "../../components/layout";
import { SubPageHeader } from "../../components/subpage-header";

const ProjectsPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Layout>
        <div>
          <section>
            <SubPageHeader pageTitle="Recent Works" />
          </section>
        </div>
      </Layout>
    </main>
  );
};

export default ProjectsPage;

export const Head: HeadFC = () => <title>Recent Projects</title>;
