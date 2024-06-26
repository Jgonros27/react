import { useState } from "react"
import {type FilterValue, type Todo, type useStateTodo } from "../types"
import { TODO_FILTERS } from "../consts"


export function useFilters ({todos,setTodos} : useStateTodo) {

    const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)
  
    const handleComplete = (
      {id,completed}: Pick<Todo,'id' | 'completed'>
    ) : void =>{
      const newTodos = todos.map( todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed
          }
        }
        return todo
      })
      setTodos(newTodos)
    }
  
    const handleFilterChange = (filter: FilterValue) => {
      setFilterSelected(filter)
    }
  
    const activeCount = todos.filter(todo=>!todo.completed).length
    const completedCount = todos.length - activeCount
  
    const filteredTodos = todos.filter(todo => {
      if(filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
      if(filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
      return todo
    })
  
    return {handleComplete, handleFilterChange, completedCount, activeCount, filteredTodos, filterSelected}
    
  }