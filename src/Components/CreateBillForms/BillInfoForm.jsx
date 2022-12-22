import { useState } from "react";
import ButtonsContainer from "../ButtonsContainer";

export default function BillInfoForm(props) {
    const {startDate, endDate,discounts,cleaning} = props
    const onChangeValuesHandler=(event)=>{
        props.onChangeValuesHandler(event)
    }

    return (
        <>
            <form onSubmit={props.onContinue} className="bill-form">
                <div className="labels-section">
                    <label htmlFor="">Periodo facturado</label>
                    <label htmlFor="startDate" className="sublabel">Fecha inicial</label>
                    <input type="date" value={startDate} id="startDate" onChange={onChangeValuesHandler} required />
                    <label htmlFor="endDate" className="sublabel">Fecha final</label>
                    <input type="date" value={endDate} id="endDate" onChange={onChangeValuesHandler} required />
                    <label htmlFor="discounts">Descuentos ($)</label>
                    <input type="number" value={discounts} id="discounts" onChange={onChangeValuesHandler} className="currency-input" required step={0.01} placeholder="$0,0" min={0} />
                    <label htmlFor="cleaning">Aseo ($)</label>
                    <input type="number" value={cleaning} id="cleaning" onChange={onChangeValuesHandler} className="currency-input" required step={0.01} placeholder="$0,0" min={0} />
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