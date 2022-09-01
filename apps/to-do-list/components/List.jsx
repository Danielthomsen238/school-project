import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import axios from 'axios';

const List = (props) => {
    const {content, completed, id, runEffect} = props
    const handleChecked = (e) => {
        const data = {
            id: e.target.id,
            complete: 1
        }
            axios.put('/api/list', data)
            .then((response) => {
              console.log(response)
        })
        .catch((e) => { console.log(e)}
        )
        runEffect(state => !state)
    }
    return ( 
        <div className="list_item">
           {completed ? <div className='checked_circle'><CheckCircleIcon  className='checked'/></div> : <RadioButtonUncheckedIcon id={id} onClick={handleChecked} className='unchecked'/>} 
            <p className='content'>{content}</p></div>
     );
}
 
export default List;