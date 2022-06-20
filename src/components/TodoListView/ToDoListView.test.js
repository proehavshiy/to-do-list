import { screen } from '@testing-library/react';
import TodoListView from './TodoListView';
import { renderWithRedux } from '../../utils/testUtils/renderWithRedux';

describe('ToDoListView', () => {
  test('rendering children ToDoItem', () => {
    renderWithRedux(<TodoListView />);

    const toDoListViewEl = screen.getByTestId('todo-list');
    const toDoItems = screen.getAllByRole('listitem')

    // проверка рендеринга 
    expect(toDoListViewEl).toBeInTheDocument();
    toDoItems.forEach(el => expect(el).toBeInTheDocument())
  })
})

