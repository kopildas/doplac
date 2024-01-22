import { useEffect, useState } from 'react';
import {data} from "./Data/Data.js";
import './App.css'
import TreeComponent from './Components/TreeComponent.jsx';
import Dummy from './Components/Dummy.jsx';

function App() {
  const [count, setCount] = useState(0)
  const [updateData, setUpdateData] = useState(data[count])

  const update = () =>{
    setCount(count+1);
  }

  

  return (
    <>
      
      <div className='flex flex-col items-center justify-center bg bg-slate-00 h-screen'>
      {data.map((node, index) => (
        <>
        {index<=count && 
        <TreeComponent key={index} node={node} lastIndex={data.length - 1} update={update} count={count}/>}
        </>
      ))}
      </div>
    </>
  )
}

export default App
