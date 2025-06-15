import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

const connecDb = async ()=>{
    try {
       await mongoose.connect(process.env.MONGODB_URI);
       console.log("Database Connected")
       
        
    } catch (error) {
        console.error(error.message)
        process.exit(1)
        
    }
}

export default connecDb;