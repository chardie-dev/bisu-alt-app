import React, { useState } from 'react'
import { useNavigate } from 'react-router'


import StepTracker from '@/components/step-tracker'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

import AdvancedStudiesCard from './AdvancedStudiesCard'

import { AdvancedStudiesType, saveAdvancedStudies, signupSelector } from '@/features/signupSlice'
import { useAppSelector } from '@/hooks/useAppSelector'
import { useAppDispatch } from '@/hooks/useAppDispatch'

type AdvancedStudiesErrorType = {
  title?: string,
  date?: string,
  placeOfTrainingOrInstitution?: string
}

const AdvancedStudiesSignup: React.FC = () => {
  const signupState = useAppSelector(signupSelector)
  console.log({ signupState })
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const [advancedStudiesList, setAdvancedStudiesList] = useState<Array<AdvancedStudiesType>>([])
  const [advancedStudiesObj, setAdvancedStudiesObj] = useState<AdvancedStudiesType>({
    title: "",
    date: "",
    placeOfTrainingOrInstitution: ""
  })
  const [advancedStudiesError, setAdvancedStudiesError] = useState<AdvancedStudiesErrorType>({})

  const onSubmitFormHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log({ advancedStudiesList })
    dispatch(saveAdvancedStudies(advancedStudiesList))
    navigate('/signup/job-placement-profile')
  }
  const onFormChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget
    setAdvancedStudiesObj({
      ...advancedStudiesObj,
      [name]: value
    })
  }

  const onAddAdvancedStudiesToArray = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    let errorObj: AdvancedStudiesErrorType = {
      title: "",
      date: "",
      placeOfTrainingOrInstitution: ""
    }
    let errorFlag = false
    if(!advancedStudiesObj.title) {
      errorObj.title = "Title must not be empty"
      errorFlag = true
    }
    if(!advancedStudiesObj.date) {
      errorObj.date = "Date must not be empty"
      errorFlag = true
    }
    if(!advancedStudiesObj.placeOfTrainingOrInstitution) {
      errorObj.placeOfTrainingOrInstitution = "Institution must not be empty"
      errorFlag = true
    }
    if(errorFlag) {
      setAdvancedStudiesError(errorObj)
      return
    }
    const newList = [...advancedStudiesList, advancedStudiesObj]
    setAdvancedStudiesObj({
      title: "",
      date: "",
      placeOfTrainingOrInstitution: ""
    })
    setAdvancedStudiesList(newList)
  }

  const onDeleteAdvancedStudiesFromArray = (e: AdvancedStudiesType) => {
    setAdvancedStudiesList(advancedStudiesList.filter((_e: AdvancedStudiesType) => e.title !== _e.title && e.date !== _e.date && e.placeOfTrainingOrInstitution && _e.placeOfTrainingOrInstitution))
  }

  return (
    <div className="w-full h-full max-w-full flex justify-center max-h-[calc(100%-20px)] items-start md:items-center" >
      <div className={`bg-white h-full md:h-fit w-[500px] ${advancedStudiesList && advancedStudiesList.length > 0 ? 'min-h-[600px]' : ''} max-h-full rounded-2xl flex flex-col justify-start md:justify-center items-start md:items-center p-5`}>
        <div className='w-full max-w-full flex justify-center' >
          <StepTracker currentStep={3} totalSteps={4} />
        </div>
        <h2 className='font-bold text-3xl md:text-2xl mt-3'>Advanced Studies</h2>
        <div className='text-sm text-start md:text-center mt-2'>Please list down all professional or work-related training program(s) including advanced studies you have attended after college.</div>
        <form onSubmit={onSubmitFormHandler} className='w-full max-w-full flex flex-col gap-4 pt-8'>
          <Label>Title of Training or Advanced Studies</Label>
          <Input 
            value={advancedStudiesObj.title}
            onChange={(e: React.FormEvent<HTMLInputElement>) => onFormChangeHandler(e)}
            type='text'
            name='title'
          />
          { advancedStudiesError.title && <div className='text-red-500 text-sm'>{advancedStudiesError.title}</div> }
          <Label>Date to Finish Training or Studies</Label>
          <Input 
            value={advancedStudiesObj.date}
            onChange={(e: React.FormEvent<HTMLInputElement>) => onFormChangeHandler(e)}
            type='date'
            name='date'
          />
          { advancedStudiesError.date && <div className='text-red-500 text-sm'>{advancedStudiesError.date}</div> }
          <Label>Place of Training or Institution</Label>
          <Input 
            value={advancedStudiesObj.placeOfTrainingOrInstitution}
            onChange={(e: React.FormEvent<HTMLInputElement>) => onFormChangeHandler(e)}
            type='text'
            name='placeOfTrainingOrInstitution'
          />
          { advancedStudiesError.placeOfTrainingOrInstitution && <div className='text-red-500 text-sm'>{advancedStudiesError.placeOfTrainingOrInstitution}</div> }
          <Label>Reason</Label>
          <Input 
            value={advancedStudiesObj.reason}
            onChange={(e: React.FormEvent<HTMLInputElement>) => onFormChangeHandler(e)}
            type='text'
            name='reason'
          />
          <Button 
            className='mt-auto' 
            onClick={(e: React.FormEvent<HTMLButtonElement>) => onAddAdvancedStudiesToArray(e)}
          >
            Add Training or Advanced Studies
          </Button>
          {
            advancedStudiesList && advancedStudiesList.length > 0 &&
            <div className='flex flex-col gap-2 w-full mt-4 w-max-full'>
              <div className='text-base font-bold'>Trainings / Advanced Studies</div>
              {/**list of studies */}
              {
                advancedStudiesList.map((_as: AdvancedStudiesType, index) => {
                  return (
                    <AdvancedStudiesCard 
                      key={`advSt-${index}`}
                      title={_as.title}
                      date={_as.date}
                      placeOfTrainingOrInstitution={_as.placeOfTrainingOrInstitution}
                      reason={_as.reason}
                      onDeleteClickHandler={(e: React.FormEvent<HTMLButtonElement>) => { 
                        e.preventDefault()
                        onDeleteAdvancedStudiesFromArray(_as)
                      }}
                    />
                  )
                })
              }
            </div>
          }
          <div className='w-full max-w-full flex flex-col mt-4'>
            <Button className='w-full mt-2' variant='secondary' onClick={() => navigate('/signup/educational-background')}>Edit Educational Background</Button>
            <Button className='w-full mt-2' type='submit' >Next</Button>
          </div>
        </form>
      </div>
    </div>      
  )
}

export default AdvancedStudiesSignup