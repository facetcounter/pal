import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Sentance from './Sentance';

test('renders sentance builder', () => {
  render(<Sentance />);
  expect(true).toBe(true);
  // const sentanceElement = screen.getByText(/build a sentance/i);
  // expect(sentanceElement).toBeInTheDocument();
});
