

export const Itemsdiv=({dta})=>{

let {title,ingredients,time,img,instructions}=dta

  function deshandle(dta){
        localStorage.setItem('myp',JSON.stringify(dta))
        var parent= document.getElementById('despa')
        parent.innerHTML=null
        
        var h4=document.createElement('h4')
        h4.innerHTML=dta.title;
        var p1=document.createElement('p')
        p1.innerHTML=ingredients;
        var p2=document.createElement('p')
        p2.innerHTML=time;
        var p3=document.createElement('p')
        p3.innerHTML=instructions;

        parent.append(h4,p1,p2,p3)


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