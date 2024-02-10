import React, { useState } from 'react'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import StepTracker from '@/components/step-tracker'
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage,
} from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

import CreatableSelect from 'react-select/creatable'

import {
  currentEmploymentStatusType,
  current_employment_list,
  current_employment_list_const,
  // noExperienceReasonType,
  // no_experience_reason_list,
  // no_experience_reason_list_const,
  no_experience_reason_list_arr,
  numberOfJobExperienceType,
  number_of_job_experience_list,
  number_of_job_experience_list_const
} from '@/constants/employment'

import { useAppSelector } from '@/hooks/useAppSelector'
import { signupSelector } from '@/features/signupSlice'
import { useNavigate } from 'react-router'
// import { Input } from '@/components/ui/input'
// import { Label } from '@/components/ui/label'

const formSchema = z.object({
  currentEmploymentStatus: z.enum(current_employment_list_const),
  numberOfJobExperience: z.enum(number_of_job_experience_list_const)
})

const formDefaultValues = {
  // currentEmploymentStatus: undefined || current_employment_list_const.find((e: string) => e === "Not Employed")
  currentEmploymentStatus: undefined,
  numberOfJobExperience: undefined
}

const JobPlacementProfileSignup: React.FC = () => {
  const signupState = useAppSelector(signupSelector)
  console.log({ signupState })
  const navigate = useNavigate()
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: formDefaultValues
  })
  
  const createOption = (label: string) => ({
    label,
    value: label,
    key: label.toLowerCase().replace(/\W/g, '')
  });

  type OptionType = {
    label: string,
    value: string,
    key: string
  }
  const [noJobExperienceOptions, setNoJobExperienceOptions] = useState(no_experience_reason_list_arr.map((e: string) => createOption(e)))
  const [noJobExperienceReasons, setNoJobExperienceReasons] = useState<Array<OptionType>>([])
  const [noJobExperienceError, setNoJobExperienceError] = useState(false)
  // const [otherReason, setOtherReason] = useState('')
  
  console.log({ noJobExperienceError })

  const noJobExperienceOnChange = (e: any) => {
    console.log({ change: e })
    setNoJobExperienceReasons(e)
  }

  const noJobExperienceOnCreate = (inputValue: string) => {
    console.log({ create: inputValue })
    const newOption = createOption(inputValue)
    setNoJobExperienceOptions((prev) => [...prev, newOption])
    setNoJobExperienceReasons((prev) => [...prev, newOption])
  }

  const selectedNumberOfJobExperience = form.watch("numberOfJobExperience")
  const selectedNumberOfJobExperienceIndex = number_of_job_experience_list_const.findIndex((e: string) => e === selectedNumberOfJobExperience)
  console.log({ selectedNumberOfJobExperienceIndex })

  const onSubmitHandlers = (values: z.infer<typeof formSchema>) => {
    console.log({ values })

    // handle error for no experience select here and add other reasons here if others is included in the options
    console.log({ noJobExperienceReasons })
    if(!noJobExperienceReasons || noJobExperienceReasons.length === 0) {
      setNoJobExperienceError(true)
      return
    }
  }

  return (
    <div className="w-full h-full max-w-full flex justify-center max-h-[calc(100%-20px)] items-start md:items-center" >
      <div className={`bg-white h-full md:h-fit w-[500px] max-h-full rounded-2xl flex flex-col justify-start md:justify-center items-start md:items-center p-5`}>
        <div className='w-full max-w-full flex justify-center' >
          <StepTracker currentStep={4} totalSteps={5} />
        </div>
        <h2 className='font-bold text-3xl md:text-2xl mt-3'>Job Placement Profile</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmitHandlers)} className='w-full max-w-full flex flex-col gap-4 mt-auto md:mt-4'>
            <FormField control={form.control} name="currentEmploymentStatus" render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Current Employment Status</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      {
                        current_employment_list.map((__currEmployment: currentEmploymentStatusType) =>{
                          return (
                            <FormItem className="flex items-center space-x-3 space-y-0" key={`radio-${__currEmployment.key}`}>
                              <FormControl>
                                <RadioGroupItem value={__currEmployment.value} />
                              </FormControl>
                              <FormLabel className="font-normal">
                                {__currEmployment.value}
                              </FormLabel>
                            </FormItem>
                          )
                        })
                      }
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )
            }}>
            </FormField>
            <FormField control={form.control} name="numberOfJobExperience" render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Number of Job Experience</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      {
                        number_of_job_experience_list.map((_numJExp: numberOfJobExperienceType) =>{
                          return (
                            <FormItem className="flex items-center space-x-3 space-y-0" key={`radio-${_numJExp.key}`}>
                              <FormControl>
                                <RadioGroupItem value={_numJExp.value} />
                              </FormControl>
                              <FormLabel className="font-normal">
                                {_numJExp.value}
                              </FormLabel>
                            </FormItem>
                          )
                        })
                      }
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )
            }}>
            </FormField>
            {
              selectedNumberOfJobExperienceIndex === 0 &&
              <div className='mt-2 w-full flex flex-col gap-2'>
                <div className={`text-base font-medium ${noJobExperienceError ? 'text-red-500' : ''}`}>Why do you have no job experience?</div>
                <CreatableSelect 
                  isClearable
                  isMulti
                  onChange={(e) => noJobExperienceOnChange(e)}
                  onCreateOption={noJobExperienceOnCreate}
                  options={noJobExperienceOptions}
                />
                { noJobExperienceReasons?.findIndex((e: OptionType) => e.label === "Other reason(s)") >= 0 && <div className='text-xs'>For other reason(s), please enter and specify</div> }
                { selectedNumberOfJobExperienceIndex === 0 && noJobExperienceError && <div className='text-red-500 text-sm'>Please select a reason</div> }
              </div>
            }
            {
              selectedNumberOfJobExperienceIndex === 1 &&
              <div>Here 2</div>
            }
            <div className='w-full max-w-full flex flex-col mt-4'>
              <Button className='w-full mt-2' variant='secondary' onClick={() => navigate('/signup/advanced-studies')}>Edit Advanced Studies</Button>
              <Button className='w-full mt-2' type='submit' >Next</Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default JobPlacementProfileSignup