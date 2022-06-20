/* eslint-disable jest/no-conditional-expect */
import { screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithRedux } from "../../../utils/testUtils/renderWithRedux"
import Filters from "./Filters"

describe('Filters', () => {
  test('filter todos: show All', () => {
    const { store } = renderWithRedux(<Filters />);
    const getState = store.getState;
    const BtnAll = within(screen.getByTestId('all')).getByRole('button');
    expect(BtnAll).toBeInTheDocument();

    // клик по кнопке "показать все"
    userEvent.click(BtnAll);
    // проверка фильтра в сторе
    expect(getState().filterToDo.currentStatus).toBe('all');
    // проверка стейта, что отображаются все тудушки
    getState().toDo.forEach(el => expect(el.isDisplay).toBeTruthy());
    // проверка, что добавился стилизующий класс на элемент
    expect(BtnAll.classList.length).not.toBe(0);
  })

  test('filter todos: show Active', () => {
    const { store } = renderWithRedux(<Filters />);
    const getState = store.getState;
    const BtnActive = within(screen.getByTestId('active')).getByRole('button');
    expect(BtnActive).toBeInTheDocument();

    // клик по кнопке "показать только активные"
    userEvent.click(BtnActive);
    // проверка фильтра в сторе
    expect(getState().filterToDo.currentStatus).toBe('active');
    // проверка стейта, что отображаются только активные
    getState().toDo.forEach(el => {
      !el.isDone
        ? expect(el.isDisplay).toBeTruthy()
        : expect(el.isDisplay).toBeFalsy();
    });
    // проверка, что добавился стилизующий класс на элемент
    expect(BtnActive.classList.length).not.toBe(0);
  })

  test('filter todos: show completed', () => {
    const { store } = renderWithRedux(<Filters />);
    const getState = store.getState;
    const BtnCompleted = within(screen.getByTestId('completed')).getByRole('button');
    expect(BtnCompleted).toBeInTheDocument();

    // клик по кнопке "показать только завершенные"
    userEvent.click(BtnCompleted);
    // проверка фильтра в сторе
    expect(getState().filterToDo.currentStatus).toBe('completed');
    // проверка стейта, что отображаются только завершенные
    getState().toDo.forEach(el => {
      el.isDone
        ? expect(el.isDisplay).toBeTruthy()
        : expect(el.isDisplay).toBeFalsy();
    });
    // проверка, что добавился стилизующий класс на элемент
    expect(BtnCompleted.classList.length).not.toBe(0);
  })
  test('filter todos: delete completed', () => {
    const { store } = renderWithRedux(<Filters />);
    const getState = store.getState;
    const BtnDeleteCompleted = within(screen.getByTestId('deleteCompleted')).getByRole('button');
    expect(BtnDeleteCompleted).toBeInTheDocument();

    // клик по кнопке "удалить завершенные"
    userEvent.click(BtnDeleteCompleted);
    // проверка, что все завершенные удалены из стора
    getState().toDo.forEach(el => expect(el.isDone).toBeFalsy());
    // проверка, что все элементы отображаются на экране
    getState().toDo.forEach(el => expect(el.isDisplay).toBeTruthy());
  })
})