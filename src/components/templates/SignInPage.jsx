"use client"

import { signInSchema } from '@/utils/validationForms'
import { Field, Form, Formik } from 'formik'
import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'
import React, { useState } from 'react'
import LoaderButton from '../element/LoaderButton'
import axios from 'axios'
import toastify from '@/services/toastify'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { fetchUser } from '@/store/features/userSlice'

const SignInPage = () => {
    const [loading , setLoading] = useState(false)
    const auth = useTranslations("Auth")
    const local = useLocale()
    const router = useRouter()
    const dispatch = useDispatch()

  const submitHandler = (values , {resetForm}) => {
      setLoading(true)
      axios.post("/api/auth/signin" , values).then(data => {
        toastify("success" , data.data.message)
        setLoading(false)
        resetForm()
        dispatch(fetchUser())
        router.push(local === "en" ? "/en" : "/")
      }).catch(err => {
        setLoading(false) 
        toastify("error" , err.response.data.error)
      })
      
  }




  return (
    <div className='flex px-2 min-h-[calc(100vh-119px)]  justify-center items-center py-3'>
 
        <Formik
                initialValues={{
                        email : "",
                        password : "",
                }}
                validationSchema={signInSchema}
                onSubmit={submitHandler}
        >

        <Form className='w-[300px] max-w-full bg-sidebar-m rounded-xl min-h-[300px] px-4 flex justify-between items-start flex-col '>
                <h1 className='text-center py-4 text-xl font-bold text-primary w-full'>{auth("signin")}</h1>
               <div className='w-full '>
               
               <div className='flex justify-start items-start flex-col mt-3'>
                        <label className='text-sm text-text-main mb-2' >{auth("email")} : </label>
                          <Field name="email" >
                                {({
                                        field, 
                                        meta,
                                        }) => (
                                        <>
                                                
                                                
                                <input type="text" name="email" id="email" className='text-sm placeholder:text-sm bg-bg-secondary w-full rounded-3xl px-2 py-2'   placeholder={auth("pEmail")} {...field} />
                                                {meta.touched && meta.error && (
                                                <span  className="text-error text-[10px]">{meta.error}</span>
                                                )}
                                        </>
                                )}
                        </Field>
                </div>
                <div className='flex justify-start items-start flex-col mt-3 '>
                        <label className='text-sm text-text-main mb-2' >{auth("password")} : </label>
                         <Field name="password" >
                                {({
                                        field, 
                                        meta,
                                        }) => (
                                        <>
                                                
                                                
                                <input type="text" name="password" id="password" className='text-sm placeholder:text-sm bg-bg-secondary w-full rounded-3xl px-2 py-2'   placeholder={auth("pPassword")}  {...field} />
                                                {meta.touched && meta.error && (
                                                <span  className="text-error text-[10px]">{meta.error}</span>
                                                )}
                                        </>
                                )}
                        </Field>
                </div>
                
                <Link  className='text-sm my-2 block text-primary' href={"/"}>{auth("forgotpassword")}</Link>

                <p className='text-sm text-center'>{auth("noaccount")}<Link className='text-primary underline' href={`/${local}/signup`} >{auth("signup")}</Link></p>
               </div>
               <div className='flex justify-center items-center w-full py-4'>
                <button type='submit' className='btn btn-sm btn-primary' disabled={loading}>
                {loading ? <LoaderButton />  : auth("signin")}
                  </button>
               </div>
        </Form>
        </Formik>
    </div>
  )
}

export default SignInPage