import Name from './components/Name'
import Add_Todo from './components/Add_Todo'
import Todo_Item1 from './components/Todo_Item1'
import Todo_Item2 from './components/Todo_Item2'
import './App.css';

function App() {

  return (

    <center className='TodoWebContainer'>
     <Name/>
     <Add_Todo/>     
     <Todo_Item1/>
     <Todo_Item2/>
    </center>
  )
}

export default App
