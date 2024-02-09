import React from 'react'

import { useAppSelector } from '@/hooks/useAppSelector'
import { signupSelector } from '@/features/signupSlice'

const JobPlacementProfileSignup: React.FC = () => {
  const signupState = useAppSelector(signupSelector)
  console.log({ signupState })
  return (
    <div>JobPlacementProfileSignup</div>
  )
}

export default JobPlacementProfileSignup