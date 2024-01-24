import React, { useState } from "react";
import ChildComponent from "./ChildComponent";
import PlusDesignOne from "./PlusDesignOne";

export default function TreeComponent({ node, index, lastIndex,update,count }) {
  const [showChildNodes, setShowChildNodes] = useState(false);



  if (!node) {
    return null;
  }


  return (
        <div className='flex flex-col bg-fuchsia-00 items-center justify-center'>
          
          <div className={`bg-white font-custom font-semibold w-[301px] h-[60px] rounded-[10px] border border-sub-border flex items-center justify-center z-20  ${index!==0 && "shadow shadow-shadow-color-1 bg-red-00"}`}>{node.title}</div>
          {node.child ? (
            <div style={{ marginLeft: '0px' }} className='flex'>
              {node.child.map((childNode, index) => (
                <ChildComponent key={index} index={index} childData={childNode} />
              ))}
            </div>
          ) : (<>
          {index !== lastIndex && <PlusDesignOne onClick={update}/>}
          </>
          
            // Conditionally render PlusDesignOne if not the last element
            
          )}
          
        </div>
      );
}
