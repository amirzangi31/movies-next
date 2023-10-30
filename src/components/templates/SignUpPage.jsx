"use client"

import React, { useState } from 'react'
import toastify from '@/services/toastify'
import {signUpSchema} from '@/utils/validationForms'
import axios from 'axios'
import { Field, Form, Formik } from 'formik'
import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'
import LoaderButton from '../element/LoaderButton'





const SignUpPage = () => {
        const [loading , setLoading] = useState(false)
        const auth = useTranslations("Auth")
        const local = useLocale()
        
        const submitHandler = (values , submitProps) => {
                setLoading(true)
                axios.post("/api/auth/signup" , values)
                .then(data =>{
                        setLoading(false)
                        toastify("success" , data.data.message)
                        submitProps.resetForm()
                })
                .catch(error => {
                        setLoading(false) 
                        toastify("error" , error.response.data.error)
                })
                 
        }

    

  return (
    <div className='flex px-2 min-h-[calc(100vh-119px)]  justify-center items-center py-3'>
        <Formik
                initialValues={{
                        name : "",
                        lastName : "",
                        email : "",
                        password : "",
                        confirmPassword : "",
                }}
                validationSchema={signUpSchema}
                onSubmit={submitHandler}
        >

        <Form className='w-[300px] max-w-full bg-sidebar-m rounded-xl min-h-[300px] px-4 flex justify-between items-start flex-col '>
                <h1 className='text-center py-4 text-xl font-bold text-primary w-full'>{auth("signup")}</h1>
               <div className='w-full '>
               <div className='flex justify-start items-start flex-col '>
                        <label className='text-sm text-text-main mb-2' >{auth("name")} : </label>
                        <Field name="name" >
                                {({
                                        field, 
                                        meta,
                                        }) => (
                                        <>
                                                
                                                
                                                <input type="text"  id="name" className='text-sm placeholder:text-sm bg-bg-secondary w-full rounded-3xl px-2 py-2'   placeholder={auth("pName")} {...field} />
                                                {meta.touched && meta.error && (
                                                <span  className="text-error text-[10px]">{meta.error}</span>
                                                )}
                                        </>
                                )}
                        </Field>
                </div>
               <div className='flex justify-start items-start flex-col mt-3'>
                 <Field name="lastName" >
                        {({
                                field, 
                                meta,
                                }) => (
                                <>
                                        
                                        
                        <label className='text-sm text-text-main mb-2' >{auth("lastname")} : </label>
                        <input type="text" name="lastName" id="lastName" className='text-sm placeholder:text-sm bg-bg-secondary w-full rounded-3xl px-2 py-2'   placeholder={auth("pLastname")} {...field} />
                                         {meta.touched && meta.error && (
                                        <span  className="text-error text-[10px]">{meta.error}</span>
                                        )}
                                </>
                        )}
                </Field>
                </div>
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
                <div className='flex justify-start items-start flex-col mt-3 '>
                        <label className='text-sm text-text-main mb-2' >{auth("repeatpassword")} : </label>
                           <Field name="confirmPassword" >
                                {({
                                        field, 
                                        form,
                                        meta,
                                        }) => (
                                        <>
                                                
                                                
                                <input type="text" name="confirmPassword" id="confirmPassword" className='text-sm placeholder:text-sm bg-bg-secondary w-full rounded-3xl px-2 py-2'   placeholder={auth("pRepeatpassword")} {...field} />
                                                {meta.touched && meta.error && (
                                                <span  className="text-error text-[10px]">{meta.error}</span>
                                                )}
                                        </>
                                )}
                        </Field>
                </div>
                <Link  className='text-sm my-2 block text-primary' href={"/"}>{auth("forgotpassword")}</Link>
                <p className='text-sm text-center'>{auth("account")}<Link className='text-primary underline' href={`/${local}/signin`} >{auth("signin")}</Link></p>
               </div>
               <div className='flex justify-center items-center w-full py-4'>
                <button type='submit' className='btn btn-sm btn-primary' disabled={loading}>
                        {loading ? <LoaderButton />  : auth("signup")}
                </button>
               </div>
        </Form>
        </Formik>
    </div>
  )
}

export default SignUpPage