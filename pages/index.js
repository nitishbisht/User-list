import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../Comps/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  
  const data = await res.json()
 
  return {
    props: {value:data }
    
  }
}


export default function Home({value}) {

  return (
    <>
    
    <Head>
      <title>Test | Home</title>
      <meta></meta>
    </Head>
    
    {value.map((values)=>(<Link href={"../"+values.id} key={values.id} ><a><h3 className={styles.name}>{values.name}</h3></a></Link>) )}

    
    <div >
      <h1>hello this is Home Page</h1>
      <p>ThemeProvider: Provides the theming context for all components.</p>
    

    </div>
    
</>
  )
}
