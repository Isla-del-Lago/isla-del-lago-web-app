import './Login.css'
import loginImage from '../Assets/Login.png'
import { useState } from 'react'
import Loader from '../Components/Loader'
import Alert from '../Components/Alert'
import warningIcon from '../Assets/warning.svg';
export default function Login() {
    const [isLoading, setIsLoading] = useState(false)
    const [loginAlert, setLoginAlert] = useState(false)

    const submitHandler = (event) => {
        setIsLoading(true)
        const userData = {
            email: event.target[0].value,
            password: event.target[1].value
        }
        event.preventDefault()
        fetch('https://isla-del-lago-app-develop.herokuapp.com/isla-del-lago/api/v1/security/login',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            })
            .then((response) => response.json())
            .then(data => {
                setIsLoading(false)
                if (data.auth_token) {
                    sessionStorage.setItem('AuthToken', `Bearer ${data.auth_token}`)
                    sessionStorage.setItem('ExpirationDate', data.expiration_date)
                    sessionStorage.setItem('UserId', data.user_id)
                    document.location = '/menu'
                }
                else {
                    setLoginAlert(true)
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            })
    }
    return (
        <>
            {isLoading && <Loader />}
            {loginAlert && <Alert
                image={warningIcon}
                title='Ooops!'
                subtitle='Ingresaste mal tus datos, por favor intenta de nuevo.'
                footer='Intentar de nuevo'
                onCloseAlert={() => setLoginAlert(false)}
            />}
            <div className="login">
                <div className="login-header">
                    <h1 className="login-header-title">Bienvenido</h1>
                    <h3 className="login-header-subtitle">Por favor ingresa para utilizar la aplicacion</h3>
                </div>
                <div className="login-body">
                    <div className="image-container">
                        <img className="login-image" src={loginImage} alt="" />
                    </div>
                    <form className="login-form" onSubmit={submitHandler}>
                        <input type="text" placeholder="Correo" required />
                        <input type="password" placeholder="Contraseña" required />
                        <p>¿Olvidaste tu contraseña?</p>
                        <button type="submit" className="button-form">
                            Ingresar
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}