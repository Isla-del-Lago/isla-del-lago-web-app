import ButtonsContainer from "../ButtonsContainer";

export default function SelectBillForm(props) {
    return (
        <>
            <div className="labels-section">
                <label htmlFor="bills">Selecciona una factura</label>
                <select name="bills" id="bills" className="bill-selecter">
                    <option value="20/01/2022-22/03/2022">20/01/2022-22/03/2022</option>
                    <option value="20/01/2022-22/03/2022">20/01/2022-22/03/2022</option>
                    <option value="20/01/2022-22/03/2022">20/01/2022-22/03/2022</option>
                    <option value="20/01/2022-22/03/2022">20/01/2022-22/03/2022</option>
                    <option value="20/01/2022-22/03/2022">20/01/2022-22/03/2022</option>
                </select>
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