import { render } from '@testing-library/react';
import React from 'react';
import Alert from '../../Components/Alert';

describe('Test on Alert component', () => {
  test('Should match to snapshot', () => {
    const {container}  = render(
      <Alert image='imageSource' title='Titulo' subtitle='SubTitulo' footer='Footer' redirect={false} path='Path to redirect'/>
    );
    expect(container).toMatchSnapshot()
  });
});
