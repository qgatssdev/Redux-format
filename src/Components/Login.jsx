import React from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from '../features/user';

function Login() {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(
            login({
              name: 'Omodu Uche',
              age: 21,
              email: 'chivoomodu@gmail.com',
            })
          );
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          dispatch(logout());
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Login;
