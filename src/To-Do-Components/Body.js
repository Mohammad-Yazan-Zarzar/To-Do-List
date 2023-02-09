import './To-do.css'
import Form from './Form'
import { useState } from 'react'
import List from './List'
// const handleUpdate=(id)=>{
//     console.log(id)
    
// }
const Body=()=>{
    let initial=[];


    const [arrlist,setArrlist]=useState(initial);
    const [toDoName,settoDoName]=useState('yazan');
    const [updateName,setUpdate]=useState('');
    const [value,setValue]=useState('');
    const [button,setButton]=useState('Add');
    const [myId,setmyId]=useState(0);

    // const print=(arrlist)=>{
    //     arrlist.map((item)=>{return `<h3> ${item}<h3/>`})

    // }
    return <div className='container Body '>
        <h2  >To-Do-List</h2>
        <Form name={toDoName} list={arrlist} methodList={setArrlist} methodName={settoDoName} value={value} setValue={setValue} button={button} setButton={setButton} myId={myId} setmyId={setmyId} /> 
        <ul className='list-group'>
            {arrlist.map((item)=>
                // eslint-disable-next-line no-undef
                // console.log(item['id']);
                <List key={item.id}  name={item.value} id={item.id}  updateName={updateName} setUpdate={setUpdate} value={value} setValue={setValue} arrlist={arrlist}  button={button} setButton={setButton} myId={myId} setmyId={setmyId} setArrlist={setArrlist} /> 
            )}
        
        


        </ul>
    </div>
}
export default Body