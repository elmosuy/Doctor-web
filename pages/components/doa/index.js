import React, { useEffect, useState } from 'react'
import data from "../../api/links.json"
import Link from 'next/link'

const Alaj = () => {
  const [n, setn] = useState(70)
  const [post, setpost] = useState([])
  const loop=()=>{
  setn(n+70)
  }
  useEffect(() => { 
    setpost(data)
  }, []);
  return (
    <div className='api-alaj apis-doa'>
      <h1> قائمة موسوعة الادوية</h1><img src="/doct.png" className='doctors' width={400} alt="" />
  {/* */}

      <div >
        {
          post.slice(0,n).map((el)=>(
            <div key={el.id} dir='ltr' className='illness alaj-api api-doa'>
              <div className='item-illness'>
                <Link href={`/components/doa/${el.id}`}><div className='id-index'> <p>{el.id+1}</p><span>-</span>  <h3>{el.link}</h3> <h5>{el.title}</h5></div></Link>
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