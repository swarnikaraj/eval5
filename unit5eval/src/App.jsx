import logo from './logo.svg';
import './App.css';

import { Form } from './components/form';
import styled from "styled-components";

import { Receip } from './components/receip';
import { Descrip } from './components/des';



const Parentdiv=styled.div`
width:1200px;
display:flex;
border:2px solid #362222;

&>div{
  margin:10px;
  width:450px;
  border:2px solid #362222;
  overflow-y: scroll;
  background:#FFCCD2;
  
}

& >div> div {
  width:300px;
  background:#B3541E;
  height:70px;
  border:2px solid #362222;
  margin:1px;
  padding:5px;
  cursor:pointer;
}

& >div>div>p{
  margin:1px;
}
`



function App() {
  
  return (
    <div className="App">
      
  <Parentdiv> <div><Form/></div> 
  <div> 


     <Receip/>
  </div>
  
  </Parentdiv>

  <Parentdiv id='despa'> </Parentdiv>

   

    </div>
  );
}

export default App;
