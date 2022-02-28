import Video from "../../../models/VideoDetails"
import dbConnect from '../../../mongodb/db'
dbConnect()
export default async function VideosData(req, res) {
    if (req.method === "POST") {
        saveAllVideos(req, res)
    }
    if (req.method === "GET") {
        fetchQueryAccordiingResults(req, res)
    }
}
const saveAllVideos = async(req, res) => {
    const { title, description, tag, videoUrl, playlist, link, linkname } = req.body

    const newAddedVideo = await new Video({
        title,
        description,
        tag,
        videoUrl,
        playlist,
        link,
        linkname
    }).save()

    await res.status(200).json({
        success: true,
        message: "Video Uploaded Successfully !!",
        newAddedVideo
    })
}
const fetchQueryAccordiingResults = async(req, res) => {
    let allResults = await Video.find()
    await res.status(200).json(allResults)
}