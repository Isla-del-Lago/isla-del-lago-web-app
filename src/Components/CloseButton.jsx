import { Link } from "react-router-dom";
import closeIcon from '../Assets/close.svg'
import './CloseButton.css'
export default function CloseButton(props) {
    const { path } = props
    return (
        <Link to={path} className='closeIcon-link'>
            <img src={closeIcon} alt={closeIcon} />
        </Link>
    )
}