
import { useState } from "react";

export const Form=()=>{
   const [title,setTitle]=useState("")
   const [ingredients,setIngredients]=useState("")
   const [time,setTime]=useState("")
   const [img,setImg]=useState("")
   const [instructions,setInstructions]=useState("")

  return <>
      <input value={title} type="text" placeholder="Enter title" onChange={(e)=>setTitle(e.target.value)} />
      <br/>
      <input  value={ingredients} type="text" placeholder="Enter ingredients" onChange={(e)=>setIngredients(e.target.value)} />
      <br/>
      <input value={time} type="text" placeholder="Enter Time" onChange={(e)=>setTime(e.target.value)} />
      <br/>
      <input value={img} type="text" placeholder="Image url" onChange={(e)=>setImg(e.target.value)} />
      <br/>
      <input value={instructions} type="text" placeholder="Instructions" onChange={(e)=>setInstructions(e.target.value)} />
      <br/>
      <button onClick={()=>{
          const  payload={
            title:title,
            ingredients:ingredients,time:time,img:img,instructions:instructions
        }
        
       
       fetch("http://localhost:3001/products",{

            method: "POST",
            body: JSON.stringify(payload),
            headers: {
              "Content-Type": "application/json",
            }

       }).then(()=>{setTime("");setTitle("");setTitle("");setInstructions("");setImg("");setIngredients("")})
          

      

      

      }}>Add receipes</button>

  </>



}