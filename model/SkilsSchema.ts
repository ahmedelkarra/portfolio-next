import mongoose, { Document, Model } from "mongoose";

interface ISkils extends Document {
    title: string;
    process: number;
}

const SkilsSchema = new mongoose.Schema<ISkils>(
    {
        title: { type: String, required: true, unique: true },
        process: { type: Number, required: true, unique: true },
    }
);

let Skils: Model<ISkils>;

try {
    Skils = mongoose.model<ISkils>('Skils');
} catch {
    Skils = mongoose.model<ISkils>('Skils', SkilsSchema);
}

export { Skils };