const regForm = document.querySelector('#reg-form');
const logForm = document.querySelector('#log-form');

if (regForm) {
  regForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { name, email, password, cpassword } = e.target;
    const res = await fetch('/api/auth/registration', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        password: password.value,
        cpassword: cpassword.value,
      }),
    });
    const data = await res.json();
    if (data.message !== 'ok') {
      document.querySelector('.error').innerHTML = data.message;
    } else {
      window.location.assign('/');
    }
  });
}

if (logForm) {
  logForm.addEventListener('submit', async (e) => {
    console.log(1111111);
    e.preventDefault();
    const { email, password } = e.target;
    const res = await fetch('/api/auth/qwer', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    });
    console.log(22222222);
    const data = await res.json();
    console.log(3333333);
    if (data.message !== 'ok') {
      document.querySelector('.error').innerHTML = data.message;
    } else {
      window.location.assign('/');
    }
  });
}
