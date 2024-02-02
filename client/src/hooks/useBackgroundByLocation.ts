
import { useLocation } from 'react-router-dom'

interface IBackgroundConfig {
  nav: string | undefined,
  page: string | undefined
}

export const useBackgroundByLocation = (): IBackgroundConfig => {
  const location = useLocation()
  let backgroundConfig = {
    nav: '',
    page: ''
  }
  
  switch(location.pathname) {
    case '/director': {
      backgroundConfig.nav = 'bg-[#F5EBFF]',
      backgroundConfig.page = "bg-[url('@/assets/images/topo-contour-bg-primary.svg')]"
      break;
    }
    case '/':
    case '/home': {
      backgroundConfig.nav = 'bg-tertiary-50',
      backgroundConfig.page = "bg-tertiary-50"
      break;
    }
    default: {
      backgroundConfig.nav = 'bg-white',
      backgroundConfig.page = "bg-white"
      break;
    }
  }

  return backgroundConfig
}