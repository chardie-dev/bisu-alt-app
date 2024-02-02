import React from 'react'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { campuses_list_const } from '@/constants/campus'

const formSchema = z.object({
  campus: z.enum(campuses_list_const),
  username: z.string().min(1, {
    message: "Please input your username."
  }),
  password: z.string().min(8, {
    message: "Your password must be at least 8 characters long."
  })
})

const DirectorLogin: React.FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      campus: undefined,
      username: "",
      password: ""
    }
  })

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    console.log({ values })
  }

  return (
    <div className="w-full h-full max-w-full max-h-full flex justify-center items-start md:items-center">
      <div className='bg-white h-full md:h-fit w-[400px] rounded-2xl flex flex-col justify-start md:justify-center items-start md:items-center p-5'>
        <h2 className='font-bold text-3xl md:text-2xl'>Director Login</h2>
        <div className='text-2xl md:text-xl'>Welcome back!</div>
        <Form {...form} >
          <form onSubmit={form.handleSubmit(handleSubmit)} className='w-full max-w-full flex flex-col gap-4 mt-auto md:mt-4'>
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
            <FormField control={form.control} name="username" render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder='Username' type='text'/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )
            }}/>
            <FormField control={form.control} name="password" render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder='Password' type='password'/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )
            }}/>
            <Button className='w-full mt-2' type='submit' >Login</Button>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default DirectorLogin