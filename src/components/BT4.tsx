import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { changeModel } from '../redux/reducer/listModeReducer';

export default function BT4() {
    const model= useSelector((state:any)=>state.model)
    const dispatch=useDispatch();
    
  return (
    <div >
        <button onClick={()=>dispatch(changeModel())}>{model==='row'? 'list mode':'grid mode'}</button>
        <div>
          <ul style={{display:'flex',flexDirection:model,listStyle:'none',gap:'10px'}}>
            <li style={{height:'100px',width:'400px',backgroundColor:'red'}} >1</li>
            <li style={{height:'100px',width:'400px',backgroundColor:'red'}}>2</li>
            <li style={{height:'100px',width:'400px',backgroundColor:'red'}}>3</li>
            <li style={{height:'100px',width:'400px',backgroundColor:'red'}}>4</li>
            <li style={{height:'100px',width:'400px',backgroundColor:'red'}}>5</li>
          </ul>
        </div>
    </div>
  )
}
