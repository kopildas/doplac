import { useState } from 'react';
import {data} from "./Data/Data.js";
import './App.css'
import TreeComponent from './Components/TreeComponent.jsx';
import Dummy from './Components/Dummy.jsx';

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      
      <div className='flex flex-col items-center justify-center bg bg-slate-00 h-screen'>
      {/* <TreeComponent treeData={data} /> */}
      {/* <Dummy/> */}
      {data.map((node, index) => (
        <TreeComponent key={index} node={node} lastIndex={data.length - 1} />
      ))}
      </div>
    </>
  )
}

export default App
