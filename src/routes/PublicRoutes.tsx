import { Navigate, Outlet } from 'react-router'
import { useAuth } from '../hooks/useAuth';

const PublicRoutes = () => {
    const { user } = useAuth();

    return (
        !user ? (
            <Outlet />
        ) : (
            <Navigate to='/dragons' />
        )
    )
}

export default PublicRoutes
