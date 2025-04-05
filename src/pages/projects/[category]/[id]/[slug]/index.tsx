import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Layout } from "../../../../../components/layout";
import { SubPageHeader } from "../../../../../components/subpage-header";
import { PageLayout } from "../../../../../components/layout/page-layout";
import { Footer } from "../../../../../components/footer";

const ProjectDetailsPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Layout>
        <div>
          <section>
            <SubPageHeader pageTitle="Project Title" />
          </section>
        </div>

        <PageLayout>
          {/* <div style={styles.categoryContainer}>
                  <LinkBar links={categories} />
                </div>
                <div style={styles.gridContainer}>
                  {allProjects &&
                    allProjects.map((project) => (
                      <Card key={project.id} {...project} />
                    ))}
                </div> */}
          <div>
            <Footer />
          </div>
        </PageLayout>
      </Layout>
    </main>
  );
};

export default ProjectDetailsPage;

export const Head: HeadFC = () => <title>Project Details</title>;
