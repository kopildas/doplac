import React from 'react';
import PlusDesignOne from './PlusDesignOne';
import ChildComponent from './ChildComponent';

const TreeNode = ({ node }) => {
  if (!node) {
    return null;
  }

  return (
    <div className='flex flex-col bg-fuchsia-00 items-center justify-center'>
      <div className="bg-red-200 font-semibold w-80 h-14 rounded-xl border border-zinc-200 flex items-center justify-center">{node.title}</div>
      {node.child && (
        <div style={{ marginLeft: '20px' }} className='flex'>
          {node.child.map((childNode, index) => (
            <ChildComponent key={index} childData={childNode} />
          ))}
        </div>
      )}
    </div>
  );
};

const Tree = ({ data }) => {
  return (
    <div>
      {data.map((node, index) => (
        <TreeNode key={index} node={node} />
      ))}
    </div>
  );
};

const Dummy = () => {
  const data = [
    {
      "title": "Tree Start"
    },
    {
      "title": "Step 1"
    },
    {
      "title": "Step 2",
      "child": [
        {
          "title": "Sub Tree",
          "curve": true,
          "child": [
            {
              "title": "Step 1"
            }
          ]
        },
        {
          "title": "Sub Tree",
          "curve": true,
          "child": [
            {
              "title": "Step 1"
            }
          ]
        }
      ]
    }
  ];

  return <Tree data={data} />;
};

export default Dummy;



// import React, { useEffect, useState } from "react";
// import ChildComponent from "./ChildComponent";
// import PlusDesignOne from "./PlusDesignOne";
// import {data} from '../Data/Data.js'
// export default function TreeComponent({ node, index, lastIndex }) {
//   console.log(node);
//   console.log(index)
//   console.log(lastIndex)
//   const  [updateData, setUpdateData] = useState(data[index+1]);
//   console.log(updateData);
  

//   useEffect(() => {
//     setUpdateData(data[index+1])
//   }, [data])
  
//   if (!node) {
//     return null;
//   }
//   return (
//     <div className='flex flex-col bg-fuchsia-00 items-center justify-center'>
//       <div className="bg-red-00 font-semibold w-96 h-14 rounded-xl border border-zinc-200 flex items-center justify-center">{node.title}</div>
//       {node.child ? (
//         <div style={{ marginLeft: '0px' }} className='flex'>
//           {node.child.map((childNode, index) => (
//             <ChildComponent key={index} index={index} childData={childNode} />
//           ))}
//         </div>
//       ) : (<>
//       {index !== lastIndex && <PlusDesignOne />}
//       </>
//         // Conditionally render PlusDesignOne if not the last element
        
//       )}
//     </div>
//   );
// }
