import './Login.css'
import loginImage from '../Assets/Login.png'
import { Link } from 'react-router-dom'
export default function Login() {
    return (
        <>
            <div className="login">
                <div className="login-header">
                    <h1 className="login-header-title">Bienvenido</h1>
                    <h3 className="login-header-subtitle">Por favor ingresa para utilizar la aplicacion</h3>
                </div>
                <div className="login-body">
                    <div className="image-container">
                        <img className="login-image" src={loginImage} alt="" />
                    </div>
                    <form className="login-form" action="">
                        <input type="text" placeholder="Correo" />
                        <input type="text" placeholder="Contraseña" />
                        <p>¿Olvidaste tu contraseña?</p>
                        <button className="button-form">
                            <Link to={'/menu'} >
                                Ingresar
                            </Link>
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}