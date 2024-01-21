import { useState } from 'react';
import {data} from "./Data/Data.js";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const TreeComponent = ({ treeData }) => {
    return (
      <ul>
        {treeData.map((node, index) => (
          <li key={index}>
            {node.title}
            {node.child && <TreeComponent treeData={node.child} />}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      
      <div className='flex items-center justify-center bg bg-red-100 h-screen'>
      <TreeComponent treeData={data} />
      </div>
    </>
  )
}

export default App
