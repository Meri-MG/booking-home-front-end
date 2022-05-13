import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { logUserOut } from '../Redux/Login/Login';
import logo from '../Assets/logo.jpeg';

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  const signUserOut = () => {
    dispatch(logUserOut()).then(() => navigateTo('/Login'));
    setShowSidebar(!showSidebar);
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        {showSidebar ? (
          <button
            className="hover:ring-2 hover:ring-[#555555]-600 outline-0 fixed left-10 top-6 z-50 border-solid border-2 border-[#555555]-600 rounded-full flex text-2xl text-[#555555] p-2 items-center cursor-pointer"
            onClick={() => setShowSidebar(!showSidebar)}
            type="button"
          >
            <AiOutlineClose />
          </button>
        ) : (
          <button
            onClick={() => setShowSidebar(!showSidebar)}
            className="hover:ring-2 hover:ring-[#555555]-600 outline-0 fixed left-10 top-6  z-30 border-solid border-2 border-[#555555]-600 flex items-center text-[#555555] text-2xl rounded-md p-2 cursor-pointer"
            type="button"
          >
            <AiOutlineMenu />
          </button>
        )}

        <div
          className={`h-screen top-0 left-0 w-80 bg-[#fdfcf7] p-10 pl-10 px-5 fixed transition-ease-in-out ease-in-out duration-300 z-30 ${
            showSidebar ? 'translate-x-0 ' : '-translate-x-full'
          }`}
        >
          <nav>
            <div className="container flex flex-wrap justify-between items-center mx-auto">
              <div className="px-6 pt-8 pb-4">
                <Link to="/">
                  <button
                    className="uppercase"
                    type="button"
                    onClick={() => setShowSidebar(!showSidebar)}
                  >
                    <img
                      src={logo}
                      alt="logo"
                      className="w-60 h-15 rounded-full"
                    />
                  </button>
                </Link>
              </div>
              <div>
                <ul>
                  <li>
                    <Link
                      className="block py-2 px-6 text-md text-[#555555]-700 hover:bg-[#96bf01] hover:text-[#fdfcf7] hover:rounded-md uppercase border-b-4"
                      to="/"
                    >
                      <button
                        className="uppercase"
                        type="button"
                        onClick={() => setShowSidebar(!showSidebar)}
                      >
                        Apartments
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block py-2 px-6 text-md text-[#555555]-700 hover:bg-[#96bf01] hover:text-[#fdfcf7] hover:rounded-md uppercase border-b-4"
                      to="/reservations"
                    >
                      <button
                        className="uppercase"
                        type="button"
                        onClick={() => setShowSidebar(!showSidebar)}
                      >
                        My Reservations
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block py-2 px-6 text-md text-[#555555]-700 hover:bg-[#96bf01] hover:text-[#fdfcf7] hover:rounded-md uppercase border-b-4"
                      to="/addApartment"
                    >
                      <button
                        className="uppercase"
                        type="button"
                        onClick={() => setShowSidebar(!showSidebar)}
                      >
                        Add Apartment
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block py-2 px-6 text-md text-[#555555]-700 hover:bg-[#96bf01] hover:text-[#fdfcf7] hover:rounded-md uppercase border-b-4"
                      to="/deleteApartment"
                    >
                      <button
                        className="uppercase"
                        type="button"
                        onClick={() => setShowSidebar(!showSidebar)}
                      >
                        Delete Apartment
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block py-2 px-6 text-md text-[#555555]-700 hover:bg-[#96bf01] hover:text-[#fdfcf7] hover:rounded-md uppercase border-b-4"
                      to="/"
                    >
                      <button
                        className="uppercase"
                        type="button"
                        onClick={() => signUserOut()}
                      >
                        Log out
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="footer fixed inset-x-0 bottom-0 p-4">
            <div className="py-8 px-6 md:flex md:items-center md:justify-between ">
              <span className="text-sm text-[#555555] sm:text-center">
                © 2022
                <a href="https://www.microverse.org"> Microverse™</a>
                . All Rights
                Reserved.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
