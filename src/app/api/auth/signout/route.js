import { NextResponse } from "next/server";

import connectDb from '@/utils/connectDb'


const GET = async () => {
    try {
        await connectDb()

        const response = NextResponse.json({message : "خروج با موفقیت انجام شد"} , {status : 200})

        response.cookies.set({
            name: "token",
            value: "",
            httpOnly: true,
            maxAge: 0,
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
export { GET }