import { useEffect } from "react";
import { useState } from "react";
import { Itemsdiv } from "./recipeList";

export const Receip=()=>{
    const [items,setItems]=useState([])

    function sorthandle(){

      let arr= items.sort(function(a,b){return b.time - a.time})
      setItems(arr)
            
    }

function getitem(){

fetch('http://localhost:3001/products').then(d=>d.json()).then((res)=>setItems(res))



}


useEffect(() => {
    getitem()
    
}, [])


return (<>{
    items.map((e)=>(
          <Itemsdiv  key={e.id} dta={e}/>
     ) )
}


<button  onClick={sorthandle}>Sort</button>


</>)






}