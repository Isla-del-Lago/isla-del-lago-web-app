const { render, screen, fireEvent } = require("@testing-library/react")
import SewerageInfoForm from "../../../Components/CreateBillForms/SewerageInfoForm"

describe('Test on ConsumptionsInfoForm component', () => {
    const onChangeValuesHandlerMock = jest.fn()
    test('Should render all labels', () => {
        render(<SewerageInfoForm />)
        expect(screen.getByText('Alcantarillado ($)')).toBeTruthy()
        expect(screen.getByText('Cargo fijo residencial')).toBeTruthy()
        expect(screen.getByText('Consumo residencial básico')).toBeTruthy()
        expect(screen.getByText('Consumo residencial superior a básico')).toBeTruthy()
    })
    test('Should change inputs values', () => {
        const { container } = render(<SewerageInfoForm
            onChangeValuesHandler={onChangeValuesHandlerMock}
        />)
        const AlcaCfr$Input = container.querySelectorAll('input')[0]
        const AlcaCrb$Input = container.querySelectorAll('input')[1]
        const AlcaCrsb$Input = container.querySelectorAll('input')[2]
        fireEvent.change(AlcaCfr$Input, { target: { value: '201' } })
        fireEvent.change(AlcaCrb$Input, { target: { value: '201' } })
        fireEvent.change(AlcaCrsb$Input, { target: { value: '201' } })
        expect(onChangeValuesHandlerMock).toHaveBeenCalledTimes(3)
    })
})