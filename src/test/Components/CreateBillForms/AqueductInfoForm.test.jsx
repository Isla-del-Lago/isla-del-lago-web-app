const { render, screen, fireEvent } = require("@testing-library/react")
import AqueductInfoForm from "../../../Components/CreateBillForms/AqueductInfoForm"

describe('Test on ConsumptionsInfoForm component', () => {
    const onChangeValuesHandlerMock = jest.fn()
    test('Should render all labels', () => {
        render(<AqueductInfoForm />)
        expect(screen.getByText('Acueducto ($)')).toBeTruthy()
        expect(screen.getByText('Cargo fijo residencial')).toBeTruthy()
        expect(screen.getByText('Consumo residencial básico')).toBeTruthy()
        expect(screen.getByText('Consumo residencial superior a básico')).toBeTruthy()
    })
    test('Should change inputs values', () => {
        const { container } = render(<AqueductInfoForm
            onChangeValuesHandler={onChangeValuesHandlerMock}
        />)
        const AcueCfr$Input = container.querySelectorAll('input')[0]
        const AcueCrb$Input = container.querySelectorAll('input')[1]
        const AcueCrsb$Input = container.querySelectorAll('input')[2]
        fireEvent.change(AcueCfr$Input, { target: { value: '201' } })
        fireEvent.change(AcueCrb$Input, { target: { value: '201' } })
        fireEvent.change(AcueCrsb$Input, { target: { value: '201' } })
        expect(onChangeValuesHandlerMock).toHaveBeenCalledTimes(3)
    })
})