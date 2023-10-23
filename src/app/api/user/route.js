import User from "@/models/User";
import { verifyToken } from "@/utils/auth";
import connectDb from "@/utils/connectDb";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";




const GET = async () => {

    try {
        await connectDb()

        const token = cookies().get("token")

        if (!token) {
            return NextResponse.json({ error: "لطفا به حساب کاربری خود ورود کنید" }, { status: 401 })
        }

        const userToken = verifyToken(token.value, process.env.SECRET_KEY)

        if (!userToken) {
            return NextResponse.json({ error: "ورود شما غیرمجاز میباشد" }, { status: 401 })
        }

        const user = await User.findOne({ email: userToken.email })
        if (!user) {
            return NextResponse.json({ error: "کاربر مورد نظر یافت نشد" }, {error : 404})
        }

        return NextResponse.json({ data: { name: user.name, lastName: user.lastName, email: user.email, createdAt: user.createdAt } }, { status: 200 })
    } catch (error) {
        return NextResponse.json(
            { error: "مشکلی در سرور رخ داده است" },
            {
                status: 500,
            }
        );
    }
}


export { GET }