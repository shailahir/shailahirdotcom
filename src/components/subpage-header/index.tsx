import React from "react";

export type SubPageHeaderProps = {
  pageTitle: string;
};

const styles = {
  root: {
    backgroundColor: "grey",
    backgroundImage: "url(https://picsum.photos/1600/400)",
    height: "400px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "-90px",
  },
  text: {
    fontSize: "72px",
  },
};

export const SubPageHeader = ({ pageTitle }: SubPageHeaderProps) => {
  return (
    <div style={styles.root}>
      <section>
        <h2 style={styles.text}>{pageTitle}</h2>
      </section>
    </div>
  );
};
