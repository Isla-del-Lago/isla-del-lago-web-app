import { useEffect, useState } from "react";

import apartmentsInfo from '../../Utils/data.json'
import ButtonsContainer from "../ButtonsContainer";
import PropTypes from 'prop-types'

import Loader from "../Loader";

import { closeSessionHandler } from "../../Utils/GeneralFunctions";

export default function ConsumptionsForms(props) {
    const inputStep = 0.01
    const inputPlaceHolder = "0,0"
    
    const [previousConsumptions, setPreviousConsumptions] = useState([])
    const [isLoading, setIsLoading] = useState(false);

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
        consumptionLocal2,
        selectedBillId
    } = props

    const onChangeValuesHandler = (event) => {
        props.onChangeValuesHandler(event)
    }

    useEffect(() => {
        setIsLoading(true)
        fetch(`${process.env.REACT_APP_MS_BASE_URL}${process.env.REACT_APP_MS_CONSUMPTION_PATH}/previous/bill/${selectedBillId}`, 
        {
            method: 'GET',
            headers: {
                'user-id': sessionStorage.getItem('UserId'),
                'Authorization': sessionStorage.getItem('AuthToken'),
            },
        })
        .then((response) => {
            if (response.status === 401) {
                closeSessionHandler()
            }
            return response.json()
        })
        .then((data) => {
            setPreviousConsumptions(data)
            setIsLoading(false)
        })
        .catch((error) => {
            console.log(error);
            setIsLoading(false)
        })
    }, []);

    const getPreviousConsumptionFromByApartment = (apartmentId) => {
        return previousConsumptions.find((consumption) => consumption.apartment_id == apartmentId).consumption.value
    }

    return (
        <>
            {isLoading && <Loader />}
            {previousConsumptions.length && <div className="labels-section">
                <div className="date-selected">
                    <h1>Factura seleccionada:</h1>
                    <h1>{billSelected.split(",")[0]}</h1>
                </div>
                {currentStep === 1 &&
                    <div>
                        <label htmlFor="apto201">{apartmentsInfo.apartments[0].name} - Anterior consumo: {getPreviousConsumptionFromByApartment(apartmentsInfo.apartments[0].id)}</label>
                        <input
                            type="number"
                            name=""
                            required
                            autoFocus
                            value={consumptionApto201}
                            onChange={onChangeValuesHandler}
                            id="apto201"
                            className="currency-input"
                            step={inputStep}
                            placeholder={inputPlaceHolder}
                            min={0} />
                        <label htmlFor="apto202">{apartmentsInfo.apartments[1].name} - Anterior consumo: {getPreviousConsumptionFromByApartment(apartmentsInfo.apartments[1].id)}</label>
                        <input
                            type="number"
                            name=""
                            required
                            value={consumptionApto202}
                            onChange={onChangeValuesHandler}
                            id="apto202"
                            className="currency-input"
                            step={inputStep}
                            placeholder={inputPlaceHolder}
                            min={0} />
                    </div>
                }
                {currentStep === 2 &&
                    <div>
                        <label htmlFor="apto301">{apartmentsInfo.apartments[2].name} - Anterior consumo: {getPreviousConsumptionFromByApartment(apartmentsInfo.apartments[2].id)}</label>
                        <input
                            type="number"
                            name=""
                            required
                            autoFocus
                            value={consumptionApto301}
                            onChange={onChangeValuesHandler}
                            id="apto301"
                            className="currency-input"
                            step={inputStep}
                            placeholder={inputPlaceHolder}
                            min={0} />
                        <label htmlFor="apto302">{apartmentsInfo.apartments[3].name} - Anterior consumo: {getPreviousConsumptionFromByApartment(apartmentsInfo.apartments[3].id)}</label>
                        <input
                            type="number"
                            name=""
                            required
                            value={consumptionApto302}
                            onChange={onChangeValuesHandler}
                            id="apto302"
                            className="currency-input"
                            step={inputStep}
                            placeholder={inputPlaceHolder}
                            min={0} />
                    </div>
                }
                {currentStep === 3 &&
                    <div>
                        <label htmlFor="apto401">{apartmentsInfo.apartments[4].name} - Anterior consumo: {getPreviousConsumptionFromByApartment(apartmentsInfo.apartments[4].id)}</label>
                        <input
                            type="number"
                            name=""
                            required
                            autoFocus
                            value={consumptionApto401}
                            onChange={onChangeValuesHandler}
                            id="apto401"
                            className="currency-input"
                            step={inputStep}
                            placeholder={inputPlaceHolder}
                            min={0} />
                        <label htmlFor="apto402">{apartmentsInfo.apartments[5].name} - Anterior consumo: {getPreviousConsumptionFromByApartment(apartmentsInfo.apartments[5].id)}</label>
                        <input
                            type="number"
                            name=""
                            required
                            value={consumptionApto402}
                            onChange={onChangeValuesHandler}
                            id="apto402"
                            className="currency-input"
                            step={inputStep}
                            placeholder={inputPlaceHolder}
                            min={0} />
                    </div>
                }
                {currentStep === 4 &&
                    <div>
                        <label htmlFor="apto501">{apartmentsInfo.apartments[6].name} - Anterior consumo: {getPreviousConsumptionFromByApartment(apartmentsInfo.apartments[6].id)}</label>
                        <input
                            type="number"
                            name=""
                            required
                            autoFocus
                            value={consumptionApto501}
                            onChange={onChangeValuesHandler}
                            id="apto501"
                            className="currency-input"
                            step={inputStep}
                            placeholder={inputPlaceHolder}
                            min={0} />
                        <label htmlFor="apto502">{apartmentsInfo.apartments[7].name} - Anterior consumo: {getPreviousConsumptionFromByApartment(apartmentsInfo.apartments[7].id)}</label>
                        <input
                            type="number"
                            name=""
                            required
                            value={consumptionApto502}
                            onChange={onChangeValuesHandler}
                            id="apto502"
                            className="currency-input"
                            step={inputStep}
                            placeholder={inputPlaceHolder}
                            min={0} />
                    </div>
                }
                {currentStep === 5 &&
                    <div>
                        <label htmlFor="local1">{apartmentsInfo.apartments[8].name} - Anterior consumo: {getPreviousConsumptionFromByApartment(apartmentsInfo.apartments[8].id)}</label>
                        <input
                            type="number"
                            name=""
                            required
                            autoFocus
                            value={consumptionLocal1}
                            onChange={onChangeValuesHandler}
                            id="local1"
                            className="currency-input"
                            step={inputStep}
                            placeholder={inputPlaceHolder}
                            min={0} />
                        <label htmlFor="local2">{apartmentsInfo.apartments[9].name} - Anterior consumo: {getPreviousConsumptionFromByApartment(apartmentsInfo.apartments[9].id)}</label>
                        <input
                            type="number"
                            name=""
                            required
                            value={consumptionLocal2}
                            onChange={onChangeValuesHandler}
                            id="local2"
                            className="currency-input"
                            step={inputStep}
                            placeholder={inputPlaceHolder}
                            min={0} />
                    </div>
                }
            </div>}
            <ButtonsContainer
                textButton1='Regresar'
                textButton2={currentStep === apartmentsInfo.apartments.length - 2 ? 'Guardar' : 'Continuar'}
                onFirstOptionHandler={props.onGoBack}
            />
        </>
    )
}

ConsumptionsForms.propTypes = {
    billSelected: PropTypes.string.isRequired,
    currentStep: PropTypes.number.isRequired,
    consumptionApto201: PropTypes.string,
    consumptionApto202: PropTypes.string,
    consumptionApto301: PropTypes.string,
    consumptionApto302: PropTypes.string,
    consumptionApto401: PropTypes.string,
    consumptionApto402: PropTypes.string,
    consumptionApto501: PropTypes.string,
    consumptionApto502: PropTypes.string,
    consumptionLocal1: PropTypes.string,
    consumptionLocal2: PropTypes.string,
    onChangeValuesHandler: PropTypes.func.isRequired,
    onGoBack: PropTypes.func.isRequired
}