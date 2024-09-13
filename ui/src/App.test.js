import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './App';

test('renders sentance builder', () => {
  render(<App />);
  const sentanceElement = screen.getByText(/build a sentance/i);
  expect(sentanceElement).toBeInTheDocument();
});
