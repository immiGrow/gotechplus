import Image from "next/image";
import React,{useState,useContext} from "react";
import styles from '../../styles/Home.module.css'
import G from '../../images/G.jpeg'
import baseUrl from "../../mongodb/baseUrl";
import {useRouter} from 'next/router'
import Context from "../../context/contextApi";
import Head from "next/head";

function Owner() {
  const context=useContext(Context)
  const router=useRouter()

  const [cred, setCred] = useState({
    email:"",
    password:""
  })
  const onChange=(e)=>
  {
    setCred({...cred,[e.target.name]:e.target.value})
  }
  const handleSubmitOwner=async(e)=>
  {
e.preventDefault()
console.log(cred)
const sendingRequest=await fetch(`${baseUrl}/api/eleventh/dealer`,{
  method:"POST",
  headers:{
    "Content-Type":"application/json"
  },
  body:JSON.stringify({
    email:cred.email,
    password:cred.password
  })
 
})
const response=await sendingRequest.json()
console.log(response)
if(!response.error){
 await context.setAuth(!context.auth)
router.push("/owner/UploadContent")

}
else{
  alert("You are not Authorized to this site.")
}
  }
  return <>
   <Head>
    <title>Go Tech Plus | Owner of This Site</title>
        <meta name="description" content="This is the video uploading and sharing site for visitors and users and free to access and easy and convenient to use." />
        <link rel="icon" href="/favicon.ico" />
    </Head>
  <div className={styles.box}>
    <div className={styles.forum}>
    <Image  src={G} width={200} height={100} alt=""/>
    <strong>This Is Only For The Owner Of This Site.</strong>
    </div>
  <form onSubmit={handleSubmitOwner}>
            <div className={styles.inputBox}>
                <input type="email" name="email"  onChange={onChange} value={cred.email}/>
                <label>Email</label>
            </div>
            <div className={styles.inputBox}>
                    <input type="password" name="password" onChange={onChange} value={cred.password}/>
                    <label>Password</label>
                </div>
           <button type="submit" className={styles.submit} >Submit</button>
        </form>
        </div>
  </>;
}

export default Owner;
