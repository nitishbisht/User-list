import Navbar from "./Navbar";
import styles from "../styles/Home.module.css"

const Layout = ({children}) => {
    return (  
<div >
<body className={styles.background}>   
<Navbar/>
{children}
</body>
</div>
    );
}
 
export default Layout;