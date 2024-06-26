import { TodoId, type Todo as TodoType } from "../types"

interface Props extends TodoType {
    onRemoveTodo: ({id}:TodoId) => void
    onHandleCompleteToDo: ({id,completed}: Pick<TodoType,'id'|'completed'>) => void
}


export const Todo:React.FC<Props> = ({id,title,completed, onRemoveTodo,onHandleCompleteToDo}) =>{
    const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>):void =>{
        onHandleCompleteToDo({
            id,
            completed:event.target.checked
        })
    }
    return(
        <div className="view">
            <input 
                className="toggle"
                type="checkbox"
                checked={completed}
                onChange={handleChangeCheckbox}
                readOnly
            />
            <label>{title}</label>
            <button 
                className="destroy"
                onClick={()=>{onRemoveTodo({id})}}
            />
        </div>
    )
}