import { Route, Routes } from 'react-router';
import Home from './Components/Home';
import LoginForm from './Components/LoginForm';
import SignupFrom from './Components/SignupFrom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Home />} path="/">
          <Route element={<LoginForm />} path="/Login" />
          <Route element={<SignupFrom />} path="/Register" />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
