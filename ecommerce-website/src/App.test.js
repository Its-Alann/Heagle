import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders the login buttton', () => {
  render(<App />);
  const linkElement = screen.getByText(/login/i);
  expect(linkElement).toBeInTheDocument();
});