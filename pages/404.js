import Link from 'next/link'
import {useEffect} from "react"
import {useRouter} from "next/router"

const NotFound = () => {
const route=useRouter()
useEffect(() => {
    
    setTimeout(() => {
    route.push('/')
        
    }, 4000)
}, [])


    return ( 
<div className="notfound">

<h1>Oppss......</h1>
<p>Page is not found</p>
<p>Please go to <Link href="/"><a>Home</a></Link></p>

</div>

     );
}
 
export default NotFound;