import { Route, Routes } from 'react-router';
import Home from './Components/Home';
import LoginForm from './Components/LoginForm';
import SignupFrom from './Components/SignupFrom';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <div className="App">
      <>
        <Sidebar />
        <Routes>
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
