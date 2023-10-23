import User from '@/models/User';
import { verifyPassword } from '@/utils/auth';
import connectDb from '@/utils/connectDb'
import { NextResponse } from 'next/server';
import { sign } from 'jsonwebtoken'

const POST = async (req) => {
    try {
        await connectDb()
        const { email, password } = await req.json()

        if (!email || !password) {
            return NextResponse.json({ error: "لطفا اطلاعات معتبر وارد کنید" }, { status: 422 })
        }

        const user = await User.findOne({ email })
        if (!user) NextResponse.json({ error: "کاربر مورد نظر یافت نشد" }, { status: 404 })

        const isVarifyPassword = await verifyPassword(password, user.password)
        if (!isVarifyPassword) NextResponse.json({ error: "ایمیل یا رمز عبور اشتباه است" }, { status: 422 })

        const secretKey = process.env.SECRET_KEY
        const expiration = 24*60*60
        const token = sign({ email, name: user.name , lastName : user.lastName }, secretKey, { expiresIn: expiration })


        const response = NextResponse.json({ message: "ورود با موفقیت انجام شد" })
        response.cookies.set({
            name: "token",
            value: token,
            httpOnly: true,
            maxAge: expiration,
            path : "/"
        })

        return response
    } catch (err) {
        return NextResponse.json(
            { error: "مشکلی در سرور رخ داده است" },
            {
                status: 500,
            }
        );
    }
}



export { POST }
