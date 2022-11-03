import { useState } from "react";
import data from '../../Utils/data.json'
import ButtonsContainer from "../ButtonsContainer";

export default function ConsumptionsForms(props) {
    const [step, setStep] = useState(0)


    const onContinue = () => {
        step < data.apartments.length ? setStep(step + 2) : setStep(step)

    }
    const onBack = () => {
        step > 0 ? setStep(step - 2) : setStep(step)

    }
    return (
        <>
            <div className="labels-section">
                <div className="date-selected">
                    <h1>Factura seleccionada:</h1>
                    <h1 >20/05/2022-20/06/2022</h1>
                </div>
                {data.apartments.slice(step, step + 2).map((apartment, index) => (
                    <div key={index}>
                        <label htmlFor={index}>{apartment}
                        </label>
                        <input type="number" name="" id={index} className="currency-input" />
                    </div>
                ))
                }
            </div>
            <ButtonsContainer
                textButton1='Regresar'
                textButton2={step === data.apartments.length - 2 ? 'Guardar' : 'Continuar'}
                onFirstOptionHandler={step === 0 ? props.onGoBack : onBack}
                onSecondOptionHandler={step === data.apartments.length - 2 ? props.onSaveComsumptions : onContinue}
            />
        </>
    )
}