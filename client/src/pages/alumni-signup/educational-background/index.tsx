import { signupSelector } from '@/features/signupSlice'
import { useAppSelector } from '@/hooks/useAppSelector'
import React from 'react'

const EducationalBackgroundSignup: React.FC = () => {
  const signupData = useAppSelector(signupSelector)
  console.log({ signupData })
  return (
    <div>EducationalBackgroundSignup</div>
  )
}

export default EducationalBackgroundSignup