import React from 'react'

export default function Boradlist({datakey}) {
  React.useEffect(()=>{
    console.log(datakey)
  },[])
  return (
    <div>
      <h2>공지사항</h2>
      <ul>
      {
           datakey.map((v, i)=>{
            return(
              <li>
                <h3>{v.title}</h3>                
              </li>
            )
           })
      }
      </ul>
    </div>
  )
}
