import Head from 'next/head'
import Image from 'next/image'
import data from "./api/data_Alaj.json"
import data2 from "./api/data_head_Alaj.json"

export default function Home() {
 
  return (
    <div className='home-page' >
      
        <section class="section hero">
            <div class="">
                <div class="row">
                <div class="col-12 col-md-6 col-lg-6 text-position">
                        <img src="https://raw.githubusercontent.com/alaattinerby/Covid-19-Website/4c233460e18c1a8cfba4f7c4830e8da0e7c5e8e9/Covid-19/img/section-image.svg" class="section__image se" alt="Quarantine"/>
                       
                    </div>
                    <div class="col-12 col-md-6 col-lg-6 text-position"  dir='rtl'>
                        <h2 class="section__title">نصائح من الاطباء</h2>
                        <span class="section__span">اذا كنت تريد الوقاية من الكورونا</span>
                        <p class="section__desc">اتبع تعليماتنا عن الوقاية في هذه الصفحة </p>
                        <a href="#" class="section__button seciton__button--center">Let Us Help</a>
                    </div>
                   
                </div>
            </div>
        </section>   

        <section class="towi">
            <div class="rows ">
                <div class="row">
                    <div class="col-12 col-md-6 col-lg-6 text-position">
                       
                    </div>
                    <div class=" text-position">
                        <h1 class="coronavirus__title">What Is Covid-19</h1>
                        <span class="coronavirus__span">Coronavirus</span>
                        <p class="coronavirus__desc">
                            Corona viruses are a type of virus. 
                            There are many different kinds, and some cause disease. 
                            A newly identified type has caused a recent outbreak of respiratory 
                            illness now called COVID-19.Lauren Sauer, M.S., the director of operations with the 
                            Johns Hopkins Office of Critical Event Preparedness and Response
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section class="section contagion">
            <div class="container">
                <div class="upside upside--top">
                    <h2 class="upside__title">Covid-19</h2>
                    <span class="upside__span">Contagion</span>
                    <p class="upside__desc">
                        Corona viruses are a type of virus. 
                        There are many different kinds, and some cause disease. 
                        A newly identified type
                    </p>
                </div>
                <div class="row cards ">
                    <div class="">
                        <div class="card">
                         
                            <h3 class="card__title">Air Transmission</h3>
                            <p class="card__desc"> Objectively evolve tactical before extensible initiatives. Efficiently simplify</p>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4">
                        <div class="card">
                          
                            <h3 class="card__title">Human Contacts</h3>
                            <p class="card__desc">Washing your hands is one of thesimplest ways you can protect</p>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4">
                        <div class="card">
                         
                            <h3 class="card__title">Contained Objects</h3>
                            <p class="card__desc">Use the tissue while sneezing,In this way, you can protect your droplets.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="symptomps">
            <div class="container">
                <div class="upside top">
                    <h2 class="upside__title">Covid-19</h2>
                    <span class="upside__span">Symptomps</span>
                    <p class="upside__desc">
                        Corona viruses are a type of virus. 
                        There are many different kinds, and some cause disease. 
                        A newly identified type has caused a recent outbreak of respiratory 
                    </p>
                </div>
       
            </div>
        </section>

        <section class="prevention">
            <div class="container">
                <div class="upside">
                    <h2 class="upside__title">Covid-19</h2>
                    <span class="upside__span">What should we do</span>
                    <p class="upside__desc">
                        Corona viruses are a type of virus. 
                        There are many different kinds, and some cause disease. 
                        A newly identified type has caused
                    </p>
                </div>
                <div class="row row-position">
                    <div class="col-12 col-md-6 col-lg-6">
                        <span class="prevention__span"><span class="prevention__number">01</span> Wear Masks</span>
                        <p class="prevention__desc">
                            Continually seize impactful vortals rather than future-proof supply 
                            chains. Uniquely exploit emerging niches via fully tested 
                            meta-services. Competently pursue standards compliant leadership 
                            skills vis-a-vis pandemic outside the box thinking. Objectively
                        </p>       
                    </div>
                    <div class="col-12 col-md-6 col-lg-6 ">
                       
                    </div>                    
                </div>
                <div class="row row-position">
                    <div class="col-12 col-md-6 col-lg-6 ">
                        <span class="prevention__span"><span class="prevention__number">02</span>Wash Your Hands</span>
                        <p class="prevention__desc">
                            Continually seize impactful vortals rather than future-proof supply chains. 
                            Uniquely exploit emerging niches via fully tested meta-services. 
                            Competently pursue standards compliant leadership skills vis-a-vis pandemic outside the box thinking. 
                            Objectively Continually seize impactful vortals 
                        </p>
                    </div>
                    <div class="col-12 col-md-6 col-lg-6">
                     
                    </div>                    
                </div>
                <div class="row row-position">
                    <div class="col-12 col-md-6 col-lg-6 ">
                        <span class="prevention__span"><span class="prevention__number">03</span>Use nose - rag</span>
                        <p class="prevention__desc">
                            Continually seize impactful vortals rather than future-proof supply 
                            chains. Uniquely exploit emerging niches via fully tested meta-services. 
                            Competently pursue standards compliant leadership skills vis-a-vis 
                            pandemic outside the box thinking. Objectively 
                        </p>
                    </div>
                    <div class="col-12 col-md-6 col-lg-6 ">
                     
                    </div>                    
                </div>
                <div class="row row-position">
                    <div class="col-12 col-md-6 col-lg-6 ">
                        <span class="prevention__span"><span class="prevention__number">04</span>Avoid contacts</span>
                        <p class="prevention__desc">
                            Continually seize impactful vortals rather than future-proof supply chains. 
                            Uniquely exploit emerging niches via fully tested meta-services. 
                            Competently pursue standards compliant leadership skills vis-a-vis pandemic
                        </p>
                    </div>
                    <div class="col-12 col-md-6 col-lg-6">
                      
                    </div>                    
                </div>
            </div>
        </section>

  
    </div>
  )
}
