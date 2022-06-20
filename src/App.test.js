import { render, screen } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import App from './App';


// мок редакса
jest.mock("react-redux", () => ({
  // ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
  useDispatch: jest.fn()
}));

describe('App', () => {
  // beforeEach(() => {
  //   useSelector.mockImplementation(callback => {
  //     return callback(mockAppState);
  //   });
  // });
  // afterEach(() => {
  //   useSelector.mockClear();
  // });

  test('rendering App', () => {
    render(<App />);
    const AppEl = screen.getByTestId('app');
    expect(AppEl).toBeInTheDocument();
  });

})


