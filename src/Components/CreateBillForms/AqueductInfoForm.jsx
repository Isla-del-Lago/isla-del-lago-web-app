import ButtonsContainer from "../ButtonsContainer";

export default function AqueductInfoForm(props) {
    const inputStep = 0.01
    const inputPlaceHolder = "$0,0"
    const {AcueCfr$, AcueCrb$, AcueCrsb$} = props
    const onChangeValuesHandler=(event)=>{
        props.onChangeValuesHandler(event)
    }
    return (
        <>
            <form onSubmit={props.onContinue} className="bill-form">
                <div className="labels-section">
                    <label htmlFor="">Acueducto ($)</label>
                    <label htmlFor="AcueCfr$" className="sublabel">Cargo fijo residencial</label>
                    <input value={AcueCfr$} onChange={onChangeValuesHandler} autoFocus type="number" name="" id="AcueCfr$" className="currency-input"  required step={inputStep} placeholder={inputPlaceHolder} min={0}/>
                    <label htmlFor="AcueCrb$" className="sublabel">Consumo residencial básico</label>
                    <input value={AcueCrb$} onChange={onChangeValuesHandler} type="number" name="" id="AcueCrb$" className="currency-input"  required step={inputStep} placeholder={inputPlaceHolder} min={0}/>
                    <label htmlFor="AcueCrsb$" className="sublabel">Consumo residencial superior a básico</label>
                    <input value={AcueCrsb$} onChange={onChangeValuesHandler} type="number" name="" id="AcueCrsb$" className="currency-input"  required step={inputStep} placeholder={inputPlaceHolder} min={0}/>
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