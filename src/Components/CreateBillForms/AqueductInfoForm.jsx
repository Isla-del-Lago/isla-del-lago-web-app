import ButtonsContainer from "../ButtonsContainer";

export default function AqueductInfoForm(props) {
    return (
        <>
            <form onSubmit={props.onContinue} className="bill-form">
                <div className="labels-section">
                    <label htmlFor="">Acueducto ($)</label>
                    <label htmlFor="AcueCfr$" className="sublabel">Cargo fijo residencial</label>
                    <input autoFocus type="number" name="" id="AcueCfr$" className="currency-input"  required step={0.01}/>
                    <label htmlFor="AcueCrb$" className="sublabel">Consumo residencial básico</label>
                    <input type="number" name="" id="AcueCrb$" className="currency-input"  required step={0.01}/>
                    <label htmlFor="AcueCrsb$" className="sublabel">Consumo residencial superior a básico</label>
                    <input type="number" name="" id="AcueCrsb$" className="currency-input"  required step={0.01}/>
                </div>
                <ButtonsContainer
                    textButton1='Regresar'
                    textButton2='Continuar'
                    onFirstOptionHandler={props.onGoBack}
                />
            </form>
        </>
    )
}