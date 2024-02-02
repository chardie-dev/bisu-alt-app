import React from 'react'
import { Route, Routes } from 'react-router-dom'

import AlumniLogin from '@/pages/alumni-login'
import DirectorLogin from '@/pages/director-login'
import LandingPage from '@/pages/landing'

import PageContainer from '@/components/page-container'

const AppRoutes: React.FC = () => {
  return (
    <PageContainer>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<AlumniLogin />} />
        <Route path='/director' element={<DirectorLogin />} />
      </Routes>
    </PageContainer>
  )
}

export default AppRoutes