import { useEffect, useState } from 'react'
import Alert from '../Components/Alert'
import ButtonsContainer from '../Components/ButtonsContainer'
import ConsumptionsChart from '../Components/ConsultBill/ConsumptionsChart'
import ConsumptionsTable from '../Components/ConsultBill/ConsumptionsTable'
import errorIcon from '../Assets/error.svg';
import Loader from '../Components/Loader'
import data from '../Utils/data.json'
import './ConsultBill.css'

export default function ConsultBill(props) {
    if (!sessionStorage.AuthToken) {
        document.location = '/'
    }
    const [consulted, setConsulted] = useState(false)
    const [isLoading, setIsLoading] = useState(false);
    const [processAlert, setProcessAlert] = useState(0);
    const [listOfBills, setListOfBills] = useState([])

    const [endDatesOfAllBills, setEndDatesOfAllBills] = useState([])
    const [billDetails, setBillDetails] = useState({})

    const [endDateOfBillSelected, setEndDateOfBillSelected] = useState("")
    const [idOfBillSelected, setIdOfBillSelected] = useState("")
    const [idOfApartmentSelected, setIdOfApartmentSelected] = useState("apartamento_201")
    const [nameOfApartmentSelected, setNameOfApartmentSelected] = useState("Apartamento 201")

    const [values, setValues] = useState([])
    const [labels, setLabels] = useState([])
    const onGoBackHandler = () => {
        setConsulted(false)
        setValues([])
        setLabels([])
    }

    useEffect(() => {
        setIsLoading(true)
        fetch('https://isla-del-lago-app-develop.herokuapp.com/isla-del-lago/api/v1/bill',
            {
                method: 'GET',
                headers: {
                    'user-id': sessionStorage.getItem('UserId'),
                    'Authorization': sessionStorage.getItem('AuthToken'),
                },
            })
            .then((response) => response.json())
            .then(data => {
                setIsLoading(false)
                if (data[0].bill_id && listOfBills.length < data.length) {
                    data.forEach(bill => {
                        listOfBills.unshift(
                            {
                                fullDate: bill.start_date + " / " + bill.end_date,
                                endDate: bill.end_date,
                                bill_id: parseInt(bill.bill_id)
                            }
                        )
                        endDatesOfAllBills.unshift(bill.end_date)
                    });
                    setListOfBills(listOfBills)
                    setEndDateOfBillSelected(listOfBills[0].endDate)
                    setIdOfBillSelected(listOfBills[0].bill_id)
                }
                else if (!data[0].bill_id) {
                    setProcessAlert(2)
                }
            })
            .catch((error) => {
                setIsLoading(false)
                setProcessAlert(2)
            })
    }, [])

    const consultBillHandler = (event) => {
        event.preventDefault()
        setIsLoading(true)
        fetch(`https://isla-del-lago-app-develop.herokuapp.com/isla-del-lago/api/v1/consumption/details?bill_id=${idOfBillSelected}&apartment_id=${idOfApartmentSelected}`, {
            method: 'GET',
            headers: {
                'user-id': sessionStorage.getItem('UserId'),
                'Authorization': sessionStorage.getItem('AuthToken'),
            },
        }).then((response) => response.json())
            .then(data => {
                if (data.total >= 0) {
                    setIsLoading(false)
                    setBillDetails(data)
                }
                else if (!data.total) {
                    setProcessAlert(3)
                }
            })
            .catch((error) => {
                setIsLoading(false)
                setProcessAlert(3)
            })


        fetch(`https://isla-del-lago-app-develop.herokuapp.com/isla-del-lago/api/v1/consumption/details/apartment/${idOfApartmentSelected}`, {
            method: 'GET',
            headers: {
                'user-id': sessionStorage.getItem('UserId'),
                'Authorization': sessionStorage.getItem('AuthToken'),
            },
        }).then((response) => response.json())
            .then(data => {
                let fullValues = []
                let fullLabels = []
                setIsLoading(false)
                if (data[0].bill_id) {
                    data.forEach(bill => {
                        if (values.length < data.length) {
                            fullValues.push(bill.consumption_detail.total)
                        }
                        if (labels.length < data.length) {
                            fullLabels.push(bill.end_date)
                        }
                    });
                    setValues(fullValues)
                    setLabels(fullLabels)
                }
                else if (data[0].bill_id) {
                    setProcessAlert(3)
                }
            })
            .catch((error) => {
                setIsLoading(false)
                setProcessAlert(3)
            })
        setConsulted(true)
    }

    return (
        <>
            {isLoading && <Loader />}
            {processAlert === 2 && (
                <Alert
                    image={errorIcon}
                    title='Ooops!'
                    subtitle='Hubo un problema cargando las facturas, por favor intenta de nuevo.'
                    footer='Intentar de nuevo'
                    redirect={true}
                    path="/menu"
                    onCloseAlert={() => { }}
                />
            )}
            {processAlert === 3 && (
                <Alert
                    image={errorIcon}
                    title='Ooops!'
                    subtitle='Hubo un problema cargando la información, por favor intenta de nuevo.'
                    footer='Intentar de nuevo'
                    redirect={false}
                    onCloseAlert={() => {
                        setProcessAlert(0)
                        setConsulted(false)
                    }}
                />
            )}
            {!consulted && sessionStorage.AuthToken &&
                <>
                    <div className="consultBill">
                        <div className="consultBill-header">
                            <h1 className="consultBill-header-title">Informacion de la factura</h1>
                        </div>
                        <div className="consultBill-body">
                            <form onSubmit={consultBillHandler} className="bill-form">
                                <div className="labels-section">
                                    <label htmlFor="bills">Selecciona una factura</label>
                                    <select name="bills" onChange={(event) => {
                                        setEndDateOfBillSelected(event.target.value.split(",")[1]);
                                        setIdOfBillSelected(event.target.value.split(",")[2])
                                    }}
                                        id="bills" className="bill-selecter">
                                        {listOfBills.map((bill, index) => (
                                            <option selected={idOfBillSelected == bill.bill_id ? "selected" : ""} key={index} value={[bill.fullDate, bill.endDate, bill.bill_id]}>{bill.fullDate}</option>
                                        ))}
                                    </select>
                                    <label htmlFor="apartments">Selecciona un apartamento - local</label>
                                    <select name="apartments" onChange={(event) => {
                                        setIdOfApartmentSelected(event.target.value.split(",")[0])
                                        setNameOfApartmentSelected(event.target.value.split(",")[1])
                                    }}
                                        id="apartments" className="bill-selecter">
                                        {data.apartments.map((apartment, index) => (
                                            <option selected={nameOfApartmentSelected === apartment.name ? "selected" : ""} key={index} value={[apartment.id, apartment.name]}>{apartment.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <ButtonsContainer
                                    path={'/menu'}
                                    textButton1='Cancelar'
                                    textButton2='Buscar'
                                />
                            </form>
                        </div>
                    </div>
                </>
            }
            {
                consulted && sessionStorage.AuthToken &&
                <div className="chart-page">
                    <ConsumptionsChart
                        endDateOfBillSelected={endDateOfBillSelected}
                        billDetails={billDetails}
                        onGoBack={onGoBackHandler}
                        fullLabels={labels}
                        fullValues={values}
                    />
                    <ConsumptionsTable
                        nameOfApartmentSelected={nameOfApartmentSelected}
                        billDetails={billDetails}
                    />
                </div>
            }
        </>
    )
}