/* eslint-disable no-undef */
import './To-do.css'
// import { useState } from 'react';
// import { uuid } from 'uuidv4';
import { v4 as uuid } from 'uuid';
let value;
let setValue;
let ob1
const Form=(props)=>{
    value=props.value
    setValue=props.setValue
    // const [value,setValue]=useState('');
    // must insert event to work the input
    const handleChange=event=>{setValue(event.target.value)}
    
    // the method to inserte value to arry state or object
    const add=(event)=>{
        if(props.button==='Update'){
            console.log('Update',props.myId)
            props.list.find(obj=>obj.id===props.myId).value=value
            props.setButton('Add')
        }
        // console.log(value);
        else if(props.button==='Add'){
            ob1={'id':uuid(),'value':value};
            props.methodList(lastArr=>{
                return [...lastArr,ob1]
            })
        }
        event.preventDefault()
       
        
        setValue('')
       
    }
    return <div className='myRow'>
        <h3>{value}</h3>
        <div className="myRow1  ">
            <input type="text" className='p-3 col-sm-9 col-9 form-control' id='value' name='value' onChange={handleChange} value={value} ></input>
            
            <button className="p-3 btn bg-dark col-sm-3 col-3" onClick={add} >{props.button}</button>
            
            
        </div>
        
        </div>
}
export default Form