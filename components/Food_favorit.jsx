const React = require("react");

function Food({ fod }) {
  return (
    <form className="card-formmm" action="" method="POST">
      <div
        data-id={fod.idMeal}
        className="cardd"
      >
        <div className="textoviki">
          <img src={fod.strMealThumb} className="card-img-top" alt="food" />
          <p className="mainname">{fod.strMeal}</p>
          <p>Country - {fod.strArea}</p>
          <p>ㅤ{fod.strTags}</p>
        </div>
        <div className="card-button manybut manybut2 ">
          <h5 className="card-title">{fod.name}</h5>
          <p className="card-text">{fod.vin}</p>
          <button
            data-id={fod.idMeal}
            type="button"
            className="btn btn-secondary btn btn-delete"
          >
            Удалить
          </button>
          <a href={`/info/${fod.idMeal}`} className="btn btn-secondary btn-info">
            Рецепт
          </a>
          <a href={fod.strYoutube} className="btn btn-secondary btn-">
            Видео
          </a>
        </div>
      </div>
    </form>
  );

}

module.exports = Food;
