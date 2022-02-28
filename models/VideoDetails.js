import mongoose from "mongoose";


const VideoDetails = new mongoose.Schema({

    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    tag: {
        type: String,
        required: true,
        default: 11
    },
    videoUrl: {
        type: String,
        required: true
    },
    playlist: {
        type: String,
        required: true
    },
    link: {
        type: String
    },
    linkname: {
        type: String
    }



});
export default mongoose.models.Video || mongoose.model("Video", VideoDetails)