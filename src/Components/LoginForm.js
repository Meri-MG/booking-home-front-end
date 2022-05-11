import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { logUserIn } from '../Redux/Login/Login';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { status, IsLogged_in } = useSelector((state) => state.LogIn);
  if (status === 'created' || IsLogged_in)navigateTo('/');

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const user = { email, password };
    dispatch(logUserIn({ user }));
  };

  return (
    <div className="flex w-1/2 justify-center items-center bg-white">
      <form onSubmit={handleOnSubmit} className="bg-white">
        <h1 className="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
        <p className="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>
        {status === 401 && (<p className="text-lg text-red-500 font-bold break-words p-4 max-w-fit">Invalid email or Password please check your information and try again</p>)}
        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
            />
          </svg>
          <input
            className="pl-2 outline-none border-none"
            type="email"
            name="email"
            value={email}
            id="email"
            placeholder="Email Address"
            onChange={(event) => setEmail(event.target.value)}
            maxLength="70"
            required
          />
        </div>
        <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
              clipRule="evenodd"
            />
          </svg>
          <input
            className="pl-2 outline-none border-none"
            type="password"
            name="Password"
            value={password}
            id="password"
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
            maxLength="70"
            required
          />
        </div>
        <button
          type="submit"
          className="block w-full bg-main-color mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
