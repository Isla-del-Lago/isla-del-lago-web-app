import { useState } from 'react'

import loginImage from '../Assets/Login.png'
import warningIcon from '../Assets/warning.svg';

import { closeSessionHandler, verifyAuth } from '../Utils/GeneralFunctions';

import Alert from '../Components/Alert'
import Loader from '../Components/Loader'

import './Login.css'

export default function Login() {
    verifyAuth(1)
    const [isLoading, setIsLoading] = useState(false)
    const [loginAlert, setLoginAlert] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const submitHandler = (event) => {
        event.preventDefault()
        setIsLoading(true)
        const userData = {
            email,
            password
        }
        fetch('https://isla-del-lago-app-develop.herokuapp.com/isla-del-lago/api/v1/security/login',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            })
            .then((response) => {
                if (response.status === 401) {
                    closeSessionHandler()
                }
                return response.json()
            })
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
                redirect={false}
                onCloseAlert={() => setLoginAlert(false)}
            />}
            {verifyAuth(1) && <div className="login">
                <div className="login-header">
                    <h1 className="login-header-title">Bienvenido</h1>
                    <h3 className="login-header-subtitle">Por favor ingresa para utilizar la aplicacion</h3>
                </div>
                <div className="login-body">
                    <div className="image-container">
                        <img className="login-image" src={loginImage} alt="" />
                    </div>
                    <form className="login-form" onSubmit={submitHandler} aria-label="form" >
                        <input onChange={(event) => setEmail(event.target.value)} type="text" placeholder="Correo" required />
                        <input onChange={(event) => setPassword(event.target.value)} type="password" placeholder="Contraseña" required />
                        <p>¿Olvidaste tu contraseña?</p>
                        <button type="submit" className="button-form">
                            Ingresar
                        </button>
                    </form>
                </div>
            </div>}
        </>
    )
}