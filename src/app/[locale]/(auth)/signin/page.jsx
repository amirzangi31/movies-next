import React from 'react'
import SignInPage from '@/components/templates/SignInPage'
import connectDb from '@/utils/connectDb'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { verifyToken } from '@/utils/auth'

const SignIn = async() => {

    await connectDb()

    const token = cookies().get("token")

    const userToken = verifyToken(token?.value, process.env.SECRET_KEY)
    
    if (userToken) {
        redirect("/")
    }



  return (
    <SignInPage /> 
  )
}

export default SignIn