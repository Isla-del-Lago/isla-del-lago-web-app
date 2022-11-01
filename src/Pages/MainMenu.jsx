import './MainMenu.css'
import billIcon from '../Assets/bill_icon.png'
import createBillIcon from '../Assets/create_bill_icon.png'
import consumptionIcom from '../Assets/add_consumption.png'
import { Link } from 'react-router-dom'
export default function MainMenu() {
    return (
        <>
            <div className="mainMenu">
                <div className="mainMenu-header">
                    <h1 className="mainMenu-header-title">Bienvenido de nuevo "nombre de usuario"</h1>
                    <h3 className="mainMenu-header-subtitle">Selecciona la operacion que deseas realizar</h3>
                </div>
                <div className="mainMenu-body">
                    <div className="operations-container">
                        <Link to={'/create-bill'}>
                        <div className="operation">
                            <img src={createBillIcon} alt="" />
                            <p>Crear factura</p>
                        </div>
                        </Link>
                        <Link to={'/add-consumption'}>
                        <div className="operation">
                            <img src={consumptionIcom} alt="" />
                            <p>Añadir consumos</p>
                        </div>
                        </Link>
                        <Link to={'/consult-bill'}>
                        <div className="operation">
                            <img src={billIcon} alt="" />
                            <p>Consultar facturas</p>
                        </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}