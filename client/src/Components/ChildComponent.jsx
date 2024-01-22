import React from 'react'
import TreeComponent from './TreeComponent';
import PlusDesignOne from './PlusDesignOne';
import CurveEven from './CurveEven';
import CurveOdd from './CurveOdd';
import {data} from "../Data/Data.js"
export default function ChildComponent({index,childData}) {
    console.log(childData);
    console.log(index);
    const childLength = childData.child ? childData.child.length : 0;
  return (
    <div className='flex w-full bg-red-00'>
      
        <div className=' bg-red-00 gap-3 flex flex-col items-center justify-center'>
          {childData.curve && index%2===0 ? (
            <CurveEven  title={childData.title}/>
          ) : (<CurveOdd title={childData.title}/>)}

{childData.child && (
        <div style={{ marginLeft: '50px' }} className='flex mt-[32px] mr-[3rem]'>
          {childData.child.map((childNode, index) => (
            <TreeComponent key={index} index={index} node={childNode} lastIndex={childLength-1}/>
          ))}
        </div>
      )}
        </div>
        </div>
  )
}
