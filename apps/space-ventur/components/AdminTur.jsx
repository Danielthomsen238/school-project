import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrashCan} from "@fortawesome/free-solid-svg-icons";

const AdminTur = (props) => {
  
    return ( 
       <>
     
            <tr>
            <td>{props.id}</td>
            <td>{props.title}</td>
            <td>{props.content1}</td>
            <td>{props.content2}</td>
            <td>{props.content3}</td>
            <td>{props.flyvetid}</td>
            <td>{props.destination}</td>
            <td>{props.afstand}</td>
            <td>{props.pris}</td>
            <td>{props.image1}</td>
            <td>{props.image2}</td>
            <div className="delete_icon"><FontAwesomeIcon onClick={props.setIndex} className="admin_icon" icon={faPencil} />
            <FontAwesomeIcon onClick={props.delete} className="admin_icon" icon={faTrashCan} /></div>
            </tr>
       </>
     );
}
 
export default AdminTur;