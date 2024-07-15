import mongoose from 'mongoose'

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://KhushiGarg:17032004@cluster0.djqmc0m.mongodb.net/food-app').then(()=>console.log('db connected'));
}