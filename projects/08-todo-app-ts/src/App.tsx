import { useState } from "react"
import { Todos } from "./components/Todos"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { useFilters } from "./hooks/useFilters"
import { useCrud } from "./hooks/useCrud"

const mockTodos = [
  {
    id:'1',
    title: 'Aprender React',
    completed: true
  },
  {
    id:'2',
    title: 'Hacer blog',
    completed: false
  },
  {
    id:'3',
    title: 'Buscar trabajo',
    completed: false
  }
]

const App = ():JSX.Element => {

  const [todos,setTodos] = useState(mockTodos)

  const {handleComplete, handleFilterChange, completedCount, activeCount, filteredTodos, filterSelected} = useFilters({todos,setTodos})

  const {handleRemove, handleRemoveAllComplete, onAddToDo} = useCrud({todos,setTodos})
  
  
  
  return (
    <div className="todoapp">
      <Header onAddToDo={onAddToDo}/>
      <Todos 
        onHandleCompleteToDo={handleComplete}
        onRemoveTodo={handleRemove}
        todos={filteredTodos}
      />
      <Footer 
        completedCount={completedCount}
        activeCount={activeCount} 
        filterSelected={filterSelected} 
        onClearCompleted={handleRemoveAllComplete}
        handleFilterChange={handleFilterChange}/>
    </div>
  )
}

export default App
