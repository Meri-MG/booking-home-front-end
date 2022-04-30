import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';

const Home = () => (
  <>
    <div className="flex flex-col h-screen justify-center items-center md:hidden">
      <nav className="flex pb-3 justify-around absolute top-0 bg-main-color w-screen">
        <Link
          to="/Register"
          type="submit"
          className="block w-44 text-center bg-white text-main-color mt-4 py-2 rounded-2xl font-semibold mb-2"
        >
          Sign Up
        </Link>
        <Link
          to="/Login"
          type="submit"
          className="block w-44 text-center border-2 border-white bg-main-color mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
        >
          Login
        </Link>
      </nav>
      <Outlet />
    </div>
    <div className="h-screen md:flex hidden">
      <div className="flex w-1/2 login bg-main-color bg-bg-image bg-cover justify-around items-center relative">
        <div className="bg-t-main-color h-screen w-screen flex justify-around items-center">
          <div className="w-1/2">
            <h1 className="font-bold text-5xl font-sans">Booking Home</h1>
            <p className="mt-1 text-white">
              The most popular real estate application
            </p>
            <div className="flex gap-6">
              <Link
                to="/Register"
                type="submit"
                className="block w-full text-center bg-white text-main-color mt-4 py-2 rounded-2xl font-semibold mb-2"
              >
                Sign Up
              </Link>
              <Link
                to="/Login"
                type="submit"
                className="block text-center w-full border-2 border-white bg-main-color mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  </>
);
export default Home;
