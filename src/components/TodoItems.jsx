import { useContext } from 'react';
import TodoItem from './TodoItem'
import { TodoItemContext } from '../store/TodoItemsContext';

const TodoItems = () => {

  const  contextObj  = useContext(TodoItemContext);
  const  todoItems = contextObj.todoItems;
  const  deleteItem = contextObj.deleteItem;

    return (
      <div className='Item'>
        {todoItems.map((item) => (
          <TodoItem
            todoDate={item.dueDate}
            todoName={item.name}
            onDeleteClick={deleteItem}
          />
        ))}
      </div>
    );
  };
  
  export default TodoItems;