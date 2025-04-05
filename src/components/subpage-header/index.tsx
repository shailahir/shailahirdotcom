import React from "react";

export type SubPageHeaderProps = {
  pageTitle: string;
};

const styles = {
  root: {
    backgroundColor: "#FEDF00",
    height: "450px",
    display: "flex",
    backgroundSize: "cover",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "-90px",
  },
  text: {
    paddingTop: "90px",
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
