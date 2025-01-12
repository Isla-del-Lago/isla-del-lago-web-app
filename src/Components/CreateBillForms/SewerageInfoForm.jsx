import ButtonsContainer from "../ButtonsContainer";

export default function SewerageInfoForm(props) {
  const { AlcaCfr$, AlcaCrb$, AlcaCrsb$, AlcaCfnr$, AlcaCnr$ } = props;
  const inputStep = 0.01;
  const inputPlaceHolder = "$0,0";
  const onChangeValuesHandler = (event) => {
    props.onChangeValuesHandler(event);
  };
  return (
    <>
      <form onSubmit={props.onSaveBill} className="bill-form">
        <div className="labels-section">
          <label htmlFor="">Alcantarillado ($)</label>
          <label htmlFor="AlcaCfr$" className="sublabel">
            Cargo fijo residencial
          </label>
          <input
            type="number"
            name=""
            value={AlcaCfr$ || ""}
            onChange={onChangeValuesHandler}
            id="AlcaCfr$"
            className="currency-input"
            required
            step={inputStep}
            placeholder={inputPlaceHolder}
            min={0}
          />
          <label htmlFor="AlcaCrb$" className="sublabel">
            Consumo residencial básico
          </label>
          <input
            type="number"
            name=""
            value={AlcaCrb$ || ""}
            onChange={onChangeValuesHandler}
            id="AlcaCrb$"
            className="currency-input"
            required
            step={inputStep}
            placeholder={inputPlaceHolder}
            min={0}
          />
          <label htmlFor="AlcaCrsb$" className="sublabel">
            Consumo residencial superior a básico
          </label>
          <input
            type="number"
            name=""
            value={AlcaCrsb$ || ""}
            onChange={onChangeValuesHandler}
            id="AlcaCrsb$"
            className="currency-input"
            required
            step={inputStep}
            placeholder={inputPlaceHolder}
            min={0}
          />
          <label htmlFor="AlcaCfnr$" className="sublabel">
            Cargo fijo no residencial
          </label>
          <input
            type="number"
            name=""
            value={AlcaCfnr$ || ""}
            onChange={onChangeValuesHandler}
            id="AlcaCfnr$"
            className="currency-input"
            required
            step={inputStep}
            placeholder={inputPlaceHolder}
            min={0}
          />
          <label htmlFor="AlcaCnr$" className="sublabel">
            Consumo no residencial
          </label>
          <input
            type="number"
            name=""
            value={AlcaCnr$ || ""}
            onChange={onChangeValuesHandler}
            id="AlcaCnr$"
            className="currency-input"
            required
            step={inputStep}
            placeholder={inputPlaceHolder}
            min={0}
          />
        </div>
        <ButtonsContainer
          textButton1="Regresar"
          textButton2="Guardar"
          onFirstOptionHandler={props.onGoBack}
        />
      </form>
    </>
  );
}
