import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import AddConsumption from '../../Pages/AddConsumption';


describe('Test on AddConsumption page', () => {
    test('Should match to snapshot', () => {
        const { container } = render(<AddConsumption verifyNumber={3} />, { wrapper: MemoryRouter });
        expect(container).toMatchSnapshot()
    });
    // test('Should complete all steps',()=>{
    //     const { container } = render(<AddConsumption verifyNumber={3} />, { wrapper: MemoryRouter });
    //     const continueButton = container.querySelectorAll('button')[1]
    //     fireEvent.click(continueButton)
    // const Apto1Input = container.querySelectorAll('input')[0]
    //     screen.debug()
    // })
});