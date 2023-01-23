import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import ConsultBill from '../../Pages/ConsultBill';


describe('Test on ConsultBill page', () => {
    test('Should match to snapshot', () => {
        const { container } = render(<ConsultBill verifyNumber={3} />, { wrapper: MemoryRouter });
        expect(container).toMatchSnapshot()
    });
    test('Should search bill data',()=>{
        const { container } = render(<ConsultBill verifyNumber={3} />, { wrapper: MemoryRouter });
        const continueButton = screen.getAllByRole('button')[1]
        fireEvent.click(continueButton)
    })
    test('Should go back',()=>{
        const { container } = render(<ConsultBill verifyNumber={3} />, { wrapper: MemoryRouter });
        const continueButton = screen.getAllByRole('button')[1]
        fireEvent.click(continueButton)
        const backButton = container.querySelectorAll('img')[0]
        fireEvent.click(backButton)
    })
    // test('Should share screnshoot',()=>{
    //     const { container } = render(<ConsultBill verifyNumber={3} />, { wrapper: MemoryRouter });
    //     const continueButton = screen.getAllByRole('button')[1]
    //     fireEvent.click(continueButton)
    //     const shareButton = container.querySelectorAll('img')[1]
    //     fireEvent.click(shareButton)     
    //     screen.debug()
});