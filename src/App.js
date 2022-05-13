import { Route, Routes } from 'react-router';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Home from './Components/Home';
import LoginForm from './Components/LoginForm';
import SignupFrom from './Components/SignupFrom';
import Sidebar from './Components/Sidebar';
import Hero from './Components/Hero';
import DetailsPage from './Components/DetailsPage';
import GlobalStyle from './globalStyles';
import DeleteApartment from './Components/DeleteApartment';
import ProtectedRoutes from './Components/ProtectedRoutes';
import { isLoggedIn } from './Redux/Login/Login';
import ApartmentInput from './Components/ApartmentInput';
import MyReservations from './Components/MyReservations';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(isLoggedIn());
  }, []);

  return (
    <div className="App">
      <>
        <GlobalStyle />
        <Routes>
          <Route element={<Home />}>
            <Route element={<LoginForm />} path="/Login" />
            <Route element={<SignupFrom />} path="/Register" />
          </Route>
          <Route
            element={(
              <>
                <Sidebar />
                <ProtectedRoutes />
              </>
            )}
          >
            <Route element={<Hero />} path="/" />
            <Route element={<DeleteApartment />} path="/deleteApartment" />
            <Route element={<DetailsPage />} path="/apartments/:id" />
            <Route element={<ApartmentInput />} path="/addApartment" />
            <Route element={<MyReservations />} path="/reservations" />
          </Route>
        </Routes>
      </>
    </div>
  );
}

export default App;
