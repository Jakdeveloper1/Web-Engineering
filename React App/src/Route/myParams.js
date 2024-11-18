import { useParams } from "react-router-dom"


export const MyParams = ()=>{
    const {id} = useParams()
    return(
        <>
            
            <h3>My received id is {id}</h3>
        </>
    )
}