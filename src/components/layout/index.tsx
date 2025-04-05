import React, { PropsWithChildren } from "react";
import { AppHeader } from "../header";

const styles = {
  layoutRoot: {},
  container: {
    maxWidth: "1600px",
    margin: "0px auto",
  },
};

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <section style={styles.container}>
        <AppHeader />
      </section>
      <section>{children}</section>
    </div>
  );
};
