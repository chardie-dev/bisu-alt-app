import React from 'react'
import { Route, Routes } from 'react-router-dom'

import AlumniLogin from '@/pages/alumni-login'
import DirectorLogin from '@/pages/director-login'
import LandingPage from '@/pages/landing'

import PageContainer from '@/components/page-container'
import GeneralInformationSignup from '@/pages/alumni-signup/general-information'

const AppRoutes: React.FC = () => {
  return (
    <PageContainer>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<AlumniLogin />} />
        <Route path='/director' element={<DirectorLogin />} />
        <Route path='/general-information-signup' element={<GeneralInformationSignup />} />
      </Routes>
    </PageContainer>
  )
}

export default AppRoutes