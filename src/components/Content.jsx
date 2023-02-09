/* eslint-disable no-unused-vars */
import { useState } from "react"
import '../App.css'
const Content=()=>{
    const[number,setNumber]=useState(0);

    const increment=()=>{
        setNumber(number+1);
    }
    const decrement=()=>{
        setNumber(number-1);
    }
    const reset=()=>{
        setNumber(0);
    }

    return <div className="cc">
        <h2> Content Work </h2>
        <div className="center">number is {number}</div>
        <div className="row">
            <button className="col-12 col-sm bg-primary" onClick={increment}>increment</button>
            <button className="col-12 col-sm bg-danger" onClick={decrement}>decrement</button>
            <button className="col-12 col-sm bg-light" onClick={reset}>reset</button>
        
        </div>
    </div>
}
export default Content