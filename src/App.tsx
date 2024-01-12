import './App.css'
import { useEffect } from 'react';
import { useDragon } from './hooks/useDragon';
import { ToastContainer } from 'react-toastify';
import { useAuth } from './hooks/useAuth';
import { AuthContext } from './contexts/auth.context'

function App() {
    const { dragons, getAllDragons } = useDragon();
    const { user, login, logout, setUser } = useAuth();

    useEffect(() => {
        getAllDragons()
    }, [getAllDragons])

    console.log()

  return (
    <>

        <AuthContext.Provider value={{ user, setUser }}>
            dragons
            {dragons?.map((dragon, index) => (
                <div>{dragon.name}</div>
            ))}
            <ToastContainer />
        </AuthContext.Provider>
    </>
  )
}

export default App
