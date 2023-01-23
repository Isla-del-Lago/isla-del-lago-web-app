import { render } from '@testing-library/react';
import React from 'react';
import Loader from '../../Components/Loader';

describe('Test on Loader component', () => {
    test('Should match to snapshot', () => {
        const { container } = render(
            <Loader />
        );
        expect(container).toMatchSnapshot()
    });
});