import { render, screen } from '@testing-library/react';
import { useSelector } from 'react-redux';
import TodoListView from './TodoListView';

const mockAppState = {
  toDo: [
    {
      id: "1",
      isDisplay: true,
      isDone: true,
      isEditing: false,
      value: "1 done",
    },
    {
      id: "2",
      isDisplay: true,
      isDone: false,
      isEditing: false,
      value: "2 not done",
    },
    {
      id: "3",
      isDisplay: true,
      isDone: false,
      isEditing: false,
      value: "3 todo",
    },
  ]
}

// мок редакса
jest.mock("react-redux", () => ({
  // ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
  useDispatch: jest.fn()
}));

describe('ToDoListView', () => {
  beforeEach(() => {
    useSelector.mockImplementation(callback => {
      return callback(mockAppState);
    });
  });
  afterEach(() => {
    useSelector.mockClear();
  });

  test('rendering ToDoListView', () => {
    render(<TodoListView />);

    const toDoListViewEl = screen.getByTestId('todo-list');

    expect(toDoListViewEl).toBeInTheDocument();
  })

  test('rendering children ToDoItem', () => {
    render(<TodoListView />);

    const toDoListViewEl = screen.getByTestId('todo-list');

    expect(toDoListViewEl).toContainElement(screen.getByDisplayValue('1 done'))
    expect(toDoListViewEl).toContainElement(screen.getByDisplayValue('2 not done'))
    expect(toDoListViewEl).toContainElement(screen.getByDisplayValue('3 todo'))
  })
})

