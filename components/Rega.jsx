const React = require('react');
const Layout = require('./Layout');

function Rega({ title }) {
  return (
    <Layout title={title}>
      <form id="reg-form">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Имя
          </label>
          <input
            name="name"
            type="text"
            className="form-control formtop2"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Почта
          </label>
          <input
            name="email"
            type="email"
            className="form-control formtop2"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Пароль
          </label>
          <input
            name="password"
            type="password"
            className="form-control formtop2"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Подтверждение пароля
          </label>
          <input
            name="cpassword"
            type="password"
            className="form-control formtop2"
            id="exampleInputPassword1"
          />
        </div>
        <h1 style={{ color: 'black' }} className="error errorst" />
        <button type="submit" className="btn btn-primary">
          Войти
        </button>
      </form>
    </Layout>
  );
}

module.exports = Rega;
