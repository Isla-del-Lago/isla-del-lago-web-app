import { useState } from "react";
import data from '../../Utils/data.json'
import ButtonsContainer from "../ButtonsContainer";

export default function ConsumptionsForms(props) {
    const {
        billSelected,
        currentStep,
        consumptionApto201,
        consumptionApto202,
        consumptionApto301,
        consumptionApto302,
        consumptionApto401,
        consumptionApto402,
        consumptionApto501,
        consumptionApto502,
        consumptionLocal1,
        consumptionLocal2
    } = props
    const onChangeValuesHandler=(event)=>{
        props.onChangeValuesHandler(event)
    }
    return (
        <>
            <div className="labels-section">
                <div className="date-selected">
                    <h1>Factura seleccionada:</h1>
                    <h1>{billSelected.split(",")[0]}</h1>
                </div>
                {currentStep === 1 &&
                    <div>
                        <label htmlFor="apto201">Apartamento 201</label>
                        <input
                            type="number"
                            name=""
                            required
                            autoFocus
                            value={consumptionApto201}
                            onChange={onChangeValuesHandler}
                            id="apto201"
                            className="currency-input"
                            placeholder="0"
                            min={0} />
                        <label htmlFor="apto202">Apartamento 202</label>
                        <input
                            type="number"
                            name=""
                            required
                            value={consumptionApto202}
                            onChange={onChangeValuesHandler}
                            id="apto202"
                            className="currency-input"
                            placeholder="0"
                            min={0} />
                    </div>
                }
                {currentStep === 2 &&
                    <div>
                        <label htmlFor="apto301">Apartamento 301</label>
                        <input
                            type="number"
                            name=""
                            required
                            autoFocus
                            value={consumptionApto301}
                            onChange={onChangeValuesHandler}
                            id="apto301"
                            className="currency-input"
                            placeholder="0"
                            min={0} />
                        <label htmlFor="apto302">Apartamento 302</label>
                        <input
                            type="number"
                            name=""
                            required
                            value={consumptionApto302}
                            onChange={onChangeValuesHandler}
                            id="apto302"
                            className="currency-input"
                            placeholder="0"
                            min={0} />
                    </div>
                }
                {currentStep === 3 &&
                    <div>
                        <label htmlFor="apto401">Apartamento 401</label>
                        <input
                            type="number"
                            name=""
                            required
                            autoFocus
                            value={consumptionApto401}
                            onChange={onChangeValuesHandler}
                            id="apto401"
                            className="currency-input"
                            placeholder="0"
                            min={0} />
                        <label htmlFor="apto402">Apartamento 402</label>
                        <input
                            type="number"
                            name=""
                            required
                            value={consumptionApto402}
                            onChange={onChangeValuesHandler}
                            id="apto402"
                            className="currency-input"
                            placeholder="0"
                            min={0} />
                    </div>
                }
                {currentStep === 4 &&
                    <div>
                        <label htmlFor="apto501">Apartamento 501</label>
                        <input
                            type="number"
                            name=""
                            required
                            autoFocus
                            value={consumptionApto501}
                            onChange={onChangeValuesHandler}
                            id="apto501"
                            className="currency-input"
                            placeholder="0"
                            min={0} />
                        <label htmlFor="apto502">Apartamento 502</label>
                        <input
                            type="number"
                            name=""
                            required
                            value={consumptionApto502}
                            onChange={onChangeValuesHandler}
                            id="apto502"
                            className="currency-input"
                            placeholder="0"
                            min={0} />
                    </div>
                }
                {currentStep === 5 &&
                    <div>
                        <label htmlFor="local1">Local 1</label>
                        <input
                            type="number"
                            name=""
                            required
                            autoFocus
                            value={consumptionLocal1}
                            onChange={onChangeValuesHandler}
                            id="local1"
                            className="currency-input"
                            placeholder="0"
                            min={0} />
                        <label htmlFor="local2">Local 2</label>
                        <input
                            type="number"
                            name=""
                            required
                            value={consumptionLocal2}
                            onChange={onChangeValuesHandler}
                            id="local2"
                            className="currency-input"
                            placeholder="0"
                            min={0} />
                    </div>
                }
            </div>
            <ButtonsContainer
                textButton1='Regresar'
                textButton2={currentStep === data.apartments.length - 2 ? 'Guardar' : 'Continuar'}
                onFirstOptionHandler={props.onGoBack}
            />
        </>
    )
}