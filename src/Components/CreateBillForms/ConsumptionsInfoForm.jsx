import ButtonsContainer from "../ButtonsContainer";

export default function ConsumptionsInfoForm(props) {
    return (
        <>
            <form onSubmit={props.onContinue} className="bill-form">
                <div className="labels-section">
                    <label htmlFor="">Consumos (m3)</label>
                    <label htmlFor="crbm3" className="sublabel">Consumo residencial básico</label>
                    <input type="number" name="" id="crbm3" required/>
                    <label htmlFor="crsbm3" className="sublabel">Consumo residencial superior a básico</label>
                    <input type="number" name="" id="crsbm3" required/>
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