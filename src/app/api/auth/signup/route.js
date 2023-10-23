import { hashPassword } from '@/utils/auth'
import connectDb from '@/utils/connectDb'
import User from '@models/User'
import { NextResponse } from 'next/server'


export async function POST(req) {
    
    try {
        await connectDb()

        const { name, lastName, email, password, confirmPassword } = await req.json()

        if (!name || !lastName || !email || !password || !confirmPassword) {
            return NextResponse.json({ error: "لطفا اطلاعات معتبر وارد کنید" }, { status: 422 })
        }


        const existingUser = await User.findOne({ email });


        if (existingUser) {
            return NextResponse.json(
                { error: "این حساب کاربری وجود دارد" },
                { status: 422 }
            );
        }

        const hashedPassword = await hashPassword(password);

        const newUser = await User.create({
            email,
            password: hashedPassword,
            name,
            lastName
        });
        

        return NextResponse.json(
            { message: "حساب کاربری ایجاد شد"  },
            { status: 201 }
        );

    } catch (error) {
        

        return NextResponse.json(
            { error: "مشکلی در سرور رخ داده است" },
            {
                status: 500,
            }
        );
    }
}

