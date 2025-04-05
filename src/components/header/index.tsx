import { Link } from "gatsby";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { LinkBar } from "../link-bar";
import { globalStyles } from "../../styles/globalStyles";

const styles: Record<string, React.CSSProperties> = {
  logo: {
    fontSize: "24px",
    fontWeight: 600,
  },
  headerRootCommon: {
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 999,
    width: "100%",
    maxWidth: "100%",
    backgroundColor: "transparent",
    transition: "all 0.3s ease",
  },
  contentRoot: {
    display: "flex",
    padding: "16px 36px",
    alignItems: "center",
  },
  contentSection: {
    flex: 1,
    display: "flex",
  },
  contentSectionLogin: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
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
    marginRight: "2rem",
  },
  sticky: {
    backgroundColor: "rgba(255,255,255,0.9)",
    // opacity: 0.6,
    transition: "all 0.3s ease",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  },
};

export const mainLinks = [
  {
    path: "/",
    name: "Home",
    activeMatch: "home",
  },
  {
    path: "/projects/all",
    name: "Recent Works",
    activeMatch: "recent-works",
  },
  {
    path: "/blogs/all",
    name: "Blogs",
    activeMatch: "blogs",
  },
];

export const AppHeader = () => {
  const [isSticky, setIsSticky] = useState(false);
  const headerRef = useRef(null);

  const handleScroll = useCallback(() => {
    if (headerRef.current) {
      // @ts-expect-error("suppressed")
      const height = headerRef.current?.getBoundingClientRect().height;
      setIsSticky(window.scrollY > height);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, {
      once: false,
    });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const additionalStyles = isSticky ? styles.sticky : {};

  return (
    <header
      ref={headerRef}
      style={{ ...styles.headerRootCommon, ...additionalStyles }}
    >
      <div style={{ ...styles.contentRoot, ...globalStyles.headerOverlay }}>
        <section style={{ ...styles.contentSection, ...styles.logo }}>
          ShailAhir.com
        </section>
        <LinkBar links={mainLinks} />
        <section
          style={{ ...styles.contentSection, ...styles.contentSectionLogin }}
        >
          <ul style={styles.list}>
            <li style={styles.listItem}>Login</li>
            <li style={styles.listItem}>Theme</li>
          </ul>
        </section>
      </div>
    </header>
  );
};
