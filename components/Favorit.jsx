const React = require("react");
const Layout = require("./Layout");
const Food = require("./Food");

function Favorit({ title, user, favorRec = [] }) {
  return (
    <Layout title={title} user={user}>
      <div className="favor_list">
        {favorRec.map((fod) => (
          <Food fod={fod} user={user} />
        ))}
      </div>
    </Layout>
  );
}
module.exports = Favorit;
