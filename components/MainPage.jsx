const React = require("react");
const Layout = require("./Layout");
const Food = require("./Food")

function MainPage({ title, user, alldeals }) {
  return (
    <>
      <Layout title={title} user={user}>
        {user ? (
          <>
            <div>
              <form id="findfood" action="/" method="POST">
                <div className="mb-3 inputmane">
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="First letter or name"
                  />
                </div>
                <button type="submit" className="btn btn-secondary findbtn">
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
