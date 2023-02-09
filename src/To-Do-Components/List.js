import './To-do.css'

const List=(props)=>{
    // const methodUpdate=(id,event)=>{
    //     // eslint-disable-next-line no-unused-expressions
    //     // event.preventdefault();
    //     console.log(id)
    //     console.log(temp)
    // }
    const handleUpdate=(id)=>{
        console.log('id',id)
        let temp
        temp=props.arrlist.find(obj=>obj.id===id)
        console.log('temp is',temp)
        props.setValue(temp.value)
        props.setButton('Update')
        props.setmyId(temp.id)

    }
    const handleDelete=(id)=>{
        console.log('delete')
        // const dobj= props.arrlist.filter(obj=>obj.id===id)
        props.setArrlist(props.arrlist.filter(obj=>{ return obj.id!==id}))
        // console.log('dobj is',dobj)
    }
    return <li className="list-group-item item ">
        <div className='col-sm-8 text-li'>{props.name}</div> 
        <div className='col-sm- icons'>
            
           <i className="icon-edit text-primary" onClick={()=>handleUpdate(props.id)} ></i>
            <i className="icon-trash  text-danger" onClick={()=>handleDelete(props.id)} ></i>
        </div>
       
    </li>
}
export default List