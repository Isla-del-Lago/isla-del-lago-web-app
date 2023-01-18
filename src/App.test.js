import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText("Por favor ingresa para utilizar la aplicacion");
  expect(linkElement).toBeInTheDocument();
});
