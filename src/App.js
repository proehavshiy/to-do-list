import React, { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import TodoListView from './components/TodoListView/TodoListView';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {

  const [arrOfToDoItems, setArrOfToDoItems] = useLocalStorage('list', [])

  console.log('arrOfToDoItems:', arrOfToDoItems);

  return (
    <div className="App">
      <section className="todoapp">
        <Header
          setArrOfToDoItems={setArrOfToDoItems}
          arrOfToDoItems={arrOfToDoItems}
        />
        <section id="main">
          <TodoListView
            arrOfToDoItems={arrOfToDoItems}
          />
        </section>
        <Footer />
      </section>
    </div>
  );
}

export default App;
