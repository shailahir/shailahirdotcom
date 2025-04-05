import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Layout } from "../../../components/layout";
import { SubPageHeader } from "../../../components/subpage-header";
import { PageLayout } from "../../../components/layout/page-layout";
import { LinkBar, LinkBarLinkItem } from "../../../components/link-bar";
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

const BlogPage: React.FC<PageProps> = () => {
  const categories: LinkBarLinkItem[] = [
    {
      name: "All",
      activeMatch: "all",
      path: "../all",
    },
    {
      name: "Technology",
      activeMatch: "technology",
      path: "../technology",
    },
  ];

  const allProjects = [
    {
      title: "Typescript is now faster to build",
      summary:
        "With new compiler, microsoft claims typescript now builds 10 times faster",
      imageUri: "https://picsum.photos/600/200",
      knowMoreLink: "1/typescript-is-now-faster-to-build",
      id: "1",
    },
    {
      title: "Industry movig towards non garbadge collecting languages",
      summary:
        "In performance critical applications, companies are now moving towards programming languages like go and rust",
      imageUri: "https://picsum.photos/600/200",
      knowMoreLink:
        "2/industry-moving-towards-non-garbadge-collection-languages",
      id: "2",
    },
  ];

  return (
    <main>
      <Layout>
        <div>
          <section>
            <SubPageHeader pageTitle="Blogs" />
          </section>
        </div>

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
      </Layout>
    </main>
  );
};

export default BlogPage;

export const Head: HeadFC = () => <title>Blogs</title>;
