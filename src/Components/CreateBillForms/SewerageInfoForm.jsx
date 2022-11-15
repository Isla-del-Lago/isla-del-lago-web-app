import ButtonsContainer from '../ButtonsContainer';

export default function SewerageInfoForm(props) {
    return (
        <>
            <form onSubmit={props.onSaveBill} className='bill-form'>
                <div className='labels-section'>
                    <label htmlFor=''>Alcantarillado ($)</label>
                    <label htmlFor='AlcaCfr$' className='sublabel'>
                        Cargo fijo residencial
                    </label>
                    <input
                        autoFocus
                        type='number'
                        name=''
                        id='AlcaCfr$'
                        className='currency-input'
                        required
                        step={0.01}
                    />
                    <label htmlFor='AlcaCrb$' className='sublabel'>
                        Consumo residencial básico
                    </label>
                    <input
                        type='number'
                        name=''
                        id='AlcaCrb$'
                        className='currency-input'
                        required
                        step={0.01}
                    />
                    <label htmlFor='AlcaCrsb$' className='sublabel'>
                        Consumo residencial superior a básico
                    </label>
                    <input
                        type='number'
                        name=''
                        id='AlcaCrsb$'
                        className='currency-input'
                        required
                        step={0.01}
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
