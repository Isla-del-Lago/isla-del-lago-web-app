import ButtonsContainer from "../ButtonsContainer";
import data from '../../Utils/data.json'

export default function SelectBillForm(props) {
    return (
        <>
            <div className="labels-section">
                <label htmlFor="bills">Selecciona una factura</label>
                <select name="bills" id="bills" className="bill-selecter">
                    {data.bills.map((bill, index) => (
                        <option key={index} value={bill}>{bill}</option>
                    ))}
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