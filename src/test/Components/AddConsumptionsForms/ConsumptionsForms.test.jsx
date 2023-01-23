import { fireEvent, render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import ConsumptionsForms from "../../../Components/AddConsumptionsForms/ConsumptionsForms"

describe('Test on SelectBillForm component', () => {
    const onChangeValuesHandlerMock = jest.fn()
    const onGoBackMock = jest.fn()
    const billInfo = '18/08/2022 - 17/10/2022, 10'
    test('Should render the bill selected and inputs of the step 1', () => {
        render(<ConsumptionsForms
            billSelected={billInfo}
            currentStep={1}
            onChangeValuesHandler={onChangeValuesHandlerMock}
            onGoBack={onGoBackMock}
        />, { wrapper: MemoryRouter })
        expect(screen.getByText(billInfo.split(',')[0])).toBeTruthy()
        expect(screen.getByText('Apartamento 201')).toBeTruthy()
        expect(screen.getByText('Apartamento 202')).toBeTruthy()
    })
    test('Should render the bill selected and inputs of the step 2', () => {
        render(<ConsumptionsForms
            billSelected={billInfo}
            currentStep={2}
            onChangeValuesHandler={onChangeValuesHandlerMock}
            onGoBack={onGoBackMock}
        />, { wrapper: MemoryRouter })
        expect(screen.getByText(billInfo.split(',')[0])).toBeTruthy()
        expect(screen.getByText('Apartamento 301')).toBeTruthy()
        expect(screen.getByText('Apartamento 302')).toBeTruthy()
    })
    test('Should render the bill selected and inputs of the step 3', () => {
        render(<ConsumptionsForms
            billSelected={billInfo}
            currentStep={3}
            onChangeValuesHandler={onChangeValuesHandlerMock}
            onGoBack={onGoBackMock}
        />, { wrapper: MemoryRouter })
        expect(screen.getByText(billInfo.split(',')[0])).toBeTruthy()
        expect(screen.getByText('Apartamento 401')).toBeTruthy()
        expect(screen.getByText('Apartamento 402')).toBeTruthy()
    })
    test('Should render the bill selected and inputs of the step 4', () => {
        render(<ConsumptionsForms
            billSelected={billInfo}
            currentStep={4}
            onChangeValuesHandler={onChangeValuesHandlerMock}
            onGoBack={onGoBackMock}
        />, { wrapper: MemoryRouter })
        expect(screen.getByText(billInfo.split(',')[0])).toBeTruthy()
        expect(screen.getByText('Apartamento 501')).toBeTruthy()
        expect(screen.getByText('Apartamento 502')).toBeTruthy()
    })
    test('Should render the bill selected and inputs of the step 5', () => {
        render(<ConsumptionsForms
            billSelected={billInfo}
            currentStep={5}
            onChangeValuesHandler={onChangeValuesHandlerMock}
            onGoBack={onGoBackMock}
        />, { wrapper: MemoryRouter })
        expect(screen.getByText(billInfo.split(',')[0])).toBeTruthy()
        expect(screen.getByText('Local 1')).toBeTruthy()
        expect(screen.getByText('Local 2')).toBeTruthy()
    })
    test('Should change inputs values', () => {
        const { container } = render(<ConsumptionsForms
            billSelected={billInfo}
            currentStep={5}
            onChangeValuesHandler={onChangeValuesHandlerMock}
            onGoBack={onGoBackMock}
        />, { wrapper: MemoryRouter })
        const firstInput = container.querySelectorAll('input')[0]
        const secondInput = container.querySelectorAll('input')[1]
        fireEvent.change(firstInput, { target: { value: '201' } })
        fireEvent.change(secondInput, { target: { value: '202' } })
        expect(firstInput.value).toBe('201')
        expect(secondInput.value).toBe('202')
        expect(onChangeValuesHandlerMock).toHaveBeenCalledTimes(2)
    })
    test('Should execute onGoBackMock', () => {
        const { container } = render(<ConsumptionsForms
            billSelected={billInfo}
            currentStep={5}
            onChangeValuesHandler={onChangeValuesHandlerMock}
            onGoBack={onGoBackMock}
        />, { wrapper: MemoryRouter })
        const firstButton = container.querySelectorAll('button')[0]
        fireEvent.click(firstButton)
        expect(onGoBackMock).toHaveBeenCalled()
    })
})