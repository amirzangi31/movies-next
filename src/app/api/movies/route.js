import Movie from '@/models/Movie';
import connectDb from '@/utils/connectDb'
import { NextResponse } from 'next/server';

const GET = async () => {

    try {
        await connectDb()

        const movies = await Movie.find()
        

        return NextResponse.json({data : movies} , {status : 200})

    } catch (error) {
        return NextResponse.json(
            { error: "مشکلی در سرور رخ داده است" },
            {
                status: 500,
            }
        );

    }
}

const POST = async (req) => {

    try {
        await connectDb()

        const movies = await Movie.find()
        

        

        return NextResponse.json({})

    } catch (error) {
        return NextResponse.json(
            { error: "مشکلی در سرور رخ داده است" },
            {
                status: 500,
            }
        );

    }
}













export { GET, POST }