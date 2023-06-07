const React = require("react");
const Layout = require("./Layout");

function Favorit({ title, user }) {
  return (
    <Layout title={title} user={user}>
      <div className="cars_list"></div>
    </Layout>
  );
}
module.exports = Favorit
