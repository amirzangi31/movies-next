
import SignUpPage from '@/components/templates/SignUpPage'
import { verifyToken } from '@/utils/auth'
import connectDb from '@/utils/connectDb'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

const SignUp = async() => {
  await connectDb()

    const token = cookies().get("token")

    const userToken = verifyToken(token?.value, process.env.SECRET_KEY)
    
    if (userToken) {
        redirect("/")
    }
  return (
    <SignUpPage /> 
  )
}

export default SignUp