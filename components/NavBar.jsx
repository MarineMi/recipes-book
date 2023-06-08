const React = require('react');

function NavBar({ user }) {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light navbar1'>
      <div className='container-fluid'>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <a className='nav-link active' aria-current='page' href='/'>
                Main
              </a>
            </li>

            {user ? (
              <>
                <li>
                  <a
                    className='nav-link active'
                    aria-current='page'
                    href='/favorites'
                  >
                    Избранное
                  </a>
                </li>
                <li>
                  <a className='nav-link active' aria-current='page'>
                    {user.name}
                  </a>
                </li>
                <li className='nav-item'>
                  <a
                    className='nav-link active'
                    aria-current='page'
                    href='/api/auth/logout'
                  >
                    Logout
                  </a>
                </li>
              </>
            ) : (
              <>
                <li className='nav-item'>
                  <a
                    className='nav-link active reg'
                    aria-current='page'
                    href='/auth/registration'
                  >
                    Registration
                  </a>
                </li>
                <li className='nav-item'>
                  <a
                    className='nav-link active log'
                    aria-current='page'
                    href='/auth/qwer'
                  >
                    LogIn
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

module.exports = NavBar;
