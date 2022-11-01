import ButtonsContainer from '../Components/ButtonsContainer'
import data from '../Utils/data.json'
import './ConsultBill.css'
export default function ConsultBill(props) {
    return (
        <>
            <div className="consultBill">
                <div className="consultBill-header">
                    <h1 className="consultBill-header-title">Informacion de la factura</h1>
                </div>
                <div className="consultBill-body">
                    <form action="" className="bill-form">
                        <div className="labels-section">
                            <label htmlFor="bills">Selecciona una factura</label>
                            <select name="bills" id="bills" className="bill-selecter">
                                {data.bills.map((bill, index) => (
                                    <option key={index} value={bill}>{bill}</option>
                                ))}
                            </select>
                            <label htmlFor="apartments">Selecciona un apartamento - local</label>
                            <select name="apartments" id="apartments" className="bill-selecter">
                                {data.apartments.map((apartment, index) => (
                                    <option key={index} value={apartment}>{apartment}</option>
                                ))}
                            </select>
                        </div>
                        <ButtonsContainer
                            textButton1='Cancelar'
                            textButton2='Buscar'
                            onFirstOptionHandler={()=>console.log('Cancelar')}
                            onSecondOptionHandler={()=>console.log('Buscar')}
                        />
                    </form>
                </div>
            </div>
        </>
    )
}