import React from "react";
import baseUrl from "../mongodb/baseUrl";
import styles from '../styles/Home.module.css';
import Navbar from "../Mellodies/Navbar"
export default function Eleventh({ response }) {
 
  return (
    <>
   <Navbar/>
      {response.map((video) => {
        
        return (
          <>
         
            <div key={video._id} className={styles.video}>
            <h1>{video.playlist}</h1>
            <h2 > {video.title} </h2>
            
            <div className={styles.vdec}>
            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${video.videoUrl}`} title={video.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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
