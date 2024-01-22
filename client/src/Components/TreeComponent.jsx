import React, { useEffect, useState } from "react";
import ChildComponent from "./ChildComponent";
import PlusDesignOne from "./PlusDesignOne";
import {data} from '../Data/Data.js'
export default function TreeComponent({ node, index, lastIndex }) {
  console.log(node);
  console.log(index)
  console.log(lastIndex)
  const  [updateData, setUpdateData] = useState(data[index+1]);
  console.log(updateData);
  

  useEffect(() => {
    setUpdateData(data[index+1])
  }, [data])
  
  if (!node) {
    return null;
  }
  return (
    <div className='flex flex-col bg-fuchsia-00 items-center justify-center'>
      <div className="bg-red-00 font-semibold w-96 h-14 rounded-xl border border-zinc-200 flex items-center justify-center">{node.title}</div>
      {node.child ? (
        <div style={{ marginLeft: '0px' }} className='flex'>
          {node.child.map((childNode, index) => (
            <ChildComponent key={index} index={index} childData={childNode} />
          ))}
        </div>
      ) : (<>
      {index !== lastIndex && <PlusDesignOne />}
      </>
        // Conditionally render PlusDesignOne if not the last element
        
      )}
    </div>
  );
}
