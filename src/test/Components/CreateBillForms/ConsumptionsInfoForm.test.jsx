const { render, screen, fireEvent } = require("@testing-library/react")
import ConsumptionsInfoForm from "../../../Components/CreateBillForms/ConsumptionsInfoForm"

describe('Test on ConsumptionsInfoForm component', () => {
    const onChangeValuesHandlerMock = jest.fn()
    test('Should render all labels', () => {
        render(<ConsumptionsInfoForm />)
        expect(screen.getByText('Consumos (m3)')).toBeTruthy()
        expect(screen.getByText('Consumo residencial básico')).toBeTruthy()
        expect(screen.getByText('Consumo residencial superior a básico')).toBeTruthy()
    })
    test('Should change inputs values', () => {
        const { container } = render(<ConsumptionsInfoForm
            onChangeValuesHandler={onChangeValuesHandlerMock}
        />)
        const crbm3 = container.querySelectorAll('input')[0]
        const crsbm3 = container.querySelectorAll('input')[1]
        fireEvent.change(crbm3, { target: { value: '201' } })
        fireEvent.change(crsbm3, { target: { value: '201' } })
        expect(onChangeValuesHandlerMock).toHaveBeenCalledTimes(2)
    })
})