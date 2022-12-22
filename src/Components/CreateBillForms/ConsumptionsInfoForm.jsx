import ButtonsContainer from '../ButtonsContainer';

export default function ConsumptionsInfoForm(props) {
    const {crbm3, crsbm3} = props
    const onChangeValuesHandler=(event)=>{
        props.onChangeValuesHandler(event)
    }
    return (
        <>
            <form onSubmit={props.onContinue} className='bill-form'>
                <div className='labels-section'>
                    <label htmlFor=''>Consumos (m3)</label>
                    <label htmlFor='crbm3' className='sublabel'>
                        Consumo residencial básico
                    </label>
                    <input
                        autoFocus
                        type='number'
                        name=''
                        value={crbm3}
                        onChange={onChangeValuesHandler}
                        id='crbm3'
                        required
                        step={0.01}
                        placeholder="0"
                        min={0}
                    />
                    <label htmlFor='crsbm3' className='sublabel'>
                        Consumo residencial superior a básico
                    </label>
                    <input
                        type='number'
                        name=''
                        value={crsbm3}
                        onChange={onChangeValuesHandler}
                        id='crsbm3'
                        required
                        step={0.01}
                        placeholder="0"
                        min={0}
                    />
                </div>
                <ButtonsContainer
                    textButton1='Regresar'
                    textButton2='Continuar'
                    onFirstOptionHandler={props.onGoBack}
                />
            </form>
        </>
    );
}
