import { graphql, navigate, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
// import placeholderImage from "../../images/optimized_placeholder.webp";
import React from "react";

const styles = {
  cardRoot: {
    border: "1px solid #d9d9d9",
    borderRadius: "8px",
    // backgroundColor: "#fafafa",
    background: "transparent",
  },
  internalContainer: {
    padding: "12px",
  },
  cardTitle: {
    lineHeight: "1.2rem",
  },
  button: {
    backgroundColor: "var(--text-primary)",
    border: "1px solid #d9d9d9",
    padding: "6px 12px",
    cursor: "pointer",
    borderRadius: "6px",
    fontFamily: "Work Sans, sans-serif",
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

  const data = useStaticQuery(graphql`
    query {
      fallbackImage: file(relativePath: { eq: "optimized_placeholder.webp" }) {
        childImageSharp {
          gatsbyImageData(
            width: 600
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `);

  const fallback = getImage(data.fallbackImage);

  return (
    <div style={styles.cardRoot}>
      <div style={styles.internalContainer}>
        <section>
          {/* <img src={imageUri ?? placeholderImage} height="200px" width="100%" /> */}
          {imageUri ? (
            <img
              src={imageUri}
              alt="Project Image"
              height="200px"
              width="100%"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  fallback?.images.fallback?.src || "";
              }}
            />
          ) : (
            <GatsbyImage
              image={fallback!}
              style={{
                height: "200px",
              }}
              alt="Default card image"
            />
          )}
        </section>
        <section>
          <h3 style={styles.cardTitle}>{title}</h3>
          <p>{summary}</p>
        </section>
        <section>
          <button style={styles.button} onClick={onClickKnowMore}>
            Know more &gt;{" "}
          </button>
        </section>
      </div>
    </div>
  );
};
