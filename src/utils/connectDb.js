import mongoose from "mongoose"


const connectDb = async () => {
    
    
    if (mongoose.connections[0].readyState) return;

    mongoose.set("strictQuery", false)

    await mongoose.connect(process.env.MONGO_URI)
    console.log("conncting to db")
}

export default connectDb