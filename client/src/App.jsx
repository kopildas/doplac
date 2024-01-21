import { useState } from 'react';
import {data} from "./Data/Data.js";
import './App.css'
import TreeComponent from './Components/TreeComponent.jsx';

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      
      <div className='flex items-center justify-center bg b-red-100 h-screen'>
      <TreeComponent treeData={data} />
      </div>
    </>
  )
}

export default App
