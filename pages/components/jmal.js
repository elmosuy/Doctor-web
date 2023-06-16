import Link from 'next/link'
import React from 'react'

const Jmal = () => {
  return (
    <div >
        <div className='jmal'>
            <section>
                    <Link href="/components/nuller"><img src="https://static.webteb.net/images/content/tbl_articles_article_15150_61583034297-f714-4239-acb8-5f9e156e5dfc.jpg" alt="" /></Link>
                    <h2>
                         كل ما تريد معرفته عن اسرار الجمال
                    </h2>
            </section>
            <section>
            <Link href="/components/nuller"><img src="https://media.gemini.media/img/large/2019/10/18/2019_10_18_12_41_1_17.jpg" alt="" /></Link>
                    <h2>
                         الحمل والولادة
                    </h2>
            </section>
        </div>
    </div>
  )
}

export default Jmal