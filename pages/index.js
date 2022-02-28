import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../Mellodies/Navbar'
import {useRouter} from 'next/router'
import {SiBookstack} from 'react-icons/si'
import {GiPapers,GiBallPyramid} from 'react-icons/gi'

export default function Home() {
  const router=useRouter()
  return (
    <>
      <Head>
        <title>Go Tech Plus | Ahead with Education</title>
        <meta name="description" content="This channel consists of all those videos which help the student to be always overcoming on their risk. It also contains the videos to motivate the student about their goal and not to get out from their way of success. And This channel always has tried to make and take out the unique talent from them. And also It is abound in Physics ocean." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
<Navbar/>
<div className={styles.overlay}></div>
<div className={styles.content}>
 <h1> As <span className={styles.tag}>Same</span> Charges Never <span className={styles.tag}>Attract</span> Each Other</h1>
 <p>Do What Your Dreams be <span className={styles.tag}>Fulfilled </span>Rather to Wander Aimlessly, <br/> Choose The Right Route Go Tech Plus.</p> 
 
 <div className={styles.button}>
 <button onClick={()=> router.push("/eleventh")} className={styles.btn}>Learn More</button>
 </div>
</div>

<div className={styles.cards}>
<div className={styles.card }>
<h2 className={styles.up}><SiBookstack/>  Enhance Your Learning</h2>
<p >With Go Tech Plus provided resources of E-Books you can enhance your learning.</p>
</div>

<div className={styles.ard}>
<h2 className={styles.middle}><GiPapers/>  Challenge Yourself </h2>
<p>Go Tech Plus confidence your concepts with E-Assessments and Daily Practice Papers.</p>
</div>


<div className={styles.rd}>
<h2 className={styles.down}><GiBallPyramid/>  Remembering Concepts</h2>
<p>With Go Tech Plus provided videos and lectures you can easily remember your concepts.</p>
</div>


</div>
      </>
  )
}
