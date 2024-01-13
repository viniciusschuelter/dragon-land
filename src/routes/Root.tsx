import { Routes, Route } from 'react-router'
import Login from '../components/Login'
import PrivateRoutes from './PrivateRoutes'
import DragonList from '../components/DragonList'
// import DragonCreate from '../components/DragonCreate'
// import DragonDetail from '../components/DragonDetail'
import PublicRoutes from './PublicRoutes'

export default function Root() {
    return (
        <Routes>
            <Route element={<PublicRoutes />}>
                <Route path="/" element={<Login />} />
            </Route>

            <Route element={<PrivateRoutes />}>
                <Route path="/dragons" element={<DragonList />} />
                {/*<Route path="/dragon/create" element={<DragonCreate />} />*/}
                {/*<Route path="/dragon/detail"  element={<DragonDetail />} />*/}
            </Route>
        </Routes>
    )
}
