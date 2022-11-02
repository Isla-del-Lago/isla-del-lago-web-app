import { useState } from 'react'
import ConsumptionsForms from '../Components/AddConsumptionsForms/ConsumptionsForms'
import SelectBillForm from '../Components/AddConsumptionsForms/SelectBillForm'
import CloseButton from '../Components/CloseButton'
import './AddConsumption.css'
export default function AddConsumption() {
    const [step, setStep] = useState(1)
    return (
        <>
            <div className="addConsumption">
                <div className="addConsumption-header">
                    {step > 1 && <CloseButton path={'/menu'} />}
                    <h1 className="addConsumption-header-title">Informacion de consumo</h1>
                </div>
                <div className="addConsumption-body">
                    <form action="" className="consumption-form">
                        {step === 1 && <SelectBillForm
                            onCancel={() => console.log('Cancelar')}
                            onContinue={() => setStep(2)}
                        />}
                        {step === 2 && <ConsumptionsForms
                            onGoBack={() => setStep(1)}
                            onSaveComsumptions={() => console.log('Guardar consumos')}
                        />}
                    </form>
                </div>
            </div>
        </>
    )
}