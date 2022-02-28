import Image from 'next/image'
import React,{useState} from 'react'
import styles from '../styles/Home.module.css'
import G from '../images/logo.png'
// import {useRouter} from 'next/router';
import {BsFillPeopleFill} from 'react-icons/bs'
import Link from 'next/link'

function Navbar() {
  // const router=useRouter()
  const [menu, setMenu] = useState(false)
  
  return (
    <>
    <nav className={styles.navmenu}>
      <Link href="/"><Image  className={styles.logo} src={G} height={100} width={80} alt="Go Tech Plus"/></Link> 
        <ul className={styles.links}>
          

           {!menu? <a onClick={()=>setMenu(!menu)}>Courses</a>:
           <>
           <Link href={"/eleventh"} ><a onClick={()=>setMenu(!menu)}> XI </a></Link>
          
           </>
           }
            <Link  href="https://sites.google.com/view/abhishachittod-gotechplus/home?authuser=0"><a target={"_blank"}>About</a></Link>
            <Link href="/owner/Owner"><a title="It's Only For Owner of this site" ><BsFillPeopleFill/></a></Link>
        </ul>
    </nav>
   
   
    
    </>
  )
}

export default Navbar