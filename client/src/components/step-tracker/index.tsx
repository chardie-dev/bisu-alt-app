import React from 'react'
import { CheckIcon } from 'lucide-react';

type StepTrackerProps = {
  currentStep: number,
  totalSteps: number
}

const StepTracker: React.FC<StepTrackerProps> = ({ currentStep, totalSteps }) => {
  const stepsArray = Array.from({ length: totalSteps }, (_, index) => index + 1);
  return (
    <div className='w-full max-w-full'>
      <div className="flex justify-center items-center mb-4">
        {stepsArray.map((_, index) => (
          <>
            <div
              key={`step-${index}`}
              className={`flex text-center items-center justify-center w-8 h-8 rounded-full ${
                index + 1 < currentStep ? 'bg-success-300 text-white font-bold' : index + 1 === currentStep ? 'bg-primary-300 text-white font-bold' : 'bg-gray-300 text-gray-500'
              }`}
            >
              {
                index + 1 < currentStep 
                ? <CheckIcon className="h-6 w-6" />
                : <span>{index + 1}</span>
              }
              
          </div>
          {
           index < totalSteps - 1 && <div key={`connector-${index}`} className={`bg-neutral-500 h-[2px] w-10`} /> 
          }
          </>
        ))}
      </div>
    </div>
  )
}

export default StepTracker