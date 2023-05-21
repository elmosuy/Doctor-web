import React, { useState } from 'react'
import data from "../../api/api_Alaj.json"
import Link from 'next/link'

const Alaj = () => {
  const [n, setn] = useState(70)
  const loop=()=>{
  setn(n+70)
  
  }
  return (
    <div className='api-alaj'>
      <h1>قائمة العلاجات</h1>
      <div >
        {
          data.slice(0,n).map((el)=>(
            <div key={el.id} dir='rtl' className='illness alaj-api'>
              <div className='item-illness'>
                <Link href={`/components/alaj/${el.id}`}><div className='id-index'><p>{el.id+1}</p><span>-</span> <h3>{el.type}</h3></div></Link>
                {/* <p>{el.link}</p> */}
              
            </div>
       
            </div>
          ))
        }
      </div>
      <h2 onClick={loop}>more</h2>
        
    </div>
  )
}

export default Alaj