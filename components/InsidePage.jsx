const React = require("react");
const Layout = require("./Layout");

function InsidePage({ title, alldeals, user }) {
  return (
    <Layout title={title} user={user}>
      <h1 className="headinf" >{alldeals[0].strMeal}</h1>
      <img className="imginf" src={alldeals[0].strMealThumb} alt="" />
      <div className="infoinf" >{alldeals[0].strInstructions}</div>
    </Layout>
  );
}

module.exports = InsidePage;
