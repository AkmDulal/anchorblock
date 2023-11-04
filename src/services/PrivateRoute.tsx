import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const isAuthenticated = useSelector((state: any) => !!state.user.token);
console.log(isAuthenticated, "isAuthenticated isAuthenticated");

  if (isAuthenticated) {
    return <Outlet />;
  } else {
    return <Navigate to="/auth/signin" />;
  }
};

export default PrivateRoute;
