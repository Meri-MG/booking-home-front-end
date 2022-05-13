import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import user from '../Assets/user.png';
import { signUserUp } from '../Redux/Register/Register';

const SignupFrom = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const { errors, status } = useSelector((state) => state.Register);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const user = {
      name,
      email,
      password,
      password_confirmation: passwordConfirmation,
    };
    dispatch(signUserUp({ user }));
  };

  return (
    <div className="flex w-1/2 justify-center items-center bg-white">
      <form onSubmit={handleOnSubmit} className="bg-white">
        {status === 'created' && navigate('/')}
        <h1 className="text-gray-800 font-bold text-2xl mb-1">Hello There</h1>
        <p className="text-sm font-normal text-gray-600 mb-7">
          Let&#39;s create an account for you !
        </p>
        {errors && (
          <ul>
            {errors.map((error) => (
              <li
                key={error}
                className="text-lg text-red-500 font-bold break-words p-2 max-w-fit"
              >
                {error}
              </li>
            ))}
          </ul>
        )}
        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
          <img className="h-4 w-4 text-gray-400" src={user} alt="user" />
          <input
            className="pl-2 outline-none border-none"
            onChange={(event) => setName(event.target.value)}
            type="text"
            name="name"
            id="name"
            placeholder="Full name"
            maxLength="50"
            required
          />
        </div>
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
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            name=""
            id="email"
            placeholder="Email Address"
            maxLength="70"
            required
          />
        </div>
        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
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
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            name="password"
            id="password"
            placeholder="Password"
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
            onChange={(event) => setPasswordConfirmation(event.target.value)}
            type="password"
            name=""
            id="password-confirmation"
            placeholder="Password confirmation"
            required
          />
        </div>
        <button
          type="submit"
          className="block w-full bg-main-color mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default SignupFrom;
