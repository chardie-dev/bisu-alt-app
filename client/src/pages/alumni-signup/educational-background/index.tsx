import React, { useState } from 'react'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router'

import StepTracker from '@/components/step-tracker'
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { 
  Select, 
  SelectTrigger, 
  SelectValue, 
  SelectContent, 
  SelectItem } from '@/components/ui/select'
import { Button } from '@/components/ui/button'


import { EducationalBackgroundType, signupSelector, saveEducationalBackground } from '@/features/signupSlice'

import { useAppSelector } from '@/hooks/useAppSelector'
import { useAppDispatch } from '@/hooks/useAppDispatch'

import { campuses_list_const } from '@/constants/campus'
import { 
  collegeType, 
  colleges_list, 
  colleges_list_const,
  programType,
  program_list,
  program_list_const
} from '@/constants/programs'

import ProfessionalExaminationCard from './ProfessionalExaminationCard'

const formSchema = z.object({
  campus: z.enum(campuses_list_const),
  college: z.enum(colleges_list_const),
  program: z.enum(program_list_const),
  yearGraduated: z.number().min(1980, { message: "Year must be on or after 1980" }),
})

type ProfessionalExaminationType = {
  nameOfExamination: string,
  dateOfExamination: string,
  rating: string,
}

const formDefaultValues = {
  campus: undefined,
  college: undefined,
  program: undefined
}

const EducationalBackgroundSignup: React.FC = () => {
  // todo: prefill data from root state if edit from next page
  const signupData = useAppSelector(signupSelector)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: formDefaultValues
  })

  const [professionalExaminations, setProfessionalExaminations] = useState<Array<ProfessionalExaminationType>>([])
  const [nameOfExaminationValue, setNameOfExaminationValue] = useState("")
  const [dateOfExaminationValue, setDateOfExaminationValue] = useState("")
  const [ratingValue, setRatingValue] = useState("")
  const [examinationDataError, setExaminationDataError] = useState("")

  const onSubmitHandler = (values: z.infer<typeof formSchema>) => {
    console.log({ values })
    const {
      campus,
      college,
      program,
      yearGraduated
    } = values

    const __educationalBackgroundObj: EducationalBackgroundType = {
      campus,
      college,
      program,
      yearGraduated,
      professionalExaminations
    }
    dispatch(saveEducationalBackground(__educationalBackgroundObj))
    navigate('/advanced-studies-signup')
  }

  const selectedCampus = form.watch("campus")
  const selectedCollege = form.watch("college")

  const onAddExaminationHandler = () => {
    if(!nameOfExaminationValue || !dateOfExaminationValue || !ratingValue) {
      setExaminationDataError("Fields must not be empty")
      return
    }
    setProfessionalExaminations([
      ...professionalExaminations, 
      { 
        nameOfExamination: nameOfExaminationValue,
        dateOfExamination: dateOfExaminationValue,
        rating: ratingValue
      }
    ])
  }

  const onDeleteExaminationHandler = (_p: ProfessionalExaminationType) => {
    setProfessionalExaminations(professionalExaminations.filter((e: ProfessionalExaminationType) => e.nameOfExamination !== _p.nameOfExamination))
  }

  return (
    <div className="w-full h-full max-w-full max-h-full flex justify-center items-start md:items-center">
      <div className='bg-white h-full md:h-fit w-[500px] rounded-2xl flex flex-col justify-start md:justify-center items-start md:items-center p-5'>
        <div className='w-full max-w-full flex justify-center' >
          <StepTracker currentStep={2} totalSteps={4} />
        </div>
        <h2 className='font-bold text-3xl md:text-2xl mt-3'>General Information</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmitHandler)} className='w-full max-w-full flex flex-col gap-4 mt-auto md:mt-4'>
            <FormField control={form.control} name="campus" render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Campus</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue=''>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder='Select campus'/>
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {
                          campuses_list_const.map((__campus) => {
                            return (
                              <SelectItem className='focus:bg-primary-50 focus:text-accent-foreground' value={__campus}>{__campus}</SelectItem>
                            )
                          })
                        }
                      </SelectContent>
                      <FormMessage />
                    </Select>
                  </FormItem>
                )
              }}/>
            <FormField control={form.control} name="college" render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>College</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue=''>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder='Select college'/>
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {
                        selectedCampus && colleges_list.filter((_col: collegeType) => _col.campus.includes(selectedCampus.toLocaleLowerCase())).map((__college) => {
                          return (
                            <SelectItem className='focus:bg-primary-50 focus:text-accent-foreground' value={__college.name}>{__college.name}</SelectItem>
                          )
                        })
                      }
                    </SelectContent>
                    <FormMessage />
                  </Select>
                </FormItem>
              )
            }}/>
            <FormField control={form.control} name="program" render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Program</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue=''>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder='Select program'/>
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {
                        selectedCampus && selectedCollege && program_list
                          .filter((_program: programType) => _program.campus.includes(selectedCampus.toLocaleLowerCase()) && _program.college === colleges_list.find((e: collegeType) => e.name === selectedCollege)?.key)
                          .map((_program) => {
                          return (
                            <SelectItem className='focus:bg-primary-50 focus:text-accent-foreground' value={_program.name}>{_program.name}</SelectItem>
                          )
                        })
                      }
                    </SelectContent>
                    <FormMessage />
                  </Select>
                </FormItem>
              )
            }}/>
            <FormField control={form.control} name="yearGraduated" render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Year Graduated</FormLabel>
                    <FormControl>
                      <Input {...field} {...form.register("yearGraduated", { valueAsNumber: true })} placeholder='Year Graduated' type='number'/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )
            }}/>
            <div className='w-full flex flex-col gap-2'>
              <div className='mt-2 text-lg font-semibold' >Professional Examinations</div>
              <div className='w-full flex flex-col gap-2'>
                <label>Name of Examination</label>
                <Input 
                  value={nameOfExaminationValue} 
                  onChange={(e: React.FormEvent<HTMLInputElement>) => setNameOfExaminationValue(e.currentTarget.value)} 
                  type='text' 
                  name='nameOfExamination'
                  />
                <label>Date of Examination</label>
                <Input 
                  value={dateOfExaminationValue} 
                  onChange={(e: React.FormEvent<HTMLInputElement>) => setDateOfExaminationValue(e.currentTarget.value)} 
                  type='date' 
                  name='dateOfExamination'
                  />
                <label>Rating</label>
                <Input 
                  value={ratingValue} 
                  onChange={(e: React.FormEvent<HTMLInputElement>) => setRatingValue(e.currentTarget.value)} 
                  type='text' 
                  name='rating'
                  />
                { examinationDataError && <div className='text-red-500 text-base'>{examinationDataError}</div> }
                <Button 
                  className='mt-2'
                  onClick={(e: React.FormEvent<HTMLElement>) => {
                    e.preventDefault()
                    onAddExaminationHandler()
                  }
                }>
                  Add Examination
                </Button>
              </div>
              {
                professionalExaminations && professionalExaminations.length > 0 &&
                professionalExaminations.map((_p: ProfessionalExaminationType, index) => {
                  return (
                    <ProfessionalExaminationCard 
                      key={`pec-${index}`}
                      nameOfExamination={_p.nameOfExamination} 
                      dateOfExamination={_p.dateOfExamination} 
                      rating={_p.rating}
                      onClickHandler={(e: React.FormEvent<HTMLElement>) => {
                        e.preventDefault()
                        onDeleteExaminationHandler(_p)
                      }} 
                    />
                  )
                })
              }
            </div>
            <div className='w-full max-w-full flex flex-col mt-4'>
              <Button className='w-full mt-2' variant='secondary' onClick={() => navigate('/general-information-signup')}>Edit General Information</Button>
              <Button className='w-full mt-2' type='submit' >Next</Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default EducationalBackgroundSignup