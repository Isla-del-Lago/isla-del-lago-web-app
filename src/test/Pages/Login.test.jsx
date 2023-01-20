import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Login from '../../Pages/Login';


describe('Test on Login page', () => {
    test('Should match to snapshot', () => {
        const { container } = render(<Login />);
        expect(container).toMatchSnapshot()
    });
    test('Should change inputs', () => {
        render(<Login />);
        const emailInput = screen.getByPlaceholderText('Correo')
        const passwordInput = screen.getByPlaceholderText('Contraseña')
        const form = screen.getByRole('form')
        fireEvent.change(emailInput, { target: { value: 'admin@isla-del-lago.com' } })
        fireEvent.change(passwordInput, { target: { value: 'Prueba123' } })
        expect(passwordInput.value).toBe('Prueba123')
    })
});