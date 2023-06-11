import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Search from './components/search'

const Layout = ({children}) => {
  const handeldark=()=>{
    const dark=document.body;
    dark.classList.toggle("dark")
  }
  const handelHeader=()=>{
    const head=document.getElementById("header")
    head.classList.toggle("show-header")
  }
  const handelHeaders=()=>{
    const head=document.getElementById("header")
    head.classList.remove("show-header")
  }
  return (
    <div>
      <Head>
            <title>
              طبيبك | Doctor 
            </title>
      </Head>
        <span className='bourger' onClick={handelHeader}>|||</span>
        <span className='logod'><Link href="/"><img src="dlogo.png"  alt="" /></Link></span>
        
            <header dir='rtl' id='header'>
              <div>
                <ul>
                    <Link href="/"><li>الصفحة الرئيسية</li></Link>
                    <Link href="/"><li>الجمال والولادة </li></Link>                
                    <Link href="/components/illness/"><li>الامراض</li></Link>
                     <a href={`/components/alaj`}><li>العلاج</li></a>
                    <Link href="/components/doa"><li>موسوعة الادوية</li></Link>
                    <Link href="/components/advice"><li> نصائح </li></Link>
                </ul>
              </div> <section className='head-leabl'><Search/>
              <label class="switch">
    <input type="checkbox" onClick={handeldark}/>
    <span class="slider"></span>
</label></section>
                
              <span>
            
              </span>
              <span>
            
              </span>
            </header>
    


     <div className='cheldren' onClick={handelHeaders}>
                    {children}

     </div>
       
    </div>
  )
}

export default Layout
