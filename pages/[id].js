export async function getStaticPaths(){

const res = await fetch("https://jsonplaceholder.typicode.com/users")
const data = await res.json()

const paths= data.map((values)=>{

    return{
       params:{id: values.id.toString()}

    }

})
return {
    paths,
    fallback:false
}

}
export async function getStaticProps(context){

    const id= context.params.id
    const res = await fetch("https://jsonplaceholder.typicode.com/users/"+ id)
    const data = await res.json()
    return{
        props:{value: data}
    }


}


const Details  = ({value}) => {
    return ( 
<div>
        <h1>{value.name}</h1>
        <h1>{value.username}</h1>
        <h1>{value.email}</h1>
        <h1>{value.address.city}</h1>
     </div>);
}
 
export default  Details;