import { Routes, Route } from 'react-router'
import Login from '../pages/Login'
import PrivateRoutes from './PrivateRoutes'
import DragonList from '../pages/DragonList'
import DragonCreate from '../pages/DragonCreate'
import DragonDetail from '../pages/DragonDetail'
import PublicRoutes from './PublicRoutes'
import DragonEdit from '../pages/DragonEdit';

export default function Root() {
    return (
        <Routes>
            <Route element={<PublicRoutes />}>
                <Route path='/' element={<Login />} />
            </Route>

            <Route element={
                <PrivateRoutes />
            }>
                <Route path='/dragons' element={<DragonList />} />
                <Route path='/dragon/create' element={<DragonCreate />} />
                <Route path='/dragon/edit/:dragonId' element={<DragonEdit />} />
                <Route path='/dragon/detail/:dragonId'  element={<DragonDetail />} />
            </Route>
        </Routes>
    )
}
