import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
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
CloseButton.propTypes = {
    path: PropTypes.string
}