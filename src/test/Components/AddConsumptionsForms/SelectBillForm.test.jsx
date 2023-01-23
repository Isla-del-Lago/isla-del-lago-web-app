import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import SelectBillForm from "../../../Components/AddConsumptionsForms/SelectBillForm"

describe('Test on SelectBillForm component', () => {
    test('Should match to snapshot', () => {
        const {container} = render(<SelectBillForm />, {wrapper: MemoryRouter})
        expect(container).toMatchSnapshot()
    })
})