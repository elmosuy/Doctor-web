import React, { useEffect, useState } from 'react'

const Test = () => {
    const [date, setdate] = useState(['2023', '05', '11'])
    const [day, setday] = useState("")
    const [mont, setmont] = useState("")
    const [year, setyear] = useState("")
 
    
    const handel=()=>{
        const mayary=date
        console.log(Number(mayary[2]) );
        console.log(Number(mayary[1]) );
        console.log(Number(mayary[0]) );
        const days=Number(mayary[2])+7
        const month=Number(mayary[1])+9;
        const years=Number(mayary[0]);
        if(month > 12){
            setyear(Number(years)+1)
            setmont(month-12)
        }else{
            setyear(years)
        }
        setday(days+"/"+mont+"/"+year)

    }   
    
     const handeldate = async() =>{
        const app= await document.getElementById("dates")
        app.classList.add("show-last-date")
    }

     useEffect(() => {
    handel()
  
    }, [date])
   

    
  return (
    <div className='colc'>
        <h2>حاسبة الحمل والولادة بالتقويم الميلادي </h2>
        <h4>  :اليوم الأول من آخر دورة شهرية </h4>
            <input type="date" name="date" onClick={handeldate} id="date" onChange={(e)=>{setdate(e.target.value.split("-"))}} />

         <div  id='dates' className='dates'>  
         <p>موعد الولادة المتوقع: {day}</p>
         <p></p>
         
         </div> 
            
    </div>
  )
}

export default Test