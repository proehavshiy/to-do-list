import React, { useEffect } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import TodoListView from './components/TodoListView/TodoListView';
import { changeEditingMode } from './redux/slices/toDoSlice';
import { useDispatch } from 'react-redux';

// constants
import { EDIT_INPUT_ID } from './constants/constants';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const closeToDoEditingMode = (e) => {
      // if click event is out of the ToDo editing input change isEditing status to false in all ToDos
      if (e.target.id !== EDIT_INPUT_ID) {
        dispatch(changeEditingMode({ changeAll: true }))
      }
    }
    window.addEventListener('click', closeToDoEditingMode)
    return () => { window.removeEventListener('click', closeToDoEditingMode) }
  }, [])

  return (
    <div className="App">
      <section className="todoapp">
        <Header />
        <section id="main">
          <TodoListView />
        </section>
        <Footer />
      </section>
    </div>
  );
}



export default (App);
