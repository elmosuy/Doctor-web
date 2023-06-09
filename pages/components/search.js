import React, { useEffect, useState } from 'react'
import dataSearch from "../api/links.json"
import Link from 'next/link';


const Search = () => {
  const [search, setsearch] = useState("daqw");

  const handelremove = () => {
    const search = document.getElementById("searcher");
    search.classList.remove("show-search");
  };
  const filteredData = dataSearch.filter((el) => {return el.link.toLowerCase().includes(search)})
   
    

  const [n, setn] = useState(10)
  const loop=()=>{
  setn(n+70)
  
  }

  useEffect(() => {
    const search = document.getElementById("searcher");
    if (filteredData.length>1){
      
      search.classList.add("show-search");
 }
 }, [search])

  return (
    <div><div class="container" >
    <input placeholder="ابحث " required="" class="input" name="text" type="text"  onChange={(e) => {setsearch(e.target.value.toLowerCase()) }}/>
           
    <div class="icon">
        <svg viewBox="0 0 512 512" class="ionicon" xmlns="http://www.w3.org/2000/svg">
            <title>Search</title>
            <path stroke-width="32" stroke-miterlimit="10" stroke="currentColor" fill="none" d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"></path>
            <path d="M338.29 338.29L448 448" stroke-width="32" stroke-miterlimit="10" stroke-linecap="round" stroke="currentColor" fill="none"></path>
        </svg>
    </div>
</div>

<div className='searcher' id='searcher'>
  {
    filteredData.slice(0,n).map((el)=>(
       <div key={el.id} > <Link href={`/components/doa/${el.id}`}><div onClick={handelremove} className='search-item'><h2>{el.link}</h2> <p>{el.title}</p></div></Link></div>
    ))
  }
  <h3 onClick={loop} className='more'>more</h3>
</div>

</div>
  )
}

export default Search