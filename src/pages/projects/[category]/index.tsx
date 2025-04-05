import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Layout } from "../../../components/layout";
import { SubPageHeader } from "../../../components/subpage-header";
import { LinkBar, LinkBarLinkItem } from "../../../components/link-bar";

const styles = {
  categoryContainer: {
    marginTop: "48px",
    marginBottom: "48px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

const ProjectsPage: React.FC<PageProps> = () => {
  const categories: LinkBarLinkItem[] = [
    {
      name: "All",
      activeMatch: "all",
      path: "all",
    },
    {
      name: "Websites",
      activeMatch: "websites",
      path: "websites",
    },
    {
      name: "Apps",
      activeMatch: "apps",
      path: "apps",
    },
    {
      name: "Framework",
      activeMatch: "framework",
      path: "framework",
    },
    {
      name: "Library",
      activeMatch: "library",
      path: "library",
    },
    {
      name: "Plugin",
      activeMatch: "plugin",
      path: "plugin",
    },
  ];

  return (
    <main>
      <Layout>
        <div>
          <section>
            <SubPageHeader pageTitle="Recent Works" />
          </section>
          <section>
            <div style={styles.categoryContainer}>
              <LinkBar links={categories} />
            </div>
          </section>
        </div>
      </Layout>
    </main>
  );
};

export default ProjectsPage;

export const Head: HeadFC = () => <title>Recent Projects</title>;
