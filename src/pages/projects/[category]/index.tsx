import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Layout } from "../../../components/layout";
import { SubPageHeader } from "../../../components/subpage-header";
import { LinkBar, LinkBarLinkItem } from "../../../components/link-bar";
import { PageLayout } from "../../../components/layout/page-layout";
import { Card } from "../../../components/card";
import { Footer } from "../../../components/footer";

const styles = {
  categoryContainer: {
    marginTop: "48px",
    marginBottom: "36px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "36px",
    padding: "36px",
  },
};

const ProjectsPage: React.FC<PageProps> = () => {
  const categories: LinkBarLinkItem[] = [
    {
      name: "All",
      activeMatch: "all",
      path: "../all",
    },
    {
      name: "Websites",
      activeMatch: "websites",
      path: "../websites",
    },
    {
      name: "Apps",
      activeMatch: "apps",
      path: "../apps",
    },
    {
      name: "Framework",
      activeMatch: "framework",
      path: "../framework",
    },
    {
      name: "Library",
      activeMatch: "library",
      path: "../library",
    },
    {
      name: "Plugin",
      activeMatch: "plugin",
      path: "../plugin",
    },
  ];

  const allProjects = [
    {
      title: "Mobile web application for so and so project",
      summary: "Summary for this project is something something",
      imageUri: "",
      knowMoreLink: "1/mobile-web-application-for-so-and-so-project",
      id: "1",
    },
    {
      title: "Mobile web application for so and so project",
      summary: "Summary for this project is something something",
      imageUri: "",
      knowMoreLink: "2/mobile-web-application-for-so-and-so-project",
      id: "2",
    },
    {
      title: "Mobile web application for so and so project",
      summary: "Summary for this project is something something",
      imageUri: "",
      knowMoreLink: "3/mobile-web-application-for-so-and-so-project",
      id: "3",
    },
    {
      title: "Mobile web application for so and so project",
      summary: "Summary for this project is something something",
      imageUri: "",
      knowMoreLink: "4/mobile-web-application-for-so-and-so-project",
      id: "4",
    },
  ];

  return (
    <main>
      <Layout>
        <div>
          <section>
            <SubPageHeader pageTitle="Recent Works" />
          </section>

          <PageLayout>
            <div style={styles.categoryContainer}>
              <LinkBar links={categories} />
            </div>
            <div style={styles.gridContainer}>
              {allProjects &&
                allProjects.map((project) => (
                  <Card key={project.id} {...project} />
                ))}
            </div>
            <div>
              <Footer />
            </div>
          </PageLayout>
        </div>
      </Layout>
    </main>
  );
};

export default ProjectsPage;

export const Head: HeadFC = () => (
  <>
    <title>Recent Projects</title>
  </>
);
