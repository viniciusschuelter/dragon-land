import './App.css'
import { useEffect } from 'react';
import { useDragon } from './hooks/useDragon';
import { ToastContainer } from 'react-toastify';

function App() {
    const { dragons, getAllDragons } = useDragon();

    useEffect(() => {
        getAllDragons()
    }, [getAllDragons])

  return (
    <>
        dragons
        {dragons?.map((dragon, index) => (
            <div>{dragon.name}</div>
        ))}
        <ToastContainer />
    </>
  )
}

export default App
