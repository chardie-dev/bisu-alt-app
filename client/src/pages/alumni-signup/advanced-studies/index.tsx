import { signupSelector } from '@/features/signupSlice'
import { useAppSelector } from '@/hooks/useAppSelector'
import React from 'react'

const AdvancedStudiesSignup: React.FC = () => {
  const signupState = useAppSelector(signupSelector)
  console.log({ signupState })
  return (
    <div>AdvancedStudiesSignup</div>
  )
}

export default AdvancedStudiesSignup