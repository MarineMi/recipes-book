const React = require("react");
const Layout = require("./Layout");
const Food = require("./Food");

function MainPage({ title, user, alldeals }) {
  return (
    <>
      <Layout title={title} user={user}>
        {user ? (
          <>
            <div>
              <a href={`./`} className="btn btn-primary">
                Random
              </a>
              <form id="find food" action="/" method="POST">
                <div className="mb-3">
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="First letter or name"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Find
                </button>
              </form>
            </div>

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
