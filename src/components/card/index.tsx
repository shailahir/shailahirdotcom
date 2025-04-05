import { navigate } from "gatsby";
import React from "react";

const styles = {
  cardRoot: {
    border: "1px solid lightgrey",
    borderRadius: "8px",
  },
  internalContainer: {
    padding: "16px",
  },
};

export type CardProps = {
  imageUri: string;
  title: string;
  summary: string;
  knowMoreLink: string;
};

export const Card = ({ imageUri, knowMoreLink, summary, title }: CardProps) => {
  const onClickKnowMore = () => {
    if (knowMoreLink) {
      // navigate to the page
      navigate(knowMoreLink);
    }
  };

  return (
    <div style={styles.cardRoot}>
      <div style={styles.internalContainer}>
        <section>
          <img src={imageUri} height="200px" width="100%" />
        </section>
        <section>
          <h3>{title}</h3>
          <p>{summary}</p>
        </section>
        <section>
          <button onClick={onClickKnowMore}>Know more &gt; </button>
        </section>
      </div>
    </div>
  );
};
