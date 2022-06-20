import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRedux } from '../../utils/testUtils/renderWithRedux';
import Header from './Header';


// мок редакса

describe('Header', () => {
  test('click on button toggle all todos status', () => {
    const { store } = renderWithRedux(<Header />)
    const getState = store.getState;

    const ButtonEl = screen.getByRole('button')
    expect(ButtonEl).toBeInTheDocument();

    // переключает все тудушки в статус "выполнены"
    userEvent.click(ButtonEl)
    getState().toDo.forEach(el => el.isDone === true);
    // переключает все тудушки в статус "не выполнены"
    userEvent.click(ButtonEl)
    getState().toDo.forEach(el => el.isDone === false);
  })

})


