import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthContext } from './contexts/auth.context'
import { useAuth } from './hooks/useAuth';
import Root from './routes/Root';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { user, setUser } = useAuth();
  return (
      <div className='container'>
          <BrowserRouter>
              <AuthContext.Provider value={{ user, setUser }}>
                  <Root></Root>
              </AuthContext.Provider>
          </BrowserRouter>
          <ToastContainer />
      </div>
  )
}

export default App
