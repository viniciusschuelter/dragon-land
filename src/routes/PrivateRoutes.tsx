import { Navigate, Outlet } from 'react-router'
import { useAuth } from '../hooks/useAuth';

const PrivateRoutes = () => {
    const { user } = useAuth();

    return (user || true ? (<Outlet />) : (<Navigate to='/' />))
}

export default PrivateRoutes
