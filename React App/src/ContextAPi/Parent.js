import {useState, createContext} from 'react'
import { Child } from './Child'

//1. use State (state within a component)

//Global state maintenance
//2. context api --- (part of react)
//3. react redux (package) --- 1. store, 2. dispatcher 3. reducer 4. (Send)
//4. Zustand (third party package) - set()

const context = createContext({
    count:0,
    setCount: ()=>{

    }
})

export const Parent = ()=>{

    
    const [count, setCount] = useState(0)
   // var name = "Student"
     return(
        <>
            <h1>This is my parent component</h1>
            <p>{count}</p>
            <context.Provider value={{count, setCount}}>
                <Child></Child>    
            </context.Provider>
                        
        </>
    )
} 

export {context}