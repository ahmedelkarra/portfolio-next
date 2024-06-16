import mongoose from "mongoose";

interface IProjects {
    title: string;
    image: string;
    using: mongoose.Schema.Types.Array;
    technology: string;
    github: string;
    website: string;
}

const ProjectsSchema = new mongoose.Schema<IProjects>(
    {
        title: { type: String, required: true, unique: true },
        image: { type: String, required: true },
        github: { type: String },
        website: { type: String },
        using: { type: mongoose.Schema.Types.Array, required: true },
        technology: { type: String, required: true },
    }
);

export const Projects = mongoose.models.Projects || mongoose.model('Projects', ProjectsSchema);
