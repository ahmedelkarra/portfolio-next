import mongoose, { Schema } from "mongoose";

interface IUser {
    email: string;
    pass: string;
    fName: string;
    lName: string;
    isAdmin: boolean;
}

const UserSchema = new Schema<IUser>({
    email: { type: String, required: true, unique: true },
    fName: { type: String, required: true },
    lName: { type: String, required: true },
    pass: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
});

export const User = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);