
export const Second = ({name})=>{
  

  //conditional rendering
  return(
    <div className="App">
    
    {(name=="Second") ?
      <p>this is my prop value : {name}</p>
      :
      <p>Nothing received</p>
    }


  </div>
  )
}
