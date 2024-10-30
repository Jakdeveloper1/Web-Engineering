import { useEffect, useState } from "react"


export const ToDoList = ()=>{

    const [item, setItem] = useState("")
    const [list, setList] = useState([])

    const addItem = () =>{
        setList([...list, item])
    }

    const deleteItem = (index)=>{
        setList(list.filter((element,eIndex)=>
            (eIndex !== index)
        ))
    }



    const myList = 
    list.map((element, index)=>
      <div>
      <p>{index+1} - {element}</p>
     <button onClick={()=>deleteItem(index)}>Delete Item</button>  
     </div>
    
    )

    return(
        <div>
            <h1>TO Do List</h1>
            <input 
            value={item}
            onChange={(e)=>setItem(e.target.value)}
            ></input>

            <button onClick={addItem}>Add an Item</button>

            <p>{item}</p>

            <h1>List to show</h1>

            <p>{myList}</p>

            
            
            </div>
    )
}