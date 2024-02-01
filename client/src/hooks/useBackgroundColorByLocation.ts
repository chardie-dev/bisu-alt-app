
import { useLocation } from 'react-router-dom'

const useBackgroundColorByLocation = (): string => {
  const location = useLocation()
  
  switch(location.pathname) {
    case '/':
    case '/home': return 'bg-tertiary-50'
    default: return 'bg-white'
  }
}

export default useBackgroundColorByLocation