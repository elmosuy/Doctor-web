import Head from 'next/head'
import Image from 'next/image'
import data from "../../api/data_Alaj.json"
import data2 from "../../api/data_head_Alaj.json"
import { useRouter } from 'next/router'

export default function Alaj() {
    const router = useRouter()
    const { id } = router.query

  var data_filter = data.filter((element) => element.id == id);
  var data_fil = data2.filter((element) => element.index == id);

  return (
    <div  className='alaj' >
        <div className=' data2'>

     
      <div className='' >
      {
        data_fil.map((el)=>(
          <div key={el.index}>
              <div dir='rtl' className='Alaj-head'>
                    <h1>{el.h2}</h1>
                   
                      <table>
                        <tr><td>الاسم التجاري</td><td>{el.h1}</td> </tr>
                        <tr><td>تصنيف الدواء</td><td>{el.n2}</td></tr>
                        <tr><td>الفئة</td><td>{el.n3}</td></tr>
                  </table>
                    
              </div>

           </div>
         
        ))
      }
      </div>

    <div className='Alaj-data'>
      {
        data_filter.map((el)=>(
          <div key={el.id} className='item-alaj'>
              <div dir='rtl'>
                    <h2>{el.header}</h2>
                    <p>{el.ul}</p>
              </div>

           </div>
         
        ))
      }</div></div>
    </div>
  )
}
