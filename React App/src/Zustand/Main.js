
import { store } from "./store"


export const Main = ()=>{
    const count = store((state) => state.count)
    const incremenetFunction = store((state) => state.incremenetFunction)
    
    return(
        <>
            <p>Counter: {count}</p>
            <button onClick={incremenetFunction}>Increment</button>
            <Second/>
        </>
    )
}
