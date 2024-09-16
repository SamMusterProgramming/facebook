import React, { useEffect, useState } from 'react'

const App = () => {

  const [data , setData] = useState([])
  useEffect(()=>{
    
    fetch("/api").then(
      response => response.json()
    ).then(
      d => {
        setData(d)
        console.log(data.users)
        console.log('hellooo')
      },[]
    )
  })
  return (
    <div>
     {data.map((user , i) =>( <p key={i}>{user}</p>))}
    </div>
  )
}

export default App
