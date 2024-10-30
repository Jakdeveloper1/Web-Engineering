import { useState } from "react"

//COunter app
const App =()=>{

    const [getName, setName] =useState("Default ")
    const [counter, setCount] = useState(0)

    const decrement =() =>{
        if(counter > 0)
            setCount(counter-1)
        else{
            alert("Counter cannot be negative")
        }
    }
    
    return(
        <div>
            <p>{getName}</p>
            {/* <button onClick={()=>setName("Moiz")}>Press me</button> */}
            <button onClick={()=>setCount(counter+1)}>Increment</button>
            <p>This is my counter - {counter}</p>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default App