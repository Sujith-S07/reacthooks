import {useEffect, useState,useMemo,useCallback} from 'react';
import './App.css';

function App() {
  const[student,setstudent]=useState("");
  const[msg,setmsg]=useState("");

   const[number,setnumber]=useState(0);
   
   useEffect(()=>{
    
       alert("Welcome My Task");
    },[]);
   
   
   
   const result=useMemo(()=>{
    return number*2;
   },[number])
   const Message=useCallback(()=>{
   setmsg("completed successfully")},[]);
   const Start=useCallback(()=>{
   setmsg("On process")},[]);
   const Finish=useCallback(()=>{
   setmsg("I Am Finished My Task Very Well")},[]);
   const handleSubmit=()=>{
    if(student.trim()===""){ 
      alert("please enter the student name");
    }else{
      alert("welcome "+student+" !");
    } 
    
   }


  return (
    <div className="App">
      <header className="STUDENTS DETAILS">
        <h1 >UseState Task</h1>
        
        <h3>Student Name Display</h3>
        <input type="text" placeholder='studentName' value={student} onChange={(e)=>setstudent(e.target.value)}></input><br></br>
        <button onClick={(handleSubmit)}>Submit</button>
         <hr></hr>
        <h1>useMemo Task</h1>
       
        <h3>Multiple Number by 2</h3>
        <h3>Number:{number}</h3>
        <h3>Result:{result}</h3>
        <button onClick={()=>setnumber(number+1)}>output</button><br></br>
        <hr></hr>
        <h1>show Welcome Message</h1>
          <button onClick={ Message}> Message1</button>
          <button onClick={ Start}> Message2</button>
          <button onClick={ Finish}> Message3</button>
        <p>{msg}</p>
      </header>
    </div>
  );
}

export default App;
