import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import ConsultBill from '../../Pages/ConsultBill';


describe('Test on ConsultBill page', () => {
    test('Should match to snapshot', () => {
        const { container } = render(<ConsultBill />);
        expect(container).toMatchSnapshot()
    });
});