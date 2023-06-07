const React = require("react");
const Layout = require("./Layout");

function Food({ fod }) {
  return (
    <form className="card-form" action="" method="POST">
      <div
        data-id={fod.idMeal}
        className="card"
        style={{ width: "18rem", margin: "5px" }}
      >
        <div>
          <img src={fod.strMealThumb} className="card-img-top" alt="animal" />
          <p>{fod.strMeal}</p>
          <p>{fod.strInstructions}</p>

          {/* <a>{fod.}</a>
        <a>{fod.}</a> */}
        </div>
        <div className="card-button">
          <h5 className="card-title">{fod.name}</h5>
          <p className="card-text">{fod.vin}</p>
          <button type="submit" className="btn btn-warning btn btn-add">
            Add favorit
          </button>
          <a href={fod.strYoutube} className="btn btn-danger btn-">
            YouTube
          </a>
        </div>
      </div>
    </form>
  );
}

module.exports = Food;
