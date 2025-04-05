import React from "react";
// @ts-expect-error("suppress")
import backgroundImage from "../../images/mumbai_sea_link_bw_optimized.webp";

export type SubPageHeaderProps = {
  pageTitle: string;
};

const styles: Record<string, React.CSSProperties> = {
  root: {
    position: "relative" as const,
    height: "400px",
    // background: "yellow",
    overflow: "hidden",
  },
  background: {
    position: "absolute" as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#FEDF00",
    backgroundImage: `url(${backgroundImage})`,
    height: "500px",
    display: "flex",
    backgroundSize: "100%",
    backgroundPosition: "center 60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "-90px",
    backgroundRepeat: "no-repeat",
    zIndex: 0,
    opacity: 0.4,
  },
  textContainer: {
    position: "relative" as const,
    opacity: 1,
    zIndex: 100,
    transform: "scale",
  },
  text: {
    position: "relative" as const,
    paddingTop: "100px",
    fontSize: "65px",
    zIndex: 100,
    textAlign: "center",
    opacity: 0.8,
  },
};

export const SubPageHeader = ({ pageTitle }: SubPageHeaderProps) => {
  return (
    <div style={styles.root}>
      <div style={styles.background} />
      <section style={styles.textContainer}>
        <h2 style={styles.text}>{pageTitle}</h2>
      </section>
    </div>
  );
};
