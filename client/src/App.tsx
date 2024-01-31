import NavigationBar from './components/navigation'
import AppRoutes from './routes'
import { BrowserRouter } from 'react-router-dom'


function App() {
  return (
    <div className='font-inter h-dvh'>
      <NavigationBar isAuthenticated={false}/>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  )
}

export default App
