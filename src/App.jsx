import Name from './components/Name'
import Add_Todo from './components/Add_Todo'
import TodoItems from './components/TodoItems'
import WelcomeMessage from './components/WelcomeMesssage';
import './App.css';
import { useState } from 'react';

function App() {

  // const todoItemList = [
  //   { name: "Buy Ghee", dueDate: "03/12/2025" },
  //   { name: "Buy Daal", dueDate: "03/16/2025" }
  // ];

  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (newItem, itemDate) => {
    console.log(`New item ${newItem} is added at ${itemDate}`);
    const newItemsList = [...todoItems, { name: newItem, dueDate: itemDate }];
    setTodoItems(newItemsList);
  }


  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (

    <center className='TodoWebContainer'>
     <Name/>
     <Add_Todo onNewItem = {handleNewItem}/>     
     {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
     <TodoItems
        todoItems={todoItems}
        onDeleteClick={handleDeleteItem}
      ></TodoItems>
     
    </center>
  )
}

export default App
