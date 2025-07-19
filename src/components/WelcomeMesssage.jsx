import { useContext } from "react";
import styles from "./WelcomeMessage.module.css";
import { TodoItemContext } from "../store/TodoItemsContext";

const WelcomeMessage = () => {

  const  contextObj  = useContext(TodoItemContext);
  const  todoItems = contextObj.todoItems;

  return todoItems.length === 0 &&  <p  className={styles.welcome}>Enjoy Your Day</p>;
};

export default WelcomeMessage;