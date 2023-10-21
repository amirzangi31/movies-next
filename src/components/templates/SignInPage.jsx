import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'
import React from 'react'

const SignInPage = () => {
    const auth = useTranslations("Auth")
    const local = useLocale()

  return (
    <div className='flex px-2 min-h-[calc(100vh-119px)]  justify-center items-center py-3'>
        <form className='w-[300px] max-w-full bg-sidebar-m rounded-xl min-h-[300px] px-4 flex justify-between items-start flex-col '>
                <h1 className='text-center py-4 text-xl font-bold text-primary w-full'>{auth("signin")}</h1>
               <div className='w-full'>
               <div className='flex justify-start items-start flex-col '>
                        <label className='text-sm text-text-main mb-2' >{auth("email")} : </label>
                        <input type="text" name="email" id="email" className='text-sm placeholder:text-sm bg-bg-secondary w-full rounded-3xl px-2 py-2'   placeholder={auth("pEmail")} />
                </div>
                <div className='flex justify-start items-start flex-col mt-3 '>
                        <label className='text-sm text-text-main mb-2' >{auth("password")} : </label>
                        <input type="text" name="password" id="password" className='text-sm placeholder:text-sm bg-bg-secondary w-full rounded-3xl px-2 py-2'   placeholder={auth("pPassword")} />
                </div>
               
                <Link  className='text-sm my-2 block text-primary' href={"/"}>{auth("forgotpassword")}</Link>

                <p className='text-sm text-center'>{auth("noaccount")}<Link className='text-primary underline' href={`/${local}/signup`} >{auth("signup")}</Link></p>


               </div>

               <div className='flex justify-center items-center w-full py-4'>
                <button type='submit' className='btn btn-sm btn-primary'>{auth("signin")}</button>
               </div>
        </form>
    </div>
  )
}

export default SignInPage