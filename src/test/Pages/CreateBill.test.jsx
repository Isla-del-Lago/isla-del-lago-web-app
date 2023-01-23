import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import CreateBill from '../../Pages/CreateBill';

describe('Test on Login page', () => {
    test('Should match to snapshot', () => {
        const { container } = render(<CreateBill verifyNumber={3} />, { wrapper: MemoryRouter });
        expect(container).toMatchSnapshot()
    });
    test('Should complete all steps', () => {
        const { container } = render(<CreateBill verifyNumber={3} />, { wrapper: MemoryRouter });
        const startDateInput = container.querySelectorAll('input')[0]
        const endDateInput = container.querySelectorAll('input')[1]
        const discountsInput = container.querySelectorAll('input')[2]
        const cleaningInput = container.querySelectorAll('input')[3]
        const continueButtonInput = container.querySelectorAll('button')[1]
        fireEvent.change(startDateInput, { target: { value: '2022-04-10' } })
        fireEvent.change(endDateInput, { target: { value: '2022-06-10' } })
        fireEvent.change(discountsInput, { target: { value: 11.11 } })
        fireEvent.change(cleaningInput, { target: { value: 22.22 } })
        fireEvent.click(continueButtonInput)
        const crbm3Input = container.querySelectorAll('input')[0]
        const crsbm3Input = container.querySelectorAll('input')[1]
        const secondContinueButtonInput = container.querySelectorAll('button')[1]
        fireEvent.change(crbm3Input, { target: { value: 33.33 } })
        fireEvent.change(crsbm3Input, { target: { value: 44.44 } })
        fireEvent.click(secondContinueButtonInput)
        const AcueCfr$ = container.querySelectorAll('input')[0]
        const AcueCrb$ = container.querySelectorAll('input')[1]
        const AcueCrsb$ = container.querySelectorAll('input')[2]
        const thirdContinueButtonInput = container.querySelectorAll('button')[1]
        fireEvent.change(AcueCfr$, { target: { value: 55.55 } })
        fireEvent.change(AcueCrb$, { target: { value: 66.66 } })
        fireEvent.change(AcueCrsb$, { target: { value: 77.77 } })
        fireEvent.click(thirdContinueButtonInput)
        const AlcaCfr$ = container.querySelectorAll('input')[0]
        const AlcaCrb$ = container.querySelectorAll('input')[1]
        const AlcaCrsb$ = container.querySelectorAll('input')[2]
        const fourContinueButtonInput = container.querySelectorAll('button')[1]
        fireEvent.change(AlcaCfr$, { target: { value: 88.88 } })
        fireEvent.change(AlcaCrb$, { target: { value: 99.99 } })
        fireEvent.change(AlcaCrsb$, { target: { value: 10.01 } })
        fireEvent.click(fourContinueButtonInput)
    });
});