import ButtonsContainer from "../ButtonsContainer";

export default function BillInfoForm(props) {
    return (
        <>
            <form onSubmit={props.onContinue} className="bill-form">
                <div className="labels-section">
                    <label htmlFor="">Periodo facturado</label>
                    <label htmlFor="startDate" className="sublabel">Fecha inicial</label>
                    <input type="date" name="" id="startDate" required />
                    <label htmlFor="endDate" className="sublabel">Fecha final</label>
                    <input type="date" name="" id="endDate" required />
                    <label htmlFor="discounts">Descuentos ($)</label>
                    <input type="number" name="" id="discounts" className="currency-input" required step={0.01} />
                    <label htmlFor="cleaning">Aseo ($)</label>
                    <input type="number" name="" id="cleaning" className="currency-input" required step={0.01} />
                </div>
                <ButtonsContainer
                    path={'/menu'}
                    textButton1='Cancelar'
                    textButton2='Continuar'
                    onFirstOptionHandler={props.onCancel}
                />
            </form>
        </>
    )
}