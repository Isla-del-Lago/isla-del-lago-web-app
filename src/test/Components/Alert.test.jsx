import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Alert from '../../Components/Alert';

describe('Test on Alert component', () => {
  test('Should match to snapshot', () => {
    const { container } = render(
      <Alert image='imageSource' title='Titulo' subtitle='SubTitulo' footer='Footer' redirect={true} path='Path to redirect' />, { wrapper: MemoryRouter }
    );
    expect(container).toMatchSnapshot()
  });
  test('Should close alert', () => {
    const onCloseAlertMock = jest.fn()
    const { container } = render(
      <Alert image='imageSource' title='Titulo' subtitle='SubTitulo' footer='Footer' redirect={false} path='Path to redirect' onCloseAlert={onCloseAlertMock} />, { wrapper: MemoryRouter }
    );

    fireEvent.click(container.getElementsByClassName('alert-footer')[0])
    expect(onCloseAlertMock).toHaveBeenCalled()
  })
});