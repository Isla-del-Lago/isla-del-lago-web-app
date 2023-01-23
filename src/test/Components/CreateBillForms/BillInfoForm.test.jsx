const { render, screen, fireEvent } = require("@testing-library/react")
const { MemoryRouter } = require("react-router-dom")
import BillInfoForm from "../../../Components/CreateBillForms/BillInfoForm"


describe('Test on BillInfoForm component', () => {
    const onChangeValuesHandlerMock = jest.fn()
    test('Should render all labels', () => {
        render(<BillInfoForm />, { wrapper: MemoryRouter })
        expect(screen.getByText('Periodo facturado')).toBeTruthy()
        expect(screen.getByText('Fecha inicial')).toBeTruthy()
        expect(screen.getByText('Fecha final')).toBeTruthy()
        expect(screen.getByText('Descuentos ($)')).toBeTruthy()
        expect(screen.getByText('Aseo ($)')).toBeTruthy()
    })
    test('Should change inputs values', () => {
        const { container } = render(<BillInfoForm
            onChangeValuesHandler={onChangeValuesHandlerMock}
        />, { wrapper: MemoryRouter })
        const startDateInput = container.querySelectorAll('input')[0]
        const endDateInput = container.querySelectorAll('input')[1]
        const discountsInput = container.querySelectorAll('input')[2]
        const cleaningInput = container.querySelectorAll('input')[3]
        fireEvent.change(startDateInput, { target: { value: '2023-02-10' } })
        fireEvent.change(endDateInput, { target: { value: '2023-04-10' } })
        fireEvent.change(discountsInput, { target: { value: '201' } })
        fireEvent.change(cleaningInput, { target: { value: '201' } })
        expect(onChangeValuesHandlerMock).toHaveBeenCalledTimes(4)
    })
})