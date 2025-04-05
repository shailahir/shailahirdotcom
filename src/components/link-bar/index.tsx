import { Link } from "gatsby";
import React from "react";

const styles = {
  contentSection: {
    flex: 1,
    display: "flex",
  },
  contentSectionLogin: {
    display: "flex",
    justifyContent: "flex-end",
  },
  contentSectionNav: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
  },
  list: {
    display: "inline",
  },
  listItem: {
    display: "inline",
    marginRight: "1rem",
  },
  activeHeaderLink: {
    color: "var(--color-header-link)",
    backgroundColor: "var(--color-primary)",
    borderRadius: "6px",
  },
  headerLink: {
    textDecoration: "none",
    color: "#000",
    lineHeight: "1.2",
    padding: "6px 14px",
  },
};

export type LinkBarLinkItem = {
  path: string;
  name: string;
  activeMatch: string;
};

export type LinkBarProps = {
  links: LinkBarLinkItem[];
};

export const LinkBar = ({ links }: LinkBarProps) => {
  return (
    <section style={{ ...styles.contentSection, ...styles.contentSectionNav }}>
      <nav>
        <ul style={styles.list}>
          {links &&
            links.map((mapLink) => (
              <li key={mapLink.path} style={{ ...styles.listItem }}>
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
  );
};
