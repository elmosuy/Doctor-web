import React, { useEffect, useState } from 'react'
import data from "../../api/api_Alaj.json"
import Link from 'next/link'

const Alaj = () => {
  const [n, setn] = useState(70)
  const loop=()=>{
  setn(n+70)
  }
  const [post, setpost] = useState([])
  useEffect(() => { 
    setpost(data)
  }, [n]);
  return (
    <div className='api-alaj'>
      <h1>قائمة الادوية</h1>
      <div >
        {
          post.slice(0,n).map((el)=>(
            <div key={el.id} dir='rtl' className='illness alaj-api'>
              <div className='item-illness'>
                <a href={`/components/alaj/${el.id}`}><div className='id-index'><p>{el.id+1}</p><span>-</span> <h3>{el.type}</h3></div></a>
                {/* <p>{el.link}</p> */}
              
            </div>
       
            </div>
          ))
        }
      </div>
      <h2 onClick={loop}><span>more</span></h2>
        
    </div>
  )
}

export default Alaj