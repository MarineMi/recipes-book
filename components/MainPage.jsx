const React = require("react");
const Layout = require("./Layout");
const Food = require("./Food");

function MainPage({ title, user, alldeals }) {
  return (
    <Layout title={title} user={user}>
      <div className="cars_list">
        {alldeals.map((fod) => (
          <Food fod={fod} />
        ))}
      </div>
    </Layout>
  );
}

module.exports = MainPage;
