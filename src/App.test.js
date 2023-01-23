import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
describe('Test on App.js', () => {
  test('renders learn react link', () => {
    render(<App />);
    const appTitle = screen.getByText("Por favor ingresa para utilizar la aplicacion");
    expect(appTitle).toBeInTheDocument();
  })
  test('Should react to events',()=>{
    fireEvent.wheel(document)
    fireEvent.click(document.body)
  })
});
