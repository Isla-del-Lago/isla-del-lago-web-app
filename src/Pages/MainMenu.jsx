import { Link } from 'react-router-dom'
import jwt_decode from "jwt-decode";

import billIcon from '../Assets/bill_icon.svg'
import createBillIcon from '../Assets/create_bill_icon.svg'
import consumptionIcom from '../Assets/add_consumption.svg'
import userIcon from '../Assets/user_icon.svg'

import { closeSessionHandler, verifyAuth } from '../Utils/GeneralFunctions'

import CloseButton from '../Components/CloseButton'

import './MainMenu.css'
import BottomMenu from '../Components/BottomMenu';

export default function MainMenu() {
    verifyAuth(2)
    const authToken = sessionStorage.getItem("AuthToken").replace("Bearer ", "")
    const userName = jwt_decode(authToken)["user-name"]
    const userRole = jwt_decode(authToken)["role"]

    return (
        <>
            {verifyAuth(2) && <div className="mainMenu">
                <div className="mainMenu-header">
                    <div className="" onClick={closeSessionHandler}>
                        <CloseButton />
                    </div>
                    <h1 className="mainMenu-header-title">Bienvenido de nuevo</h1>
                    <h1 className="mainMenu-header-username">{userName}</h1>
                    <h3 className="mainMenu-header-subtitle">Selecciona la operacion que deseas realizar</h3>
                </div>
                <div className="mainMenu-body">
                    <div className="operations-container">
                        <Link to={'/add-consumption'}>
                            <div className="operation">
                                <img src={consumptionIcom} alt="" />
                                <p>Añadir consumos</p>
                            </div>
                        </Link>
                        <Link to={'/create-bill'}>
                            <div className="operation">
                                <img src={createBillIcon} alt="" />
                                <p>Crear factura</p>
                            </div>
                        </Link>
                        <Link to={'/consult-bill'}>
                            <div className="operation">
                                <img src={billIcon} alt="" />
                                <p>Obtener facturas</p>
                            </div>
                        </Link>
                        {userRole === 'ROOT' && <Link to={'/consult-bill'}>
                            <div className="operation">
                                <img src={userIcon} alt="" />
                                <p>Gestión de usuarios</p>
                            </div>
                        </Link>}
                    </div>
                </div>
            </div>}
            <BottomMenu />
        </>
    )
}