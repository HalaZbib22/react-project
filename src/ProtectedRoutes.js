import { Navigate, Outlet } from 'react-router';

const ProtectedRoutes = () => {
	const ttoken = JSON.parse(localStorage.getItem('token'))
	const isAuth = ttoken.user;
  return isAuth ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectedRoutes