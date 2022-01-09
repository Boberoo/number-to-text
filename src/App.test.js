import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main page', () => {
  render(<App />);
  const header = screen.getByText(/number to text/i);
  expect(header).toBeInTheDocument();
  
});
