import * as React from "react";
import { HeadFC, PageProps } from "gatsby";
import { Layout } from "../components/layout";
import { SubPageHeader } from "../components/subpage-header";
import { PageLayout } from "../components/layout/page-layout";
import { Footer } from "../components/footer";

const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <Layout>
        <div>
          <section>
            <SubPageHeader pageTitle="404 Page Not Found" />
          </section>
        </div>

        <PageLayout>
          <div>
            <p>
              This page is not available at the moment, Please use top
              navigation to home page
            </p>
          </div>
          <div>
            <Footer />
          </div>
        </PageLayout>
      </Layout>
    </main>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
