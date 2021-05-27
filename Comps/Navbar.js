import Link  from 'next/link'
import styles from '../styles/Home.module.css'

const  Navbar= () => {
    return (  
<nav className={styles.title}>
<Link href="/"><a >Home </a></Link>
<Link href="/Form"><a>form </a></Link>
<Link href="/Contact"><a>Email:nitishbisht@google.com</a></Link>
</nav>

    );
}
 
export default Navbar;