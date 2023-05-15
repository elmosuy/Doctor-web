import React, { useState } from 'react'

const Test = () => {
    const [date, setdate] = useState()
    const [day, setday] = useState()
    const [month, setmonth] = useState()
    const [year, setyear] = useState()
    const handelDate=()=>{

    }
    
  return (
    <div>
        <h1>{date}</h1>
            <input type="text" name="date" id="date" onChange={()=>{set}} />
            <input type="text" name="date" id="date" />
            <input type="text" name="date" id="date" />
    </div>
  )
}

export default Test