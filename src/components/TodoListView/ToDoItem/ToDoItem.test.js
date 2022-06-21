/* eslint-disable jest/no-conditional-expect */
import { screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithRedux } from "../../../utils/testUtils/renderWithRedux";
import ToDoItem from "./ToDoItem";

const mockToDo = {
  id: 1,
  isDone: false,
  isDisplay: true,
  isEditing: false,
  value: 'mock todo'
};

describe('ToDoItem', () => {
  const template = (
    <ul>
      <ToDoItem
        toDo={mockToDo}
        key={mockToDo.id}
      />
    </ul>
  );
  test('render ToDoItem', () => {
    renderWithRedux(template);

    const ToDoItem = screen.getByRole('listitem');
    expect(ToDoItem).toBeInTheDocument();
  })
  test('change todo name', () => {
    const { store } = renderWithRedux(template);
    const getState = store.getState;

    const label = screen.getByTestId('label');
    const editInput = screen.getByRole('textbox');
    expect(label).toBeInTheDocument();
    expect(editInput).toBeInTheDocument();

    // проверка изменения названия туду
    userEvent.dblClick(label);
    // проверка изменения стейта isEditing на true в редакс
    getState().toDo.forEach(el => {
      if (el.id === 1) expect(el.isEditing).toBeTruthy();
    });
    userEvent.clear(editInput);
    expect(editInput.value).toBe('');
    userEvent.type(editInput, 'my new test todo');
    expect(editInput.value).toBe('my new test todo');
    // изменение названия в туду
    userEvent.keyboard("{enter}");
    // проверка нового названия в стейте редакс
    getState().toDo.forEach(el => {
      if (el.id === 1) expect(el.value).toBe('my new test todo')
    });
    // проверка изменения стейта isEditing на false в редакс
    getState().toDo.forEach(el => {
      if (el.id === 1) expect(el.isEditing).not.toBeTruthy();
    });
  })
  test('change checkbox state', () => {
    const { store } = renderWithRedux(template);
    const getState = store.getState;

    const checkbox = screen.getByTestId('checkbox');
    expect(checkbox).toBeInTheDocument();

    // отметить туду как выполненный
    // проверка начального состояния, что не выполнен
    expect(checkbox.checked).toEqual(false)
    // проверка начального состояния в стейте, что не выполнен
    getState().toDo.forEach(el => {
      if (el.id === 1) expect(el.isDone).not.toBeTruthy()
    });
    fireEvent.change(checkbox);
    userEvent.click(checkbox);
    getState().toDo.forEach(el => {
      if (el.id === 1) expect(el.isDone).toBeTruthy()
    });
  })
  test('delete todo', () => {
    const { store } = renderWithRedux(template);
    const getState = store.getState;

    const deleteBtn = screen.getByTestId('removeBtn');
    expect(deleteBtn).toBeInTheDocument();

    // проверка удаления тудушки из стейта по id
    userEvent.click(deleteBtn)
    getState().toDo.forEach(el => {
      expect(el.id).not.toBe(1);
    });
  })
})