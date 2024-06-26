import { type TodoId, type TodoTitle,type useStateTodo } from "../types";
  
export function useCrud({todos, setTodos}: useStateTodo) {

    const handleRemove = ({id}: TodoId ) :void => {
      const newTodos = todos.filter(todo=>todo.id != id)
      setTodos(newTodos);
    }
  
    const handleRemoveAllComplete = ():void =>{
      const newTodos = todos.filter(todo => !todo.completed )
      setTodos(newTodos)
    }
    
    const onAddToDo = ({title}: TodoTitle): void =>{
      const newTodo = {
        title,
        id: crypto.randomUUID(),
        completed: false
      }
      const newTodos = [...todos, newTodo]
      setTodos(newTodos)
    }


    return {handleRemove, handleRemoveAllComplete, onAddToDo}
  }