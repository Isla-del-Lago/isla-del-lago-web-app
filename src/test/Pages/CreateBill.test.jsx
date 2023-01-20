import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import CreateBill from '../../Pages/CreateBill';

describe('Test on Login page', () => {
    test('Should match to snapshot', () => {
        const { container } = render(<CreateBill />);
        expect(container).toMatchSnapshot()
    });
    test('Should complete step one', () => {
        render(<CreateBill />);
    });
});