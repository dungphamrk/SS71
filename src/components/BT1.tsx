import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { decrease, increase, reset } from '../redux/reducer/countReducer';

export default function BT1() {
    const count =useSelector((state:any)=>state.count);
    console.log(count);
    
    const dispatch=useDispatch()
  return (
    <div>
        <h1>Count : {count}</h1>
        <button onClick={()=>dispatch(increase())}>Increase</button>
        <button onClick={()=>dispatch(decrease())}>Decrease</button>
        <button onClick={()=>dispatch(reset())} >Reset</button>
    </div>
  )
}
