import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './Alert.css'
export default function Alert(props) {
    const { image, title, subtitle, footer, redirect, path } = props
    return (
        <>
            <div className="alert-background">
                <div className="alert">
                    <div className="alert-body">
                        <img src={image} alt={image} />
                        <h1 className="alert-title">{title}</h1>
                        <h2 className="alert-subtitle">{subtitle}</h2>
                    </div>
                    {redirect
                        ?
                        <div className="alert-footer">
                            <Link to={path} >
                                <h1 className="alert-footer-text" >{footer}</h1>
                            </Link>
                        </div>
                        :
                        <div className="alert-footer" onClick={() => props.onCloseAlert()}>
                            <h1 className="alert-footer-text" >{footer}</h1>
                        </div>}
                </div>
            </div>
        </>
    )
}

Alert.propTypes = {
    image: PropTypes.any.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    footer: PropTypes.string.isRequired,
    redirect: PropTypes.bool,
    path: PropTypes.string,
    onCloseAlert: PropTypes.func
}