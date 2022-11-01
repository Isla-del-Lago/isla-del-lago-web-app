import ButtonsContainer from "./ButtonsContainer";

export default function SewerageInfoForm(props) {
    return (
        <>
            <div className="labels-section">
                <label htmlFor="">Alcantarillado ($)</label>
                <label htmlFor="AlcaCfr$" className="sublabel">Cargo fijo residencial</label>
                <input type="number" name="" id="AlcaCfr$" className="currency-input" />
                <label htmlFor="AlcaCrb$" className="sublabel">Consumo residencial básico</label>
                <input type="number" name="" id="AlcaCrb$" className="currency-input" />
                <label htmlFor="AlcaCrbs$" className="sublabel">Consumo residencial superior a básico</label>
                <input type="number" name="" id="AlcaCrsb$" className="currency-input" />
            </div>
            <ButtonsContainer
                textButton1='Regresar'
                textButton2='Guardar'
                onFirstOptionHandler={props.onGoBack}
                onSecondOptionHandler={props.onSaveBill}
            />
        </>
    )
}