import { render, screen } from '@testing-library/react';
import React from 'react';
import ScreenShotPreview from '../../../Components/ConsultBill/ScreenShotPreview';
describe('Test on ScreenShotPreview component', () => {
    test('Should match to snapshot', () => {
        const { container } = render(<ScreenShotPreview />)
        expect(container).toMatchSnapshot()
    })
})