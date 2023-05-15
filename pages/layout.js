import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Search from './components/search'

const Layout = ({children}) => {
  return (
    <div>
      <Head>
            <title>
              طبيبك | Doctor 
            </title>
      </Head>
        
            <header dir='rtl'>
              <div>
                <ul>
                    <Link href="/"><li>الصفحة الرئيسية</li></Link>
                    <Link href="/components/illness/"><li>الامراض</li></Link>
                    <li>العلاج</li>
                    <li>من نحن</li>
                </ul>
              </div>
              <span>
                <Search/>
              </span>
            </header>
    


     <div className='cheldren'>
                    {children}

     </div>
       
    </div>
  )
}

export default Layout