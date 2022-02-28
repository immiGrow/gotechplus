import React from "react";
import baseUrl from "../mongodb/baseUrl";
import styles from '../styles/Home.module.css';
import Navbar from "../Mellodies/Navbar"
import Head from "next/head";
export default function Eleventh({ response }) {
 
  return (
    <>
     <Head>
     <title>Go Tech Plus | XI | Ahead With Education</title>
        <meta name="description" content="This is the video uploading and sharing site for visitors and users and free to access and easy and convenient to use. This is the Eleventh standard content to use and remember the concepts. Video lectures are made much easy to undestand the concepts and never forget them !!" />
        <link rel="icon" href="/favicon.ico" />
     </Head>
   <Navbar/>
      {response.map((video) => {
        
        return (
          <>
        
            <div key={video._id} className={styles.video}>
            <h1>{video.playlist}</h1>
            <h2 > {video.title} </h2>
            
            <div className={styles.vdec}>
            <iframe className={styles.youtube} src={`https://www.youtube.com/embed/${video.videoUrl}`} title={video.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <p>{video.description}</p>
            <h3>{video.linkname}</h3>
            <a style={{color:"blue"}} rel="noreferrer" target={"_blank"} href={video.link}>{video.linkname}</a>
            
            
            </div>
           
            </div>
            <hr />
            
          </>
        );
      })}
    </>
  );
}
export async function getServerSideProps() {
  const res = await fetch(`${baseUrl}/api/eleventh/VideosData` )
  const respo = await res.json();
 
  return {
    props: {
      response: respo,
    },
  };
}
