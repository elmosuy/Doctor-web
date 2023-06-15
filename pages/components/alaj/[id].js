import Head from 'next/head'
import Image from 'next/image'
import data from "../../api/data_Alaj5.json"
import data2 from "../../api/data_head_Alaj5.json"
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Alaj() {
    const router = useRouter()
    const { id } = router.query

  var data_filter = data.filter((element) => element.id == id);
  var data_fil = data2.filter((element) => element.index == id);

  return (
    <div  className='alaj' >
       <Link href="/components/alaj"><span className='right' ><svg width="35px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z" fill="#606060"/>
          </svg>
         </span></Link>
        <div className=' data2'>

     
      <div className='' >
      {
        data_fil.map((el)=>(
          <div key={el.index}>
              <div dir='rtl' className='Alaj-head'>
                    <h1>دواء {el.h2}</h1>
                   
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
