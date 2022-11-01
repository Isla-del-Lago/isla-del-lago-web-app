import { useState } from 'react'
import ConsumptionsForms from '../Components/AddConsumptionsForms/ConsumptionsForms'
import SelectBillForm from '../Components/AddConsumptionsForms/SelectBillForm'
import './AddConsumption.css'
export default function AddConsumption() {
    const [step, setStep] = useState(1)
    return (
        <>
            <div className="addConsumption">
                <div className="addConsumption-header">
                    <h1 className="addConsumption-header-title">Informacion de consumo</h1>
                </div>
                <div className="addConsumption-body">
                    <form action="" className="consumption-form">
                        {step === 1 && <SelectBillForm
                            onCancel={() => console.log('Cancel')}
                            onContinue={() => setStep(2)}
                        />}
                        {step === 2 && <ConsumptionsForms
                            onGoBack={() => setStep(1)}
                            onSaveComsumptions={() => console.log('Guardar consumos')}
                        />}
                        {/*
                        {step === 3 && <AqueductInfoForm
                            onGoBack={() => setStep(2)}
                            onContinue={() => setStep(4)}
                        />}
                        {step === 4 && <SewerageInfoForm
                            onGoBack={() => setStep(3)}
                            onSaveBill={() => console.log('Guardar')}
                        />} */}
                    </form>
                </div>
            </div>
        </>
    )
}