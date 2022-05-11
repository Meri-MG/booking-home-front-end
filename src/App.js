import { Route, Routes } from 'react-router';
import Home from './Components/Home';
import LoginForm from './Components/LoginForm';
import SignupFrom from './Components/SignupFrom';
import Sidebar from './Components/Sidebar';
import Hero from './Components/Hero';
import DetailsPage from './Components/DetailsPage';
import GlobalStyle from './globalStyles';
import DeleteApartment from './Components/DeleteApartment';

function App() {
  return (
    <div className="App">
      <>
        <GlobalStyle />
        <Sidebar />
        <Routes>
          <Route element={<Hero />} path="/apartments" />
          <Route element={<DeleteApartment />} path="/deleteApartment" />
          <Route element={<DetailsPage />} path="/apartments/:id" />
          <Route element={<Home />} path="/">
            <Route element={<LoginForm />} path="/Login" />
            <Route element={<SignupFrom />} path="/Register" />
          </Route>
        </Routes>
      </>
    </div>
  );
}

export default App;
