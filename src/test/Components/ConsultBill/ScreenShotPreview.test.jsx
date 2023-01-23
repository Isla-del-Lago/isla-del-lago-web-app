import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import ScreenShotPreview from '../../../Components/ConsultBill/ScreenShotPreview';
describe('Test on ScreenShotPreview component', () => {
    test('Should match to snapshot', () => {
        const { container } = render(<ScreenShotPreview />)
        expect(container).toMatchSnapshot()
    })
    test('Should execute downloadHandler', () => {
        const { container } = render(<ScreenShotPreview />)
        const whatsappIcon = container.querySelectorAll('img')[1]
        fireEvent.click(whatsappIcon)
    })
    test('Should execute shareHandler', () => {
        const { container } = render(<ScreenShotPreview />)
        const downloadIcon = container.querySelectorAll('img')[2]
        fireEvent.click(downloadIcon)
    })
})