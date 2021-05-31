import React, { useState } from 'react';
import App from '../../App';

const initialValues = {
  username: 'Thiago',
  password: 'brolly377',
};

function LoginComponent() {
  const [formValues, setFormValues] = useState(initialValues);
  const [token, setToken] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({...formValues, [name]: value})
  };

  const hadleSubmit = (e) => {
    console.log(formValues);

    const url = 'http://127.0.0.1:8000/api-token-auth/';
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({username: formValues.username, password: formValues.password})
    };
    fetch(url, requestOptions)
      .then(response => response.json())
      .then(data => {
        localStorage.setItem('token', data.token);
        setToken({token: data.token});
      });

    e.preventDefault();
  }

  const logout = () => {
    localStorage.removeItem('token');
    setToken({token: null});
  }

  const tokenId = localStorage.getItem('token');

  return (
    !tokenId ?
    <form onSubmit={hadleSubmit}>
      <label>
        Nome:
        <input type="text" name="username" onChange={handleChange} value={formValues.username} />
        <input type="password" name="password" onChange={handleChange} value={formValues.password} />
      </label>
      <button type="submit">Enviar</button>
    </form>

    :

    <>
      <App />
      <button onClick={logout}>Logout</button>
    </>
  );
}

export default LoginComponent;