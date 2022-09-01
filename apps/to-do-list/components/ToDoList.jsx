import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import List from './List';
import { useEffect, useState, useLayoutEffect } from 'react';
import axios from "axios"

const ToDoList = () => {
    const [data, setData] = useState()
    const [runEffect, setRunEffect] = useState(false)
    const [content, setContent] = useState()

useLayoutEffect(() => {
    axios.get("/api/list")
     .then((response) => {
      const res = response.data
      setData(res)})
},[runEffect])


let done = 0
let notDone = 0
for (let index = 0; index < data?.data.length; index++) {
    if(data?.data[index].complete === 1){
      done++
    }else{
        notDone++
    }
}

const handleContent = (e) => {
  setContent(e.target.value)
}
const handleSubmit = () => {
    const data = {
        content,
        complete: 0
    }
        axios.post('/api/list', data)
        .then((response) => {
          console.log(response)
    })
    .catch((e) => { console.log(e)}
    )

    axios.get("/api/list")
    .then((response) => {
     const res = response.data
     setData(res)})
    setContent('')
}
const handleDelete = () => { 
        let execute = confirm("er du sikker på du vil slette alle færdige opgaver")

        if(execute)
        { 
        axios.delete('/api/list', { data: { complete: 1 } })
        .then((response) => {
        console.log(response)
        })
        .catch((e) => { console.log(e)}
         )

    axios.get("/api/list")
    .then((response) => {
     const res = response.data
     setData(res)})
         }else{
            return
         }
        }

    return ( 
        <section className="to_do_list_container">
         <div className="top_bar">
            <div className="tasks_container">
                <div className="tasks_count">Tasks <div className="white_dot">{notDone}</div></div>
                <div className="tasks_done">Tasks Done <div className="white_dot">{done}</div></div>
                <button onClick={handleDelete} className='tasks_delete'><DeleteIcon className='trash' />Task</button>
            </div>
         </div>
         <section className="mid_container">
          {data?.data.map((item, idx) => {
            
            return (
                <List key={idx} runEffect={setRunEffect} id={item.id} content={item.content} completed={item.complete}/>
            )
          })}
         </section>
         <div className="bottom_bar">
            <input className="add_task" value={content} onChange={handleContent} placeholder='Add a Task' type="text" />
            <div className='add' onClick={handleSubmit}><AddIcon className='cross'/></div>
         </div>
        </section>
     );
}
 
export default ToDoList;