const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query NewItemQuery {
      allStrapiNewsItem {
        edges {
          node {
            id
          }
        }
      }
    }
  `);

  const { allStrapiNewsItem } = data;
  const post = allStrapiNewsItem.edges;

  post.forEach((nodes, index) => {
    actions.createPage({
      path: `/news/${nodes.node.id}`,
      component: path.resolve("./src/pages/newsitem.js"),
      context: nodes,
    });
  });
};
