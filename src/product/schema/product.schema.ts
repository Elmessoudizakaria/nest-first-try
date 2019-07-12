import * as mongoose from 'mongoose';

export const productSchema=new mongoose.Schema({
    name:{type:String},
    price:{type:Number,required:true},
    design:{type:String},
    madein:{type:String}
})