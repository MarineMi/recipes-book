const React = require("react");
const Layout = require("./Layout");

function CarPage({ fod }) {
  return (
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
        <a href={`/update/`} className="btn btn-warning btn-">
          Add
        </a>
        <a href={fod.strYoutube} className="btn btn-danger btn-">
          YouTube
        </a>
      </div>
    </div>
  );
}

module.exports = CarPage;
