const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query NewItemQuery {
      allStrapiNewsItem {
        edges {
          node {
            id
            Date(formatString: "DD.MM.yyyy")
            Text
            Title
            Img {
              localFile {
                url
              }
            }
          }
        }
      }
      allStrapiBlogs {
        edges {
          node {
            id
            Date(formatString: "DD.MM.yyyy")
            Text
            Title
            Img {
              localFile {
                url
              }
            }
          }
        }
      }
    }
  `);

  const { allStrapiNewsItem } = data;
  const news = allStrapiNewsItem.edges;

  news.forEach((nodes, index) => {
    actions.createPage({
      path: `/news/${nodes.node.id}`,
      component: path.resolve("./src/pages/newsitem.js"),
      context: nodes,
    });
  });

  const { allStrapiBlogs } = data;
  const blog = allStrapiBlogs.edges;

  blog.forEach((nodes, index) => {
    actions.createPage({
      path: `/blog/${nodes.node.id}`,
      component: path.resolve("./src/pages/newsitem.js"),
      context: nodes,
    });
  });
};
