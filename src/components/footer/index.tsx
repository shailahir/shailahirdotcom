import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const styles = {
  footerRoot: {
    marginBottom: "24px",
    padding: "40px",
    display: "flex",
    alignItems: "center",
  },
  copyright: {
    flex: 1,
  },
  list: {
    display: "flex",
    listStyle: "none",
  },
  listItem: {
    marginLeft: "24px",
  },
};

export const Footer = () => {
  return (
    <div style={styles.footerRoot}>
      <section style={styles.copyright}>
        <p>
          Copyright &copy; 2016 - {new Date().getFullYear()}, All Rights
          Reserved
        </p>
      </section>
      <div style={{ display: "flex", gap: "1rem" }}>
        <a
          style={{ color: "#000" }}
          href="https://in.linkedin.com/in/shailendra-ahir"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={32} />
        </a>
        <a
          style={{ color: "#000" }}
          href="https://github.com/shailahir"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={32} />
        </a>
        <a
          style={{ color: "#000" }}
          href="instagram.com/shail_ahir_09"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={32} />
        </a>
      </div>
    </div>
  );
};
