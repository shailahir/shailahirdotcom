import React from "react";

const styles = {
  footerRoot: {
    marginBottom: "24px",
    padding: "40px",
    display: "flex",
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
      <section>
        <ul style={styles.list}>
          <li>Github</li>
          <li style={styles.listItem}>LinkedIn</li>
          <li style={styles.listItem}>Instagram</li>
        </ul>
      </section>
    </div>
  );
};
