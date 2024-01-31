import './App.css'
// import { Button } from './components/ui/button'
import NavigationBar from './components/navigation'


function App() {
  return (
    <div className='font-inter'>
      <NavigationBar isAuthenticated={false}/>
    </div>
  )
}

export default App
