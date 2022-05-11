import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router';

const ProtectedRoutes = () => {
  const { IsLogged_in } = useSelector((state) => state.LogIn);
  return (
    <>
      {IsLogged_in ? <Outlet /> : <Navigate to="/Login" />}

    </>
  );
};

export default ProtectedRoutes;
