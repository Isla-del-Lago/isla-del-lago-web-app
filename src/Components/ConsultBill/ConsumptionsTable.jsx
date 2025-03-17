import { formatCurrency } from "../../Utils/GeneralFunctions";
import PropTypes from 'prop-types'
export default function ConsumptionsTable(props) {
    const { billDetails, nameOfApartmentSelected } = props
    return (
        <>
            <div className="consumption-table">
                <h1 className="consumption-table-title">{nameOfApartmentSelected}</h1>
                <div className="consumption-table-row">
                    <h1 className="consumption-table-subtitle">Acueducto</h1>
                </div>
                <div className="consumption-table-row">
                    <p className="consumption-table-item-name">Residencial</p>
                    <p className="consumption-table-item-value">{formatCurrency(billDetails.residential_fixed_aqueduct)}</p>
                </div>
                <div className="consumption-table-row">
                    <p className="consumption-table-item-name">Residencial básico</p>
                    <p className="consumption-table-item-value">{formatCurrency(billDetails.residential_basic_aqueduct)}</p>
                </div>
                <div className="consumption-table-row">
                    <p className="consumption-table-item-name">Residencial básico superior</p>
                    <p className="consumption-table-item-value">{formatCurrency(billDetails.residential_basic_superior_aqueduct)}</p>
                </div>
                <div className="consumption-table-row">
                    <h1 className="consumption-table-subtitle">Alcantarillado</h1>
                </div>
                <div className="consumption-table-row">
                    <p className="consumption-table-item-name">Residencial</p>
                    <p className="consumption-table-item-value">{formatCurrency(billDetails.residential_fixed_sewerage)}</p>
                </div>
                <div className="consumption-table-row">
                    <p className="consumption-table-item-name">Residencial básico</p>
                    <p className="consumption-table-item-value">{formatCurrency(billDetails.residential_basic_sewerage)}</p>
                </div>
                <div className="consumption-table-row">
                    <p className="consumption-table-item-name">Residencial básico superior</p>
                    <p className="consumption-table-item-value">{formatCurrency(billDetails.residential_basic_superior_sewerage)}</p>
                </div>
                <div className="consumption-table-row">
                    <h1 className="consumption-table-subtitle">Otros cobros</h1>
                </div>
                <div className="consumption-table-row">
                    <p className="consumption-table-item-name">Aseo</p>
                    <p className="consumption-table-item-value">{formatCurrency(billDetails.cleaning)}</p>
                </div>
                <div className="consumption-table-row">
                    <p className="consumption-table-item-name">Descuentos</p>
                    <p className="consumption-table-item-value">{formatCurrency(billDetails.discounts)}</p>
                </div>
                <div className="consumption-table-row">
                    <p className="consumption-table-item-name">Descuentos adicionales</p>
                    <p className="consumption-table-item-value">{formatCurrency(billDetails.additionalDiscounts)}</p>
                </div>
                <div className="consumption-table-row">
                    <p className="consumption-table-item-name">Otros cobros no residenciales</p>
                    <p className="consumption-table-item-value">{formatCurrency(billDetails.not_residential_fixed_aqueduct + billDetails.not_residential_aqueduct + billDetails.not_residential_fixed_sewerage + billDetails.not_residential_sewerage)}</p>
                </div>
            </div>
        </>
    )
}

ConsumptionsTable.propTypes = {
    billDetails: PropTypes.object.isRequired,
    nameOfApartmentSelected: PropTypes.string.isRequired
}