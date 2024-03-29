import React from 'react'
import { Route, Routes } from 'react-router-dom'

import PageContainer from '@/components/page-container'

import AlumniLogin from '@/pages/alumni-login'
import DirectorLogin from '@/pages/director-login'
import LandingPage from '@/pages/landing'
import GeneralInformationSignup from '@/pages/alumni-signup/general-information'
import EducationalBackgroundSignup from '@/pages/alumni-signup/educational-background'
import AdvancedStudiesSignup from '@/pages/alumni-signup/advanced-studies'
import JobPlacementProfileSignup from '@/pages/alumni-signup/job-placement-profile'

const AppRoutes: React.FC = () => {
  return (
    <PageContainer>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<AlumniLogin />} />
        <Route path='/director' element={<DirectorLogin />} />
        <Route path='/signup/general-information' element={<GeneralInformationSignup />} />
        <Route path='/signup/educational-background' element={<EducationalBackgroundSignup />} />
        <Route path='/signup/advanced-studies' element={<AdvancedStudiesSignup />} />
        <Route path='/signup/job-placement-profile' element={<JobPlacementProfileSignup />} />
      </Routes>
    </PageContainer>
  )
}

export default AppRoutes