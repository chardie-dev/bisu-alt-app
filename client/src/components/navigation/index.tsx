import React from 'react'
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, NavigationMenuTrigger, NavigationMenuContent } from '@/components/ui/navigation-menu'
import Icon from '../icon'
import { colors } from '@/constants/colors'
import useBrowserWidth from '@/hooks/useBrowserWidth'

type NavigationBarProps = {
  isAuthenticated: boolean
}

const NavigationBar: React.FC<NavigationBarProps> = ({ isAuthenticated }) => {
  const browserWidth = useBrowserWidth()
  
  return (
    <div className='px-[20px] lg:px-[40px] md:px-[30px] sm:px-[20px] bg-tertiary-50 w-full max-w-full h-20 flex flex-row items-center justify-center grow drop-shadow-lg'>
      <div onClick={() => window.location.href = '/'} className='cursor-pointer'>
        <Icon
          color={colors.primary_500}
          style={{ 
            width: browserWidth <= 640 ? '64px' : '258px',
            height: '64px'
          }}
          icon={browserWidth <= 640 ? 'logo' : 'logo-wide'}
        />
      </div>
      <NavigationMenu className='ml-auto'>
        <NavigationMenuList>
          <NavigationMenuItem className='flex flex-col items-end'>      
            <NavigationMenuTrigger className="bg-primary-500 text-white focus:bg-primary-700 focus:text-white hover:bg-primary-700 hover:text-white px-6 py-3">
              {isAuthenticated ? 'Logout' : 'Login'}
            </NavigationMenuTrigger>
            <NavigationMenuContent className='rounded-none'>
              <ul className='flex flex-col items-start w-32 bg-neutral-100 rounded-none'>
                <li className='w-full rounded-none' >
                  <NavigationMenuLink className='rounded-none' href="/login">Alumni Login</NavigationMenuLink>
                </li>
                <li className='w-full mt-2 pt-2 border-t-2 border-t-neutral-400 rounded-none'>
                  <NavigationMenuLink className='rounded-none' href="/director">Director Login</NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

export default NavigationBar