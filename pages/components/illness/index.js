import Head from 'next/head'
import Image from 'next/image'
import data from "../../api/api_dr.json"
import data2 from "../../api/data_dr_Image.json"

import Link from 'next/link'
import { useEffect, useState } from 'react'
import Search from '../search'

export default function Home() {
  const [select, setselect] = useState("")
  const [idn, setidn] = useState("")
  
  const filteredDaa = data.filter((el) => {return el.type.includes(select)})

  
  
  
  const [n, setn] = useState(70)
  const loop=()=>{
  setn(n+70)
  
  }

  return (
    <div>
     
    <div className='All-illness'>
      

      <section dir='rtl'>
     <select  name="انواع" id="" onChange={(e)=>{setselect(e.target.value)}}>
     <option value="الجلدية">الامراض الجلدية</option>
     <option value="العصبية">الامراض العصبية</option>
     <option value="التنفسي">الامراض الجهاز التنفسي</option>
     <option value="جراحة"> جراحة عامة</option>
     <option value="الأنسجة"> علم الانسجة</option>
     <option value="العضلات"> أمراض العضلات والعظام و المفاصل </option>
     <option value="القلب">أمراض القلب و الشرايين </option>
     <option value="نفسية">الامراض نفسية</option>
     <option value="العيون ">الامراض العيون </option>
     <option value="التشريح"> علم التشريح</option>
     <option value="البولية">  أمراض المسالك البولية والتناسلية </option>
     <option value="الأجنة"> علم الأجنة </option>
     <option value="وحنجرة">الامراض أنف، أذن وحنجرة</option>
      </select>  <Search/>
      { filteredDaa.slice(0,n).map((el)=>(
 
   <div dir='rtl' className='illness' key={el.id}>
              <div className='item-illness'>
             <h3 onClick={e=>(setidn(el.id))}>{el.link}</h3>
              <p>{el.type}</p>
              </div>
              <span>Multiple [diseases]</span>
              <hr />
     </div>    
      
    ))}

    <h2 onClick={loop}>more loading </h2> </section>  
      <div className='data' dir='rtl'>
        <img src={data2[idn||1].image} alt="" width={800} />
        <h3>
          {data2[idn||1].header}
        </h3>
         
         <p>{
            data2[idn||1].body
          }</p> 

      </div> 
</div> </div>
  )
}
