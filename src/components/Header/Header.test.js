/* eslint-disable testing-library/no-debugging-utils */
// мок dispatch

// рендер компонента

// переключение всех в выполненные handleToggleAllBtn


import { fireEvent, render, screen } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import Header from './Header';


// мок редакса
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  // useSelector: jest.fn(),
  // useDispatch: jest.fn()
}));

describe('Header', () => {
  // beforeEach(() => {
  //   useSelector.mockImplementation(callback => {
  //     return callback(mockAppState);
  //   });
  // });
  // afterEach(() => {
  //   useSelector.mockClear();
  // });

  test('rendering Header', () => {
    render(<Header />);
    screen.debug();
    const HeaderEl = screen.getByTestId(/header/i);
    expect(HeaderEl).toBeInTheDocument();
  });

  test('click on button toggle all todos status', () => {
    render(<Header />);
    const ButtonEl = screen.getByRole('button')
    expect(ButtonEl).toBeInTheDocument();
    fireEvent.click(ButtonEl)

  })

})


