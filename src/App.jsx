import Name from './components/Name'
import Add_Todo from './components/Add_Todo'
import TodoItems from './components/TodoItems'
import WelcomeMessage from './components/WelcomeMesssage';
import './App.css';
import { useState } from 'react';
import { TodoItemContext } from './store/TodoItemsContext';

function App() {

  // const todoItemList = [
  //   { name: "Buy Ghee", dueDate: "03/12/2025" },
  //   { name: "Buy Daal", dueDate: "03/16/2025" }
  // ];

  const [todoItems, setTodoItems] = useState([]);

  const addNewItem = (newItem, itemDate) => {
    console.log(`New item ${newItem} is added at ${itemDate}`);
    const newItemsList = [...todoItems, { name: newItem, dueDate: itemDate }];
    setTodoItems(newItemsList);
  }


  const deleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <TodoItemContext.Provider value={{ todoItems: todoItems, addNewItem: addNewItem, deleteItem: deleteItem}}>
      <center className='TodoWebContainer'>
        <Name />
        <Add_Todo  />
        <WelcomeMessage></WelcomeMessage>
        <TodoItems
         
        ></TodoItems>
      </center>
    </TodoItemContext.Provider>

  )
}

export default App
