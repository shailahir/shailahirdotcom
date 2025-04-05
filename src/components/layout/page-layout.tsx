import React, { PropsWithChildren } from "react";

const styles: Record<string, React.CSSProperties> = {
  container: {
    maxWidth: "1280px",
    margin: "0px auto",
    // position: "relative",
    overflow: "visible",
  },
};

export const PageLayout = ({ children }: PropsWithChildren) => {
  return (
    <div style={styles.container}>
      <section>{children}</section>
    </div>
  );
};
