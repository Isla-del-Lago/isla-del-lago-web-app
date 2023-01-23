import { fireEvent, render } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import ButtonsContainer from "../../Components/ButtonsContainer"

describe('Test on ButtonsContainer component', () => {
    test('Should render an "a" tag', () => {
        const { container } = render(<ButtonsContainer textButton1="Cancelar" textButton2="Continuar" path='Path to redirect' />, { wrapper: MemoryRouter })
        const href = container.querySelector('a')
        expect(href).toBeTruthy()
    })
    test('Should render an "a" tag', () => {
        const { container } = render(<ButtonsContainer textButton1="Regresar" textButton2="Continuar" />, { wrapper: MemoryRouter })
        const href = container.querySelector('a')
        expect(href).not.toBeTruthy()
    })
    test('Should execute onFirstOptionHandler', () => {
        const onFirstOptionHandlerMock = jest.fn()
        const { container } = render(<ButtonsContainer textButton1="Regresar" textButton2="Continuar" onFirstOptionHandler={onFirstOptionHandlerMock} />, { wrapper: MemoryRouter })
        const firstButton = container.querySelectorAll('button')[0]
        fireEvent.click(firstButton)
        expect(onFirstOptionHandlerMock).toHaveBeenCalled()
    })
})