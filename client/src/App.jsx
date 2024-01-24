import { useEffect, useState } from 'react';
import {data} from "./Data/Data.js";
import './App.css'
import TreeComponent from './Components/TreeComponent.jsx';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [count, setCount] = useState(0)
  const [updateData, setUpdateData] = useState(data[count])

  const update = () =>{
    setCount(count+1);
  }
  const notification = ()=> {
    toast.success("Please click on the '+' button to show more !");
  }

  useEffect(() => {
    notification()
  
    
  }, [])
  

  return (
    <>
      
      <div className='flex flex-col items-center justify-center bg bg-slate-00 h-screen'>
      {data.map((node, index) => (
        <>
        {index<=count && 
        <TreeComponent key={index} index={index} node={node} lastIndex={data.length - 1} update={update} count={count}/>}
        </>
      ))}
      </div>
      <ToastContainer />
    </>
  )
}

export default App
