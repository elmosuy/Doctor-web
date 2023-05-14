import React, { useEffect } from 'react'
import data from "../../api/data_dr_Image.json"
import { useRouter } from 'next/router'
import Image from 'next/image'

const Item = () => {

  
    const router = useRouter()
    const { id } = router.query
  return (
    <div  className='texts'>
      <div className='text' dir='rtl' >
        <img src={data[id].image} alt="Image web tab" width={850}/>
       <h3>
            {data[id||1].header}

            
        </h3>
        <p>
          {data[id||1].body}
        </p>

      </div>
      
        
    </div>
  )
}

export default Item