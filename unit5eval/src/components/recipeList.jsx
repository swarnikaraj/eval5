export const Itemsdiv=({dta})=>{

let {title,ingredients,time,img,instructions}=dta

  function deshandle(dta){
        localStorage.setItem('myp',JSON.stringify(dta))
        
  }
          
 return (
     <>
   
    <div>
     <p>{title}</p>

     <p>Cooking Time:{time}</p>
     <button onClick={()=>{deshandle(dta)}} >SHOW description</button>
    </div>
</>
     
 )



}