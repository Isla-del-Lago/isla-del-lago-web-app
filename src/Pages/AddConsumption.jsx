import { useEffect } from 'react'
import { useState } from 'react'
import ConsumptionsForms from '../Components/AddConsumptionsForms/ConsumptionsForms'
import SelectBillForm from '../Components/AddConsumptionsForms/SelectBillForm'
import successIcon from '../Assets/success.svg';
import errorIcon from '../Assets/error.svg';
import Alert from '../Components/Alert'
import CloseButton from '../Components/CloseButton'
import Loader from '../Components/Loader'
import data from '../Utils/data.json'
import './AddConsumption.css'
export default function AddConsumption() {

    if (!sessionStorage.AuthToken) {
        document.location = '/'
    }

    const [step, setStep] = useState(1)
    const [consumptionStep, setConsumptionStep] = useState(1)
    const [datesOfBillSelected, setDatesOfBillSelected] = useState("")
    const [idOfBillSelected, setIdOfBillSelected] = useState("")
    const [consumptionsData, setConsumptionsData] = useState({});
    const [formCompleted, setFormCompleted] = useState(false)
    const [isLoading, setIsLoading] = useState(false);
    const [processAlert, setProcessAlert] = useState(0);

    const [consumptionApto201, setConsumptionApto201] = useState()
    const [consumptionApto202, setConsumptionApto202] = useState()
    const [consumptionApto301, setConsumptionApto301] = useState()
    const [consumptionApto302, setConsumptionApto302] = useState()
    const [consumptionApto401, setConsumptionApto401] = useState()
    const [consumptionApto402, setConsumptionApto402] = useState()
    const [consumptionApto501, setConsumptionApto501] = useState()
    const [consumptionApto502, setConsumptionApto502] = useState()
    const [consumptionLocal1, setConsumptionLocal1] = useState()
    const [consumptionLocal2, setConsumptionLocal2] = useState()


    const changeValuesHandler = (event) => {
        setFormCompleted(!formCompleted)
        switch (event.target.id) {
            case "apto201":
                setConsumptionApto201(event.target.value)
                break;
            case "apto202":
                setConsumptionApto202(event.target.value)
                break;
            case "apto301":
                setConsumptionApto301(event.target.value)
                break;
            case "apto302":
                setConsumptionApto302(event.target.value)
                break;
            case "apto401":
                setConsumptionApto401(event.target.value)
                break;
            case "apto402":
                setConsumptionApto402(event.target.value)
                break;
            case "apto501":
                setConsumptionApto501(event.target.value)
                break;
            case "apto502":
                setConsumptionApto502(event.target.value)
                break;
            case "local1":
                setConsumptionLocal1(event.target.value)
                break;
            case "local2":
                setConsumptionLocal2(event.target.value)
                break;
            default:
                break;
        }
    }
    useEffect(() => {
        setConsumptionsData({
            consumptions: [
                {
                    apartment_id: "apartamento_201",
                    value: parseInt(consumptionApto201)
                },
                {
                    apartment_id: "apartamento_202",
                    value: parseInt(consumptionApto202)
                },
                {
                    apartment_id: "apartamento_301",
                    value: parseInt(consumptionApto301)
                },
                {
                    apartment_id: "apartamento_302",
                    value: parseInt(consumptionApto302)
                },
                {
                    apartment_id: "apartamento_401",
                    value: parseInt(consumptionApto401)
                },
                {
                    apartment_id: "apartamento_402",
                    value: parseInt(consumptionApto402)
                },
                {
                    apartment_id: "apartamento_501",
                    value: parseInt(consumptionApto501)
                },
                {
                    apartment_id: "apartamento_502",
                    value: parseInt(consumptionApto502)
                },
                {
                    apartment_id: "local_1",
                    value: parseInt(consumptionLocal1)
                },
                {
                    apartment_id: "local_2",
                    value: parseInt(consumptionLocal2)
                }
            ]
        })
    }, [formCompleted])

    const handleBillSelected = (event) => {
        event.preventDefault()
        setConsumptionStep(1)
        datesOfBillSelected != "" ?
            setStep(2) : setStep(1)
    }
    const handleNextConsumptionStep = (event) => {
        event.preventDefault()
        consumptionStep === 5
            ? addConsumptionsRequest()
            : consumptionStep < data.apartments.length ? setConsumptionStep(consumptionStep + 1) : setConsumptionStep(consumptionStep)
    }
    const handlePrevConsumptionStep = () => {
        consumptionStep > 1 ? setConsumptionStep(consumptionStep - 1) : setConsumptionStep(consumptionStep)
    }

    const addConsumptionsRequest = () => {
        console.log(consumptionsData);
        setDatesOfBillSelected("")
        setIdOfBillSelected("")
        setIsLoading(true)
        fetch(`https://isla-del-lago-app-develop.herokuapp.com/isla-del-lago/api/v1/consumption/?bill_id=${idOfBillSelected}`,
            {
                method: 'POST',
                headers: {
                    'user-id': sessionStorage.getItem('UserId'),
                    'Authorization': sessionStorage.getItem('AuthToken'),
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(consumptionsData)
            })
            .then((response) => {
                setIsLoading(false)
                console.log(response.status)
                if (response.status === 201) {
                    setProcessAlert(1)
                }
                else {
                    setProcessAlert(2)
                }
            })
            .catch((error) => {
                setIsLoading(false)
                setProcessAlert(2)
            })
    };
    return (
        <>
            {isLoading && <Loader />}
            {processAlert === 1 && (
                <Alert
                    image={successIcon}
                    title='Yayy!'
                    subtitle='Consumos guardados exitosamente.'
                    footer='Continuar'
                    onCloseAlert={() =>
                        (document.location = '/menu')
                    }
                />
            )}
            {processAlert === 2 && (
                <Alert
                    image={errorIcon}
                    title='Ooops!'
                    subtitle='Hubo un problema guardando los consumos, por favor intenta de nuevo.'
                    footer='Intentar de nuevo'
                    onCloseAlert={() => {
                        setStep(1)
                        setProcessAlert(0)
                        setIsLoading(false)
                    }}
                />
            )}
            {sessionStorage.AuthToken && <div className="addConsumption">
                <div className="addConsumption-header">
                    {step > 1 && <CloseButton path={'/menu'} />}
                    <h1 className="addConsumption-header-title">Informacion de consumo</h1>
                </div>
                <div className="addConsumption-body">
                    <form onSubmit={step === 1 ? handleBillSelected : handleNextConsumptionStep} className="consumption-form">
                        {step === 1 && <SelectBillForm
                            onSelectFirstBill={(bill) => {
                                setDatesOfBillSelected(bill.fullDate)
                                setIdOfBillSelected(bill.bill_id)
                            }}
                            onSetBillSelected={(event) => {
                                setDatesOfBillSelected(event.target.value.split(",")[0]);
                                setIdOfBillSelected(event.target.value.split(",")[1])
                            }}
                        />}
                        {step === 2 && <ConsumptionsForms
                            consumptionApto201={consumptionApto201}
                            consumptionApto202={consumptionApto202}
                            consumptionApto301={consumptionApto301}
                            consumptionApto302={consumptionApto302}
                            consumptionApto401={consumptionApto401}
                            consumptionApto402={consumptionApto402}
                            consumptionApto501={consumptionApto501}
                            consumptionApto502={consumptionApto502}
                            consumptionLocal1={consumptionLocal1}
                            consumptionLocal2={consumptionLocal2}
                            currentStep={consumptionStep}
                            billSelected={datesOfBillSelected}
                            onGoBack={consumptionStep === 1 ? () => {
                                setStep(1);
                                setDatesOfBillSelected("")
                                setIdOfBillSelected("")
                            } : handlePrevConsumptionStep}
                            onChangeValuesHandler={changeValuesHandler}
                        />}
                    </form>
                </div>
            </div>}
        </>
    )
}