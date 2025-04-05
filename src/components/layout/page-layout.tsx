import React, { PropsWithChildren } from "react";

const styles = {
  container: {
    maxWidth: "1280px",
    margin: "0px auto",
  },
};

export const PageLayout = ({ children }: PropsWithChildren) => {
  return (
    <div style={styles.container}>
      <section>{children}</section>
    </div>
  );
};
