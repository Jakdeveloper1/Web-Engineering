import { Link } from "react-router-dom"


export const Test = ()=>{
    
    const students = [
        {
            id:1,
            name:"Student 1"
        },
        {
            id:2,
            name:"Student 2"
        }
    ]
    
    return(
        <>
        <h3>Load my student data</h3>
        <ul>
            {
                students.map((element)=>
                 (<li>
                   <Link to={`/test/${element.id}`}> {element.id} - {element.name}</Link>
                    </li>)   
                )
            }
        </ul>
            
        </>
    )
}