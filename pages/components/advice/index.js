import React, { useState } from 'react'
import data from "../../api/data_ns.json"
import Image from 'next/image'
import Link from 'next/link'

const Advice = () => {
  const [Id, setId] = useState(1)
  const [n, setn] = useState(70)
  const loop=()=>{
  setn(n+70)}
  const handelFloatData=()=>{
    const advice=document.getElementById("advicedata")
    advice.classList.add("show-advice-data")
  } 
  const handelremoveData=()=>{
    const advice=document.getElementById("advicedata")
    advice.classList.remove("show-advice-data")
  } 

  return (
    <div className='advice'>
      <h1 >نصائح من أطباؤنا  المختصين</h1>

    <div className='items-advice' >
      {
        data.slice(0,n).map((el)=>(
         
            <section key={el.id} className='item-advice' onClick={()=>{setId(el.id)}}>
              <img src={el.Image} alt="ew" width={300} onClick={handelFloatData} />
              <h3>{el.link}</h3>
              <span>{el.links}</span>
            </section>
         
        ))
      }
    </div>
    <div className='advice-data' id='advicedata' >
      <span onClick={handelremoveData}>x</span>
      <div>

            <img src={data[Id||1].Image} alt="" width={600} />
            <h2>{data[Id||1].link}</h2>
            <h3 >{data[Id||1].links}</h3>
            <p>{data[Id||1].title}</p>
       </div> </div>
    <h2 onClick={loop} className='more-advice'><span>more</span></h2>
      
  </div>
  )
}

export default Advice