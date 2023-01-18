import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './ButtonsContainer.css'
export default function ButtonsContainer(props) {
    const { textButton1, textButton2, path } = props
    return (
        <>
            <div className="buttons-container">
                {textButton1 === 'Cancelar' ?
                    <button type="button" className="button-form" >
                        <Link to={path} >
                            {textButton1}
                        </Link>
                    </button>
                    :
                    <button type="button" className="button-form" onClick={props.onFirstOptionHandler}>{textButton1}</button>}
                <button type="submit" className="button-form" >{textButton2}</button>
            </div>
        </>
    )
}
ButtonsContainer.propTypes = {
    textButton1: PropTypes.string.isRequired,
    textButton2: PropTypes.string.isRequired,
    path: PropTypes.string
}