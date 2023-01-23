import { render, screen } from '@testing-library/react';
import React from 'react';
import ConsumptionsTable from '../../../Components/ConsultBill/ConsumptionsTable';
describe('Test on ConsumptionsTable component', () => {
    const nameOfApartmentSelected = 'Apartamento 201'
    const billDetails = {
        "residential_basic_cubic_meters": 0.0,
        "residential_basic_superior_cubic_meters": 0.0,
        "discounts": 2150.800048828125,
        "residential_fixed_aqueduct": 925.8580322265625,
        "residential_basic_aqueduct": 0.0,
        "residential_basic_superior_aqueduct": 0.0,
        "residential_fixed_sewerage": 440.0799865722656,
        "residential_basic_sewerage": 0.0,
        "residential_basic_superior_sewerage": 0.0,
        "cleaning": 0.0,
        "total": 0.0
    }
    test('Should render correct name of apartment', () => {
        render(<ConsumptionsTable
            billDetails={billDetails}
            nameOfApartmentSelected={nameOfApartmentSelected}
        />)
        expect(screen.getByText(nameOfApartmentSelected)).toBeTruthy()
    })
    test('Should render all "p" tags', () => {
        const { container } = render(<ConsumptionsTable
            billDetails={billDetails}
            nameOfApartmentSelected={nameOfApartmentSelected}
        />)
        expect(container.querySelectorAll('p').length).toBe(16)
    })
    test('Should render all subtitles', () => {
        render(<ConsumptionsTable
            billDetails={billDetails}
            nameOfApartmentSelected={nameOfApartmentSelected}
        />)
        expect(screen.getByText('Acueducto')).toBeTruthy()
        expect(screen.getByText('Alcantarillado')).toBeTruthy()
        expect(screen.getByText('Otros cobros')).toBeTruthy()
    })
})