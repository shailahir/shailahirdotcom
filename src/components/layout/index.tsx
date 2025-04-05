import React, { PropsWithChildren } from "react";
import { AppHeader } from "../header";

const styles = {
  layoutRoot: {},
  container: {
    maxWidth: "1600px",
    margin: "0px auto",
  },
  wrapper: {
    position: "relative" as const,
    backgroundColor: "#f0f2f5", // fallback background
    overflow: "hidden",
  },
  circle: (top: string, left: string, color: string) => ({
    position: "absolute" as const,
    top,
    left,
    width: "700px",
    height: "700px",
    borderRadius: "50%",
    backgroundColor: color,
    filter: "blur(120px)",
    opacity: 1,
    zIndex: 0,
  }),
  content: {
    position: "relative" as const,
    zIndex: 1,
  },
};

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.circle("-200px", "-200px", "#cce0ff")} />
      <div style={styles.circle("-300px", "60%", "#fff1a8")} />
      <div style={styles.circle("800px", "10%", "#cce0ff")} />
      <div style={styles.circle("1100px", "70%", "#fff1a8")} />
      <div style={styles.circle("1800px", "70%", "#cce0ff")} />
      <section style={styles.container}>
        <AppHeader />
      </section>
      <section style={styles.content}>{children}</section>
    </div>
  );
};
