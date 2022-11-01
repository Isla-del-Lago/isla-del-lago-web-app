import ButtonsContainer from "./ButtonsContainer";

export default function BillInfoForm(props) {
    return (
        <>
            <div className="labels-section">
                <label htmlFor="">Periodo facturado</label>
                <label htmlFor="startDate" className="sublabel">Fecha inicial</label>
                <input type="date" name="" id="startDate" />
                <label htmlFor="endDate" className="sublabel">Fecha final</label>
                <input type="date" name="" id="endDate" />
                <label htmlFor="discounts">Descuentos ($)</label>
                <input type="number" name="" id="discounts" className="currency-input" />
                <label htmlFor="cleaning">Aseo ($)</label>
                <input type="number" name="" id="cleaning" className="currency-input" />
            </div>
            <ButtonsContainer
                textButton1='Cancelar'
                textButton2='Continuar'
                onFirstOptionHandler={props.onCancel}
                onSecondOptionHandler={props.onContinue}
            />
        </>
    )
}