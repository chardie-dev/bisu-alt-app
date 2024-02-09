import React, { useEffect } from 'react'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { format } from 'date-fns'

import { cn } from '@/lib/utils'

import { CalendarIcon } from 'lucide-react'

import StepTracker from '@/components/step-tracker'
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage,
  FormDescription
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { 
  Select, 
  SelectTrigger, 
  SelectValue, 
  SelectContent, 
  SelectItem } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { 
  provinceType,
  provinces_list, 
  provinces_list_const, 
  cityType,
  cities_list, 
  cities_list_const 
} from '@/constants/address'
import {
  civilStatusType,
  civil_status_list,
  civil_status_list_const
} from '@/constants/civil-status'
import {
  sexType,
  sex_list,
  sex_list_const
} from '@/constants/sex'

import { useNavigate } from 'react-router'

import { GeneralInformationType, saveGeneralInformation, signupSelector } from '@/features/signupSlice'

import { useAppDispatch } from '@/hooks/useAppDispatch'
import { useAppSelector } from '@/hooks/useAppSelector'

const phoneRegex = new RegExp(
  /^(09|\+639)\d{9}$/
);

const formSchema = z.object({
  firstName: z.string().min(1, { message: "Please input your first name" }),
  middleName: z.string().optional(),
  lastName: z.string().min(1, { message: "Please input your last name" }),
  permanentAddressProvince: z.enum(provinces_list_const), // to fix ztype and prefill default values or use nativeEnums for this
  permanentAddressCity: z.enum(cities_list_const),
  permanentAddressStreet: z.string().min(1, { message: "Please input your street address" }),  
  placeOfBirthProvince: z.enum(provinces_list_const),
  placeOfBirthCity: z.enum(cities_list_const),
  emailAddress: z.string().email(),
  mobileNumber: z.string().regex(phoneRegex, 'Invalid mobile number'),
  civilStatus: z.enum(civil_status_list_const),
  sex: z.enum(sex_list_const),
  dateOfBirth: z.date({ required_error: 'Please input your date of birth' }),
  familyIncome: z.number().min(1, { message: "Please input your family income" })
})

const formDefaultValues = {
  firstName: "",
  middleName: "",
  lastName: "",
  permanentAddressProvince: undefined,
  permanentAddressCity: undefined,
  permanentAddressStreet: "",
  placeOfBirthProvince: undefined,
  placeOfBirthCity: undefined,
  emailAddress: "",
  mobileNumber: "",
  civilStatus: undefined,
  sex: undefined,
  dateOfBirth: new Date(),
  familyIncome: 0
}

const GeneralInformationSignup: React.FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const signupState = useAppSelector(signupSelector)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: formDefaultValues
  })

  useEffect(() => {
    console.log({ genInfo: signupState.generalInformation })
  }, [signupState.generalInformation])
  

  const onSubmitHandler = (values: z.infer<typeof formSchema>) => {
    // todo: remove console logs
    console.log({values})
    const {
      firstName,
      middleName,
      lastName,
      permanentAddressProvince,
      permanentAddressCity,
      permanentAddressStreet,
      placeOfBirthProvince,
      placeOfBirthCity,
      emailAddress,
      mobileNumber,
      civilStatus,
      sex,
      dateOfBirth,
      familyIncome
    } = values

    const __generalInformation: GeneralInformationType  = {
      name: {
        first: firstName,
        middle: middleName,
        last: lastName
      },
      permanentAddress: {
        province: permanentAddressProvince,
        city: permanentAddressCity,
        street: permanentAddressStreet
      },
      placeOfBirth: {
        province: placeOfBirthProvince,
        city: placeOfBirthCity
      },
      email: emailAddress,
      mobileNumber: mobileNumber,
      civilStatus: civilStatus,
      sex: sex,
      dateOfBirth: format(dateOfBirth, 'P'),
      familyIncome: familyIncome
    }
    console.log(__generalInformation)
    dispatch(saveGeneralInformation(__generalInformation))

    navigate('/signup/educational-background')
  }
  const selectedPermanentAddressProvince = form.watch("permanentAddressProvince")
  const selectedPermanentAddressCity = form.watch("permanentAddressCity")
  const seletedPlaceOfBirthProvince = form.watch("placeOfBirthProvince")

  return (
    <div className="w-full h-full max-w-full max-h-full flex justify-center items-start md:items-center">
      <div className='bg-white h-full md:h-fit w-[500px] rounded-2xl flex flex-col justify-start md:justify-center items-start md:items-center p-5'>
        <div className='w-full max-w-full flex justify-center' >
          <StepTracker currentStep={1} totalSteps={4} />
        </div>
        <h2 className='font-bold text-3xl md:text-2xl mt-3'>General Information</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmitHandler)} className='w-full max-w-full flex flex-col gap-4 mt-auto md:mt-4'>
            <FormField control={form.control} name="firstName" render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder='First Name' type='text'/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )
              }}/>
            <FormField control={form.control} name="middleName" render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Middle Name</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder='Middle Name' type='text'/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )
              }}/>
            <FormField control={form.control} name="lastName" render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder='Last Name' type='text'/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )
              }}/>
            <div className='mt-2 text-lg font-semibold'>Permanent address</div>
            <FormField control={form.control} name="permanentAddressProvince" render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Province</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue=''>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder='Select province'/>
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {
                        provinces_list
                          .sort((a,b) => a.name.localeCompare(b.name))
                          .map((__province) => {
                          return (
                            <SelectItem key={`perm-province-${__province.name}`} className='focus:bg-primary-50 focus:text-accent-foreground' value={__province.name}>{__province.name}</SelectItem>
                          )
                        })
                      }
                    </SelectContent>
                    <FormMessage />
                  </Select>
                </FormItem>
              )
            }}/>
            {
              selectedPermanentAddressProvince && 
              <FormField control={form.control} name="permanentAddressCity" render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>City/Municipality</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue=''>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder='Select city/municipality'/>
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {
                          cities_list
                            .filter((city: cityType) => {
                              const selectedProvinceObj = provinces_list.find((e: provinceType) => e.name === selectedPermanentAddressProvince)
                              return city.province === selectedProvinceObj?.key
                            })
                            .map((__city) => {
                            return (
                              <SelectItem key={`perm-city-${__city.name}`} className='focus:bg-primary-50 focus:text-accent-foreground' value={__city.name}>{__city.name} {__city.city ? 'City' : ''}</SelectItem>
                            )
                          })
                        }
                      </SelectContent>
                      <FormMessage />
                    </Select>
                  </FormItem>
                )
              }}/>
            }
            {
              selectedPermanentAddressProvince && selectedPermanentAddressCity &&
              <FormField control={form.control} name="permanentAddressStreet" render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Street Address</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder='Unit number, Street, Barangay' type='text'/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )
              }}/>
            }
            <div className='mt-2 text-lg font-semibold'>Birthplace</div>
            <FormField control={form.control} name="placeOfBirthProvince" render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Province</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue=''>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder='Select province'/>
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {
                        provinces_list
                          .sort((a,b) => a.name.localeCompare(b.name))
                          .map((__province) => {
                          return (
                            <SelectItem key={`pob-province-${__province.name}`} className='focus:bg-primary-50 focus:text-accent-foreground' value={__province.name}>{__province.name}</SelectItem>
                            )
                          }
                        )
                      }
                    </SelectContent>
                    <FormMessage />
                  </Select>
                </FormItem>
              )
            }}/>
            {
              seletedPlaceOfBirthProvince &&
              <FormField control={form.control} name="placeOfBirthCity" render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>City/Municipality</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue=''>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder='Select city/municipality'/>
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {
                          cities_list
                            .filter((city: cityType) => {
                              const selectedProvinceObj = provinces_list.find((e: provinceType) => e.name === seletedPlaceOfBirthProvince)
                              return city.province === selectedProvinceObj?.key
                            })
                            .map((__city) => {
                            return (
                              <SelectItem key={`pob-city-${__city.name}`} className='focus:bg-primary-50 focus:text-accent-foreground' value={__city.name}>{__city.name} {__city.city ? 'City' : ''}</SelectItem>
                            )
                          })
                        }
                      </SelectContent>
                      <FormMessage />
                    </Select>
                  </FormItem>
                )
              }}/>
            }
            <FormField control={form.control} name="emailAddress" render={({ field }) => {
                return (
                  <FormItem className='mt-4'>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder='Email' type='email'/>
                    </FormControl>
                    <FormDescription>
                      This will be used as your default username
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )
              }}/>
            <FormField control={form.control} name="mobileNumber" render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Mobile Number</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder='Mobile Number' type='tel'/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )
              }}/>
            <FormField control={form.control} name="civilStatus" render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Civil Status</FormLabel>
                  <FormControl>
                    <RadioGroup 
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      {
                        civil_status_list.map((__civilStatus: civilStatusType) => {
                          return (
                            <FormItem className="flex items-center space-x-3 space-y-0" key={`radio-${__civilStatus.key}`}>
                              <FormControl>
                                <RadioGroupItem value={__civilStatus.name} />
                              </FormControl>
                              <FormLabel className="font-normal">
                                {__civilStatus.name}
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
            }} />
            <FormField control={form.control} name="sex" render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Sex</FormLabel>
                  <FormControl>
                    <RadioGroup 
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      {
                        sex_list.map((__sex: sexType) => {
                          return (
                            <FormItem className="flex items-center space-x-3 space-y-0" key={`radio-${__sex.key}`}>
                              <FormControl>
                                <RadioGroupItem value={__sex.name} />
                              </FormControl>
                              <FormLabel className="font-normal">
                                {__sex.name}
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
            }} />
            <FormField control={form.control} name="dateOfBirth" render={({ field }) => {
              // todo: update this to an input only with type date, it's much better and more functional
              return (
                <FormItem className="flex flex-col mt-2">
                  <FormLabel>Date of birth</FormLabel>
                  <Popover >
                    <PopoverTrigger asChild className='focus:bg-primary-50 focus:text-accent-foreground hover:bg-primary-50 hover:text-accent-foreground' >
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-[240px] pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-[300px] p-0" align="start">
                      <Calendar
                        className='w-full'
                        captionLayout="dropdown-buttons"
                        fromYear={1970}
                        toYear={2030}
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormDescription>
                    Your date of birth is used to calculate your age.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )
            }} />
            <FormField control={form.control} name="familyIncome" render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Family Income (Php)</FormLabel>
                    <FormControl>
                      <Input {...field} {...form.register("familyIncome", { valueAsNumber: true })} placeholder='Family Income' type='number'/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )
            }}/>
            <Button className='w-full mt-2' type='submit' >Next</Button>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default GeneralInformationSignup