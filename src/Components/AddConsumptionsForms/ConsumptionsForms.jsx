import { useState } from "react";
import ButtonsContainer from "../ButtonsContainer";

export default function ConsumptionsForms(props) {
    const [step, setStep] = useState(0)
    const apartments = [
        "Apartamento 201",
        "Apartamento 202",
        "Apartamento 301",
        "Apartamento 302",
        "Apartamento 401",
        "Apartamento 402",
        "Apartamento 501",
        "Apartamento 502",
        "Local 1",
        "Local 2",
    ]
    const onContinue = () => {
        step < apartments.length ? setStep(step + 2) : setStep(step)
    }
    const onBack = () => {
        step > 0 ? setStep(step - 2) : setStep(step)
    }
    return (
        <>
            <div className="labels-section">
                {apartments.slice(step, step + 2).map((apartment, index) => (
                    <>
                        <label htmlFor={index}>{apartment}
                        </label>
                        <input type="number" name="" id={index} className="currency-input" />
                    </>
                ))
                }
            </div>
            <ButtonsContainer
                textButton1='Regresar'
                textButton2='Continuar'
                onFirstOptionHandler={step === 0 ? props.onGoBack : onBack}
                onSecondOptionHandler={step === apartments.length - 2 ? props.onSaveComsumptions : onContinue}
            />
        </>
    )
}