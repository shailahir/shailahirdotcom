import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Work Sans",
              variants: ["400", "500", "600", "700"],
            },
            {
              family: "Montserrat",
              variants: ["400", "500", "600", "700"],
            },
          ],
        },
        formats: ["woff2", "woff"],
        useMinify: true,
        usePreload: true,
        usePreconnect: true,
      },
    },
  ],
};

export default config;
