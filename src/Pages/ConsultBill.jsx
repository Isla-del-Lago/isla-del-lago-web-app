import { useEffect, useState } from 'react'
import html2canvas from 'html2canvas';
import ButtonsContainer from '../Components/ButtonsContainer'
import ConsumptionsChart from '../Components/ConsultBill/ConsumptionsChart'
import ConsumptionsTable from '../Components/ConsultBill/ConsumptionsTable'
import ScreenShotPreview from '../Components/ConsultBill/ScreenShotPreview';

import errorIcon from '../Assets/error.svg';

import data from '../Utils/data.json'
import { closeSessionHandler, formatDate, verifyAuth } from '../Utils/GeneralFunctions'

import Alert from '../Components/Alert'
import Loader from '../Components/Loader'

import './ConsultBill.css'


export default function ConsultBill({verifyNumber}) {
    verifyAuth(verifyNumber)
    const [consulted, setConsulted] = useState(false)
    const [isLoading, setIsLoading] = useState(false);
    const [processAlert, setProcessAlert] = useState(0);
    const [screenShotTaked, setScreenShotTaked] = useState(false)
    const [listOfBills, setListOfBills] = useState([])

    const endDatesOfAllBills = []
    const [billDetails, setBillDetails] = useState({})

    const [endDateOfBillSelected, setEndDateOfBillSelected] = useState("")
    const [idOfBillSelected, setIdOfBillSelected] = useState("")
    const [idOfApartmentSelected, setIdOfApartmentSelected] = useState("apartamento_201")
    const [nameOfApartmentSelected, setNameOfApartmentSelected] = useState("Apartamento 201")

    const [values, setValues] = useState([])
    const [labels, setLabels] = useState([])
    const [screenShot, setScreenShot] = useState()
    const onGoBackHandler = () => {
        setConsulted(false)
        setValues([])
        setLabels([])
    }
    const onShareHandler = () => {
        setScreenShotTaked(true)
        html2canvas(document.querySelector("#resume"), {
            ignoreElements: function (element) {
                if (element.id === 'chartButton') {
                    return true;
                }
            },
            height: document.body.scrollHeight,
        }).then(canvas => {
            setScreenShot(canvas.toDataURL("image/png").replace("image/jpeg", "image/octet-stream"));
            //mostrar screenShot
            document.querySelector("#screenShot-container").appendChild(canvas)
            //mostrar screenShot

            //compartir via Wapp
            // a.href = `https://wa.me/send?text=Ya casi`
            //compartir via Wapp

        });
    }

    useEffect(() => {
        if (verifyAuth(verifyNumber)) {
            setIsLoading(true)
            fetch(`${process.env.REACT_APP_MS_BASE_URL}${process.env.REACT_APP_MS_BILL_PATH}`,
                {
                    method: 'GET',
                    headers: {
                        'user-id': sessionStorage.getItem('UserId'),
                        'Authorization': sessionStorage.getItem('AuthToken'),
                    },
                })
                .then((response) => {
                    if (response.status === 401) {
                        closeSessionHandler()
                    }
                    return response.json()
                })
                .then(data => {
                    setIsLoading(false)
                    if (data[0].bill_id && listOfBills.length < data.length) {
                        data.forEach(bill => {
                            listOfBills.unshift(
                                {
                                    fullDate: formatDate(bill.start_date) + " - " + formatDate(bill.end_date),
                                    endDate: formatDate(bill.end_date),
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
        }
    }, [])

    const consultBillHandler = (event) => {
        event.preventDefault()
        setIsLoading(true)
        fetch(`${process.env.REACT_APP_MS_BASE_URL}${process.env.REACT_APP_MS_CONSUMPTION_PATH}/details?bill_id=${idOfBillSelected}&apartment_id=${idOfApartmentSelected}`, {
            method: 'GET',
            headers: {
                'user-id': sessionStorage.getItem('UserId'),
                'Authorization': sessionStorage.getItem('AuthToken'),
            },
        })
            .then((response) => {
                if (response.status === 401) {
                    closeSessionHandler()
                }
                return response.json()
            })
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


        fetch(`${process.env.REACT_APP_MS_BASE_URL}${process.env.REACT_APP_MS_CONSUMPTION_PATH}/details/apartment/${idOfApartmentSelected}`, {
            method: 'GET',
            headers: {
                'user-id': sessionStorage.getItem('UserId'),
                'Authorization': sessionStorage.getItem('AuthToken'),
            },
        })
            .then((response) => {
                if (response.status === 401) {
                    closeSessionHandler()
                }
                return response.json()
            })
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
                            fullLabels.push(formatDate(bill.end_date))
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
            {!consulted && verifyAuth(verifyNumber) &&
                <>
                    <div className="consultBill">
                        <div className="consultBill-header">
                            <h1 className="consultBill-header-title">Información de factura</h1>
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
                                            <option selected={parseInt(idOfBillSelected) === bill.bill_id ? "selected" : ""} key={index} value={[bill.fullDate, bill.endDate, bill.bill_id]}>{bill.fullDate}</option>
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
                consulted && verifyAuth(verifyNumber) &&
                <div className="chart-page" id="resume">

                    {screenShotTaked &&
                        <ScreenShotPreview
                            screenShot={screenShot}
                            nameOfApartmentSelected={nameOfApartmentSelected}
                            endDateOfBillSelected={endDateOfBillSelected}
                            onGoBack={() => {
                                setScreenShotTaked(false)
                            }}
                        />}
                    <ConsumptionsChart
                        endDateOfBillSelected={endDateOfBillSelected}
                        billDetails={billDetails}
                        onGoBack={onGoBackHandler}
                        onShare={onShareHandler}
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