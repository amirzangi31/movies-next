import HomePage from "@/components/templates/HomePage";
import Actor from "@/models/Actor";
import Movie from "@/models/Movie";
import connectDb from "@/utils/connectDb";




export default async function Home() {

  await connectDb()

  const newestMovie = await Movie.find({}, null, { limit: 4 })
  const actors = await Actor.find()
  const movies = await Movie.find({}, null, { limit: 15 })



  return (
    <HomePage newestMovie={JSON.stringify(newestMovie)} actors={JSON.stringify(actors)} movies={JSON.stringify(movies)} />
  )
}
