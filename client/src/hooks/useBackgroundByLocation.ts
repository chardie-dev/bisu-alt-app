
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
      backgroundConfig.page = "bg-[url('@/assets/images/topo-contour-bg-primary.svg')] h-[calc(100%-80px)]"
      break;
    }
    case '/login': {
      backgroundConfig.nav = 'bg-[#FFFCE8]',
      backgroundConfig.page = "bg-[url('@/assets/images/topo-contour-bg-secondary.svg')] h-[calc(100%-80px)]"
      break;
    }
    case '/education-background-signup':
    case '/general-information-signup': {
      backgroundConfig.nav = 'bg-neutral-100',
      backgroundConfig.page = "bg-[url('@/assets/images/topo-contour-bg-neutral.svg')]"
      break;
    }
    case '/':
    case '/home': {
      backgroundConfig.nav = 'bg-tertiary-50',
      backgroundConfig.page = "bg-tertiary-50 h-[calc(100%-80px)]"
      break;
    }
    default: {
      backgroundConfig.nav = 'bg-white',
      backgroundConfig.page = "bg-white h-[calc(100%-80px)]"
      break;
    }
  }

  return backgroundConfig
}