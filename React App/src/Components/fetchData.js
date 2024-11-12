import { useEffect, useState } from "react"

// UseEffect with fetch API

export const Fetch = ()=>{

    const [data, setData] = useState("")

    useEffect(()=>{

        async function fetchedData (){
            try{
            const response = await fetch("https://reactnative.dev/movies.json")
            const moviesData = await response.json()
            setData(moviesData.description)
            }
            catch(error){
                alert(error)
            }
        }

        fetchedData()
    },[])
    

    return(
        <>
            <h1>Fetched Data</h1>
            <p>My data: {data}</p>
        </>
    )

}