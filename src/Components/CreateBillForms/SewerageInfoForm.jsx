import ButtonsContainer from '../ButtonsContainer';

export default function SewerageInfoForm(props) {
    const {AlcaCfr$, AlcaCrb$, AlcaCrsb$} = props
    const inputStep = 0.01
    const inputPlaceHolder = "$0,0"
    const onChangeValuesHandler=(event)=>{
        props.onChangeValuesHandler(event)
    }
    return (
        <>
            <form onSubmit={props.onSaveBill} className='bill-form'>
                <div className='labels-section'>
                    <label htmlFor=''>Alcantarillado ($)</label>
                    <label htmlFor='AlcaCfr$' className='sublabel'>
                        Cargo fijo residencial
                    </label>
                    <input
                        type='number'
                        name=''
                        value={AlcaCfr$ || ""}
                        onChange={onChangeValuesHandler}
                        id='AlcaCfr$'
                        className='currency-input'
                        required
                        step={inputStep}
                        placeholder={inputPlaceHolder} 
                        min={0}
                    />
                    <label htmlFor='AlcaCrb$' className='sublabel'>
                        Consumo residencial básico
                    </label>
                    <input
                        type='number'
                        name=''
                        value={AlcaCrb$ || ""}
                        onChange={onChangeValuesHandler}
                        id='AlcaCrb$'
                        className='currency-input'
                        required
                        step={inputStep}
                        placeholder={inputPlaceHolder} 
                        min={0}
                    />
                    <label htmlFor='AlcaCrsb$' className='sublabel'>
                        Consumo residencial superior a básico
                    </label>
                    <input
                        type='number'
                        name=''
                        value={AlcaCrsb$ || ""}
                        onChange={onChangeValuesHandler}
                        id='AlcaCrsb$'
                        className='currency-input'
                        required
                        step={inputStep}
                        placeholder={inputPlaceHolder} 
                        min={0}
                    />
                </div>
                <ButtonsContainer
                    textButton1='Regresar'
                    textButton2='Guardar'
                    onFirstOptionHandler={props.onGoBack}
                />
            </form>
        </>
    );
}
