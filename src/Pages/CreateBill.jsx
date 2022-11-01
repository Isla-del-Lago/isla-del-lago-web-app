import { useState } from 'react'
import AqueductInfoForm from '../Components/AqueductInfoForm'
import BillInfoForm from '../Components/BillInfoForm'
import ConsumptionsInfoForm from '../Components/ConsumptionsInfoForm'
import SewerageInfoForm from '../Components/SewerageInfoForm'
import './CreateBill.css'
export default function CreateBill() {
    const [step, setStep] = useState(1)
    return (
        <>
            <div className="createBill">
                <div className="createBill-header">
                    <h1 className="createBill-header-title">Informacion de la factura</h1>
                </div>
                <div className="createBill-body">
                    <form action="" className="bill-form">
                        {step === 1 && <BillInfoForm
                            onCancel={() => console.log('Cancel')}
                            onContinue={() => setStep(2)}
                        />}
                        {step === 2 && <ConsumptionsInfoForm
                            onGoBack={() => setStep(1)}
                            onContinue={() => setStep(3)}
                        />}
                        {step === 3 && <AqueductInfoForm
                            onGoBack={() => setStep(2)}
                            onContinue={() => setStep(4)}
                        />}
                        {step === 4 && <SewerageInfoForm
                            onGoBack={() => setStep(3)}
                            onSaveBill={() => console.log('Guardar')}
                        />}
                    </form>
                </div>
            </div>
        </>
    )
}