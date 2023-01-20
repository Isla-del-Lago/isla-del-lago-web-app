import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import AddConsumption from '../../Pages/AddConsumption';
import ConsultBill from '../../Pages/ConsultBill';


describe('Test on AddConsumption page', () => {
    test('Should match to snapshot', () => {
        const { container } = render(<AddConsumption />);
        expect(container).toMatchSnapshot()
    });
});