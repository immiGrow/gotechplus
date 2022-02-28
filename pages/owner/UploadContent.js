import Image from "next/image";
import React, { useContext, useState } from "react";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()
import ContextApi from "../../context/contextApi";
import {useRouter} from 'next/router';
import G from "../../images/G.jpeg";
import baseUrl from "../../mongodb/baseUrl";
import styles from "../../styles/Home.module.css";
import Head from "next/head";
function UploadContent() {
  const [chapter, setChapter] = useState("")
const router=useRouter()
  const [videoData, setVideoData] = useState({
    title: "",
    description: "",
    tag: "",
    videoUrl: "",
    playlist:"",
    link:"",
    linkname:""
  });
  const onChange = (e) => {
    setVideoData({ ...videoData, [e.target.name]: e.target.value });
  };

  const context = useContext(ContextApi);
  const handleVideoData = async (e) => {
    e.preventDefault();
    console.log(videoData);
    const makePost = await fetch(`${baseUrl}/api/eleventh/VideosData`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: videoData.title,
        description: videoData.description,
        tag: videoData.tag,
        videoUrl: videoData.videoUrl,
        playlist:chapter,
        link:videoData.link,
        linkname:videoData.linkname
      }),
     
    });
    let reson= await makePost.json()
    if(reson.success){
     await  toast(reson.message)
      await router.push("/")
    }
      console.log(reson)
  };
  return (
    <>
    <Head>
    <title>Go Tech Plus | Ahead with Education</title>
        <meta name="description" content="This is the video uploading and sharing site for visitors and users and free to access and easy and convenient to use." />
        <link rel="icon" href="/favicon.ico" />
    </Head>
      {context.auth ? (
        <>
          <div className={styles.box}>
            <div className={styles.forum}>
              <Image src={G} width={200} height={100} alt="" />
              <strong>This Is Only For The Owner Of This Site.</strong>
            </div>
            <form onSubmit={(e)=>handleVideoData(e)}>
            <div className={styles.inputBox}>
                <input
                  type="text"
                  name="playlist"
                  onChange={(e)=>setChapter(e.target.value)}
                  value={chapter}
                />
                <label>Full Playlist Name</label>
              </div>
              <div className={styles.inputBox}>
                <input
                  type="text"
                  name="title"
                  onChange={onChange}
                  value={videoData.title}
                />
                <label>Title</label>
              </div>
              <div className={styles.inputBox}>
                <textarea
                  className={styles.desc}
                  type="text"
                  name="description"
                  onChange={onChange}
                  value={videoData.description}
                />
                <label></label>
              </div>
              <div className={styles.inputBox}>
                <input
                  type="text"
                  name="tag"
                  onChange={onChange}
                  value={videoData.tag}
                />
                <label>Tag</label>
              </div>
              <div className={styles.inputBox}>
                <input
                  type="text"
                  name="videoUrl"
                  onChange={onChange}
                  value={videoData.videoUrl}
                />
                <label>VideoUrl</label>
              </div>
              <div className={styles.inputBox}>
                <input
                  type="text"
                  name="link"
                  onChange={onChange}
                  value={videoData.link}
                />
                <label>Paste here link</label>
              </div>
              <div className={styles.inputBox}>
                <input
                  type="text"
                  name="linkname"
                  onChange={onChange}
                  value={videoData.linkname}
                />
                <label>Write your LinkName</label>
              </div>
              <button type="submit" className={styles.submit}>
                Submit
              </button>
            </form>
          </div>
        </>
      ) : (
        <div>You are not authorized</div>
      )}
    </>
  );
}

export default UploadContent;
