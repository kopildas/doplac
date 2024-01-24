import React, { useState } from 'react'
import TreeComponent from './TreeComponent';
import PlusDesignOne from './PlusDesignOne';
import CurveEven from './CurveEven';
import CurveOdd from './CurveOdd';
import {data} from "../Data/Data.js"
export default function ChildComponent({index,childData}) {
  
    const childLength = childData.child ? childData.child.length : 0;
    const [even,setEven] = useState(false);
    const [odd,setOdd] = useState(false);
    const updateEven = () =>{
      setEven(true);
    }
    const updateOdd = () =>{
      setOdd(true);
    }

  return (
    <div className='flex flex-col w-full bg-red-00'>
      
        <div className=' bg-red-00 gap-3 flex flex-col items-center justify-center w-[428px] '>
          {childData.curve && index%2===0 ? (
            <CurveEven  title={childData.title}  updateEven={updateEven}/>
          ) : (<CurveOdd title={childData.title}  updateOdd={updateOdd}/>)}

        </div>
        {childData.child && even && (
        <div style={{ marginLeft: '50px' }} className='flex mt-[32px] mr-[3rem]'>
          {childData.child.map((childNode, index) => (
            <TreeComponent key={index} index={index} node={childNode} lastIndex={childLength-1}/>
          ))}
        </div>
      )}
{childData.child && odd && (
        <div style={{ marginLeft: '50px' }} className='flex mt-[32px] mr-[3rem]'>
          {childData.child.map((childNode, index) => (
            <TreeComponent key={index} index={index} node={childNode} lastIndex={childLength-1}/>
          ))}
        </div>
      )}
        </div>
  )
}
