import { useState } from 'react'
import ButtonsContainer from '../Components/ButtonsContainer'
import ConsumptionsChart from '../Components/ConsultBill/ConsumptionsChart'
import ConsumptionsTable from '../Components/ConsultBill/ConsumptionsTable'
import data from '../Utils/data.json'
import './ConsultBill.css'
export default function ConsultBill(props) {

    if (!sessionStorage.AuthToken) {
        document.location = '/'
    }
    const [consulted, setConsulted] = useState(false)
    return (
        <>
            {!consulted && sessionStorage.AuthToken &&
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
                                    path={'/menu'}
                                    textButton1='Cancelar'
                                    textButton2='Buscar'
                                    onFirstOptionHandler={() => console.log('Cancelar')}
                                    onSecondOptionHandler={() => setConsulted(true)}
                                />
                            </form>
                        </div>
                    </div>
                </>
            }
            {consulted && sessionStorage.AuthToken &&
                <div className="chart-page">
                    <ConsumptionsChart
                        onGoBack={() => setConsulted(false)}
                        labels={['25/01/2023', '24/03/2023', '25/11/2022', '24/01/2023']}
                        values={[200, 100, 400, 0]}
                    />
                    <ConsumptionsTable />
                </div>
            }
        </>
    )
}