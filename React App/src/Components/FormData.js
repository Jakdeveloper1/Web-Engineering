

export const App1 = ({title, state})=>{

    return(
        <>
            <p>{title}</p>
            <input 
            type="text" 
            value = {state}
            onChange={(e)=>e.target.value}></input>
        </>
    )
}