import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  jest.mock('react-redux');

  const { getByTestId } = render(<App />);
  const linkElement = getByTestId(/app/i);
  expect(linkElement).toBeInTheDocument();
});
