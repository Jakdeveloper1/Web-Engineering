import { useContext, useState } from "react"
import { context } from "./Parent"

export const Child =({child})=>{
    
    
       const {count, setCount} =  useContext(context)
    return(
        <>
            <button onClick={()=>{
                setCount(count+1)
            }}>Increment</button>
            <context>{child}</context>

            
            <button onClick={()=>{
                setCount(count-1)
            }}>Decrement</button>
        </>
    )
}