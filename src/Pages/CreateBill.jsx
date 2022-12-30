import { useEffect, useState } from 'react';
import BillInfoForm from '../Components/CreateBillForms/BillInfoForm';
import ConsumptionsInfoForm from '../Components/CreateBillForms/ConsumptionsInfoForm';
import AqueductInfoForm from '../Components/CreateBillForms/AqueductInfoForm';
import SewerageInfoForm from '../Components/CreateBillForms/SewerageInfoForm';

import successIcon from '../Assets/success.svg';
import errorIcon from '../Assets/error.svg';

import { closeSessionHandler, verifyAuth } from '../Utils/GeneralFunctions';

import CloseButton from '../Components/CloseButton';
import Alert from '../Components/Alert';
import Loader from '../Components/Loader';

import './CreateBill.css';

export default function CreateBill() {
    verifyAuth(2)

    const [step, setStep] = useState(1);
    const [lastStep, setLastStep] = useState(false)
    const [billData, setBillData] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [processAlert, setProcessAlert] = useState(0);

    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [discounts, setDiscounts] = useState()
    const [cleaning, setCleaning] = useState()
    const [crbm3, setCrbm3] = useState()
    const [crsbm3, setCrsbm3] = useState()
    const [acueCfr$, setAcueCfr$] = useState()
    const [acueCrb$, setAcueCrb$] = useState()
    const [acueCrsb$, setAcueCrsb$] = useState()
    const [alcaCfr$, setAlcaCfr$] = useState()
    const [alcaCrb$, setAlcaCrb$] = useState()
    const [alcaCrsb$, setAlcaCrsb$] = useState()

    const changeValuesHandler = (event) => {
        switch (event.target.id) {
            case "startDate":
                setStartDate(event.target.value)
                break;
            case "endDate":
                setEndDate(event.target.value)
                break;
            case "discounts":
                setDiscounts(event.target.value)
                break;
            case "cleaning":
                setCleaning(event.target.value)
                break;
            case "crbm3":
                setCrbm3(event.target.value)
                break;
            case "crsbm3":
                setCrsbm3(event.target.value)
                break;
            case "AcueCfr$":
                setAcueCfr$(event.target.value)
                break;
            case "AcueCrb$":
                setAcueCrb$(event.target.value)
                break;
            case "AcueCrsb$":
                setAcueCrsb$(event.target.value)
                break;
            case "AlcaCfr$":
                setAlcaCfr$(event.target.value)
                break;
            case "AlcaCrb$":
                setAlcaCrb$(event.target.value)
                break;
            case "AlcaCrsb$":
                setAlcaCrsb$(event.target.value)
                break;
            default:
                break;
        }
    }
    const stepOneCompleted = (event) => {
        event.preventDefault();
        setLastStep(false)
        setBillData({
            ...billData,
            start_date: event.target[0].value,
            end_date: event.target[1].value,
            discounts: parseFloat(parseFloat(event.target[2].value).toFixed(2)),
            cleaning: parseFloat(parseFloat(event.target[3].value).toFixed(2)),
        });
        setStep(2);
    };
    const stepTwoCompleted = (event) => {
        event.preventDefault();
        setLastStep(false)
        setBillData({
            ...billData,
            residential_basic_cubic_meters: parseFloat(
                parseFloat(event.target[0].value).toFixed(2)
            ),
            residential_basic_superior_cubic_meters: parseFloat(
                parseFloat(event.target[1].value).toFixed(2)
            ),
        });
        setStep(3);
    };
    const stepThreeCompleted = (event) => {
        setLastStep(false)
        event.preventDefault();
        setBillData({
            ...billData,
            residential_fixed_aqueduct: parseFloat(
                parseFloat(event.target[0].value).toFixed(2)
            ),
            residential_basic_aqueduct: parseFloat(
                parseFloat(event.target[1].value).toFixed(2)
            ),
            residential_basic_superior_aqueduct: parseFloat(
                parseFloat(event.target[2].value).toFixed(2)
            ),
        });
        setStep(4);
    };

    const stepFourCompleted = (event) => {
        setLastStep(true)
        event.preventDefault();
        setBillData({
            ...billData,
            residential_fixed_sewerage: parseFloat(
                parseFloat(event.target[0].value).toFixed(2)
            ),
            residential_basic_sewerage: parseFloat(
                parseFloat(event.target[1].value).toFixed(2)
            ),
            residential_basic_superior_sewerage: parseFloat(
                parseFloat(event.target[2].value).toFixed(2)
            ),
        });
    };
    useEffect(() => {
        setBillData(billData);
        if (billData.residential_basic_superior_sewerage && lastStep) {
            createBillRequest();
        }
    }, [billData]);
    const createBillRequest = () => {
        setIsLoading(true)
        fetch('https://isla-del-lago-app-develop.herokuapp.com/isla-del-lago/api/v1/bill',
            {
                method: 'POST',
                headers: {
                    'user-id': sessionStorage.getItem('UserId'),
                    'Authorization': sessionStorage.getItem('AuthToken'),
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(billData)
            })
            .then((response) => {
                if (response.status === 401) {
                    closeSessionHandler()
                }
                return response.json()
            })
            .then(data => {
                setIsLoading(false)
                if (data.bill_id) {
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
                    subtitle='La factura se guardó exitosamente.'
                    footer='Continuar'
                    redirect={true}
                    path="/add-consumption"
                    onCloseAlert={() => { }}
                />
            )}
            {processAlert === 2 && (
                <Alert
                    image={errorIcon}
                    title='Ooops!'
                    subtitle='Hubo un problema guardando la factura, por favor intenta de nuevo.'
                    footer='Intentar de nuevo'
                    redirect={false}
                    onCloseAlert={() => {
                        setStep(1)
                        setProcessAlert(0)
                        setIsLoading(false)
                    }}
                />
            )}
            {verifyAuth(2) && (
                <div className='createBill'>
                    <div className='createBill-header'>
                        {step > 1 && <CloseButton path={'/menu'} />}
                        <h1 className='createBill-header-title'>
                            Informacion de la factura
                        </h1>
                    </div>
                    <div className='createBill-body'>
                        {step === 1 && (
                            <BillInfoForm
                                onCancel={() => (document.location = '/menu')}
                                onContinue={stepOneCompleted}
                                startDate={startDate}
                                endDate={endDate}
                                discounts={discounts}
                                cleaning={cleaning}
                                onChangeValuesHandler={changeValuesHandler}
                            />
                        )}
                        {step === 2 && (
                            <ConsumptionsInfoForm
                                onGoBack={() => setStep(1)}
                                onContinue={stepTwoCompleted}
                                crbm3={crbm3}
                                crsbm3={crsbm3}
                                onChangeValuesHandler={changeValuesHandler}
                            />
                        )}
                        {step === 3 && (
                            <AqueductInfoForm
                                onGoBack={() => setStep(2)}
                                onContinue={stepThreeCompleted}
                                AcueCfr$={acueCfr$}
                                AcueCrb$={acueCrb$}
                                AcueCrsb$={acueCrsb$}
                                onChangeValuesHandler={changeValuesHandler}
                            />
                        )}
                        {step === 4 && (
                            <SewerageInfoForm
                                onGoBack={() => setStep(3)}
                                onSaveBill={stepFourCompleted}
                                AlcaCfr$={alcaCfr$}
                                AlcaCrb$={alcaCrb$}
                                AlcaCrsb$={alcaCrsb$}
                                onChangeValuesHandler={changeValuesHandler}
                            />
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
