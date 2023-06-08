const React = require("react");
const Layout = require("./Layout");
const Food = require("./Food_favorit")

function MainPage({ title, user, alldeals }) {
  console.log(alldeals.length)
  return (
    <>
      <Layout title={title} user={user}>
        {alldeals.length == 0 ? (<div className="ups">В избранном пока пусто 😢</div>) : (<a></a>)}
        {user ? (
          <>
            <div className="cars_list">
              {alldeals.map((fod) => (
                <Food fod={fod} />
              ))}
            </div>
          </>
        ) : (
          <p>Добро пожаловать</p>
        )}
      </Layout>
    </>
  );
}

module.exports = MainPage;
