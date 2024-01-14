import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthContext } from './contexts/auth.context'
import { useAuth } from './hooks/useAuth';
import Root from './routes/Root';

function App() {
  const { user, setUser } = useAuth();
  return (
      <div className='App'>
          <BrowserRouter>
              {/*<AuthContext.Provider value={{ user, setUser }}>*/}
                  <Root></Root>
              {/*</AuthContext.Provider>*/}
          </BrowserRouter>
      </div>
  )
}

export default App
