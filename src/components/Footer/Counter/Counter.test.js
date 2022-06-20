//рендер

import { screen } from "@testing-library/react";
import { renderWithRedux } from "../../../utils/testUtils/renderWithRedux"
import Counter from "./Counter"

describe('Counter', () => {
  test('count amount of undone todos', () => {
    const { store } = renderWithRedux(<Counter />);
    const getState = store.getState;

    const CounterEl = screen.getByTestId('counter');
    expect(CounterEl).toBeInTheDocument();

    // соответствует ли счетчик кол-ву незавершенных тудушек
    const amountOfUndoneTodos = getState().toDo.reduce((acc, curr) => {
      curr.isDone === false && acc++
      return acc
    }, 0);
    expect(Number(CounterEl.textContent)).toBe(amountOfUndoneTodos);
  })
})