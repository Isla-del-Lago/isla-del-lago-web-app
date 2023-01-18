import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import ConsumptionsForms from "../../../Components/AddConsumptionsForms/ConsumptionsForms"

describe('Test on SelectBillForm component', () => {
    test('Should render the bill selected and inputs of the step 1', () => {
        const billInfo = '18/08/2022 - 17/10/2022, 10'
        render(<ConsumptionsForms
            billSelected={billInfo}
            currentStep={1}
        />, { wrapper: MemoryRouter })
        expect(screen.getByText(billInfo.split(',')[0])).toBeTruthy()
        expect(screen.getByText('Apartamento 201')).toBeTruthy()
        expect(screen.getByText('Apartamento 202')).toBeTruthy()
    })
    test('Should render the bill selected and inputs of the step 2', () => {
        const billInfo = '18/08/2022 - 17/10/2022, 10'
        render(<ConsumptionsForms
            billSelected={billInfo}
            currentStep={2}
        />, { wrapper: MemoryRouter })
        expect(screen.getByText(billInfo.split(',')[0])).toBeTruthy()
        expect(screen.getByText('Apartamento 301')).toBeTruthy()
        expect(screen.getByText('Apartamento 302')).toBeTruthy()
    })
    test('Should render the bill selected and inputs of the step 3', () => {
        const billInfo = '18/08/2022 - 17/10/2022, 10'
        render(<ConsumptionsForms
            billSelected={billInfo}
            currentStep={3}
        />, { wrapper: MemoryRouter })
        expect(screen.getByText(billInfo.split(',')[0])).toBeTruthy()
        expect(screen.getByText('Apartamento 401')).toBeTruthy()
        expect(screen.getByText('Apartamento 402')).toBeTruthy()
    })
    test('Should render the bill selected and inputs of the step 4', () => {
        const billInfo = '18/08/2022 - 17/10/2022, 10'
        render(<ConsumptionsForms
            billSelected={billInfo}
            currentStep={4}
        />, { wrapper: MemoryRouter })
        expect(screen.getByText(billInfo.split(',')[0])).toBeTruthy()
        expect(screen.getByText('Apartamento 501')).toBeTruthy()
        expect(screen.getByText('Apartamento 502')).toBeTruthy()
    })
    test('Should render the bill selected and inputs of the step 5', () => {
        const billInfo = '18/08/2022 - 17/10/2022, 10'
        render(<ConsumptionsForms
            billSelected={billInfo}
            currentStep={5}
        />, { wrapper: MemoryRouter })
        expect(screen.getByText(billInfo.split(',')[0])).toBeTruthy()
        expect(screen.getByText('Local 1')).toBeTruthy()
        expect(screen.getByText('Local 2')).toBeTruthy()
    })
})