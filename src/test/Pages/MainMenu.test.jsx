import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import MainMenu from '../../Pages/MainMenu';

describe('Test on Login page', () => {
    test('Should match to snapshot', () => {
        const { container } = render(<MainMenu />);
        expect(container).toMatchSnapshot()
    });
});