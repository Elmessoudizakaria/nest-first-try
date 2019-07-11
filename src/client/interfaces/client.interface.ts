import * as mongoose from 'mongoose';
export interface Client extends mongoose.Document{
    readonly name: string;
    readonly adress: string;
    readonly fsocial: string;
}