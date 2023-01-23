import { render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import CloseButton from '../../Components/CloseButton';

describe('Test on Loader component', () => {
  test('Should match to snapshot', () => {
    const { container } = render(
      <CloseButton  path='Path to redirect'/>, { wrapper: MemoryRouter }
    );
    expect(container).toMatchSnapshot()
  });
});