import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders the login buttton', () => {
  render(<App />);
  const linkElement = screen.getByText(/login/i);
  expect(linkElement).toBeInTheDocument();
});

test('Renders the register buttton', () => {
  render(<App />);
  const linkElement = screen.getByText(/register/i);
  expect(linkElement).toBeInTheDocument();
});
