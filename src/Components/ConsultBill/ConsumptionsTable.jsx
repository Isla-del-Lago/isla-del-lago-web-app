let COP = Intl.NumberFormat("de-DE", {
    currency: "COP",
});
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
                    <p className="consumption-table-item-value">${COP.format(parseFloat(billDetails.residential_fixed_aqueduct).toFixed(2))}</p>
                </div>
                <div className="consumption-table-row">
                    <p className="consumption-table-item-name">Residencial básico</p>
                    <p className="consumption-table-item-value">${COP.format(parseFloat(billDetails.residential_basic_aqueduct).toFixed(2))}</p>
                </div>
                <div className="consumption-table-row">
                    <p className="consumption-table-item-name">Residencial básico superior</p>
                    <p className="consumption-table-item-value">${COP.format(parseFloat(billDetails.residential_basic_superior_aqueduct).toFixed(2))}</p>
                </div>
                <div className="consumption-table-row">
                    <h1 className="consumption-table-subtitle">Alcantarillado</h1>
                </div>
                <div className="consumption-table-row">
                    <p className="consumption-table-item-name">Residencial</p>
                    <p className="consumption-table-item-value">${COP.format(parseFloat(billDetails.residential_fixed_sewerage).toFixed(2))}</p>
                </div>
                <div className="consumption-table-row">
                    <p className="consumption-table-item-name">Residencial básico</p>
                    <p className="consumption-table-item-value">${COP.format(parseFloat(billDetails.residential_basic_sewerage).toFixed(2))}</p>
                </div>
                <div className="consumption-table-row">
                    <p className="consumption-table-item-name">Residencial básico superior</p>
                    <p className="consumption-table-item-value">${COP.format(parseFloat(billDetails.residential_basic_superior_sewerage).toFixed(2))}</p>
                </div>
                <div className="consumption-table-row">
                    <h1 className="consumption-table-subtitle">Otros cobros</h1>
                </div>
                <div className="consumption-table-row">
                    <p className="consumption-table-item-name">Aseo</p>
                    <p className="consumption-table-item-value">${COP.format(parseFloat(billDetails.cleaning).toFixed(2))}</p>
                </div>
                <div className="consumption-table-row">
                    <p className="consumption-table-item-name">Descuentos</p>
                    <p className="consumption-table-item-value">${COP.format(parseFloat(billDetails.discounts).toFixed(2))}</p>
                </div>
            </div>
        </>
    )
}