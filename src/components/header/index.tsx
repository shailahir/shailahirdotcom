import { Link } from "gatsby";
import React from "react";

const styles = {
  headerRootCommon: {
    backgroundColor: "transparent",
  },
  contentRoot: {
    display: "flex",
    paddingLeft: "36px",
    paddingRight: "36px",
    paddingTop: "36px",
  },
  contentSection: {
    flex: 1,
    display: "flex",
  },
  contentSectionLogin: {
    display: "flex",
    justifyContent: "flex-end",
  },
  list: {
    display: "inline",
  },
  listItem: {
    display: "inline",
    marginRight: "2rem",
  },
  activeHeaderLink: {
    textDecoration: "underline",
  },
  headerLink: {
    textDecoration: "none",
    color: "#000",
  },
};

export const mainLinks = [
  {
    path: "/",
    name: "Home",
    activeMatch: "home",
  },
  {
    path: "/projects",
    name: "Recent Works",
    activeMatch: "recent-works",
  },
  {
    path: "/blogs",
    name: "Blogs",
    activeMatch: "blogs",
  },
];

export const AppHeader = () => {
  return (
    <header style={styles.headerRootCommon}>
      <div style={styles.contentRoot}>
        <section style={styles.contentSection}>ShailAhir.com</section>
        <section style={{ ...styles.contentSection }}>
          <nav>
            <ul style={styles.list}>
              {mainLinks &&
                mainLinks.map((mapLink) => (
                  <li style={{ ...styles.listItem }}>
                    <Link
                      style={styles.headerLink}
                      to={mapLink.path}
                      activeStyle={styles.activeHeaderLink}
                    >
                      {mapLink.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </nav>
        </section>
        <section
          style={{ ...styles.contentSection, ...styles.contentSectionLogin }}
        >
          <ul>
            <li style={styles.listItem}>Login</li>
            <li style={styles.listItem}>Theme</li>
          </ul>
        </section>
      </div>
    </header>
  );
};
