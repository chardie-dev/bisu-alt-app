import React from 'react'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { zodResolver } from '@hookform/resolvers/zod'

const formSchema = z.object({
  username: z.string().min(1, {
    message: "Please input your username."
  }),
  password: z.string().min(8, {
    message: "Your password must be at least 8 characters long."
  })
})

const AlumniLogin: React.FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
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
        <h2 className='font-bold text-3xl md:text-2xl'>Alumni Login</h2>
        <div className='text-2xl md:text-xl'>Welcome back!</div>
        <Form {...form} >
          <form onSubmit={form.handleSubmit(handleSubmit)} className='w-full max-w-full flex flex-col gap-4 mt-auto md:mt-4'>
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
        <div className='w-full max-w-full mt-6 border-t-2 pt-2 border-neutral-500 flex flex-col items-center' >
            <div className='text-center' > 
              No account? <Button onClick={() => window.location.href = '/general-information-signup'} variant='link' className='text-base pl-0 text-primary-300'>Sign up here.</Button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AlumniLogin