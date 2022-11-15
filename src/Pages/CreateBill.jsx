import { useEffect, useState } from 'react';
import Alert from '../Components/Alert';
import successIcon from '../Assets/success.svg';
import errorIcon from '../Assets/error.svg';
import CloseButton from '../Components/CloseButton';
import AqueductInfoForm from '../Components/CreateBillForms/AqueductInfoForm';
import BillInfoForm from '../Components/CreateBillForms/BillInfoForm';
import ConsumptionsInfoForm from '../Components/CreateBillForms/ConsumptionsInfoForm';
import SewerageInfoForm from '../Components/CreateBillForms/SewerageInfoForm';
import './CreateBill.css';
import Loader from '../Components/Loader';
export default function CreateBill() {
    const [step, setStep] = useState(1);
    const [billData, setBillData] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [loginAlert, setLoginAlert] = useState(0);

    if (!sessionStorage.AuthToken) {
        document.location = '/';
    }
    const stepOneCompleted = (event) => {
        event.preventDefault();
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
        if (billData.residential_basic_superior_sewerage) {
            createBillRequest();
        }
    });
    const createBillRequest = () => {
        console.log(billData);
        // setIsLoading(true)
        // fetch('https://isla-del-lago-app-develop.herokuapp.com/isla-del-lago/api/v1/bill',
        //     {
        //         method:'POST',
        //         headers: {
        //             'user-id': sessionStorage.getItem('UserId'),
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify(billData)
        //     })
        //     .then((response) => response.json())
        //     .then(data => {
        //         setIsLoading(false)
        //         if (data) {

        //             setLoginAlert(1)
        //         }
        //         else {
        //             setLoginAlert(2)
        //         }
        //     })
        //     .catch((error) => {
        //         console.error('Error:', error);
        //     })
    };
    return (
        <>
            {isLoading && <Loader />}
            {loginAlert === 1 && (
                <Alert
                    image={successIcon}
                    title='Yayy!'
                    subtitle='La factura se guardó exitosamente.'
                    footer='Continuar'
                    onCloseAlert={() =>
                        (document.location = '/add-consumption')
                    }
                />
            )}
            {loginAlert === 2 && (
                <Alert
                    image={errorIcon}
                    title='Ooops!'
                    subtitle='Hubo un problema guardando la factura, por favor intenta de nuevo.'
                    footer='Intentar de nuevo'
                    onCloseAlert={() => (document.location = '/create-bill')}
                />
            )}
            {sessionStorage.AuthToken && (
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
                            />
                        )}
                        {step === 2 && (
                            <ConsumptionsInfoForm
                                onGoBack={() => setStep(1)}
                                onContinue={stepTwoCompleted}
                            />
                        )}
                        {step === 3 && (
                            <AqueductInfoForm
                                onGoBack={() => setStep(2)}
                                onContinue={stepThreeCompleted}
                            />
                        )}
                        {step === 4 && (
                            <SewerageInfoForm
                                onGoBack={() => setStep(3)}
                                onSaveBill={stepFourCompleted}
                            />
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
