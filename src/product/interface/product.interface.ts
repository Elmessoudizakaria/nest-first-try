import * as mongoose from 'mongoose';

export interface Product extends mongoose.Document{
    readonly name:string;
    readonly price:number;
    readonly design:string;
    readonly madein:string;
}