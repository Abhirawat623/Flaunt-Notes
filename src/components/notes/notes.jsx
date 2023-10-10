import { useTodo } from "../context/todoContext";
import "./notes.css";

export const Notes =()=>{
           const {todoDispatch, category,priority, task, title, todoList} = useTodo();
           const handleTitle = (event)=> {
                todoDispatch({
                    type: 'SET_TITLE',
                    payload: event.target.value
                })
           }
           const handleCategory = (event)=> {
            todoDispatch({
                type: 'SET_CATEGORY',
                payload: event.target.value
            })
           }
           const handlePriority = (event)=> {
            todoDispatch({
                type: 'SET_PRIORITY',
                payload: event.target.value
            })
           }
          const handleTask = (event)=> {
            todoDispatch({
                type: 'SET_TASK',
                payload: event.target.value
            })
          }

        //   const handleSaveAll =(event)=>{
        //     event.preventDefault();
        //     todoDispatch({
        //         type: 'TODO_Array',
        //         payload: [...todoList, {category, title, task, priority}]
        //     })
        //   }
          const handleSaveAll = (event) => {
            // Dispatch an action to add a new todo to the state
            event.preventDefault();
            todoDispatch({
              type: 'TODO_ARRAY',
              payload: {
                title,
                category,
                priority,
                task,
              },
            
            });
            localStorage.setItem('title',title)
            localStorage.setItem('category',category)
            localStorage.setItem('priority',priority)
            localStorage.setItem('task',task)
          
            todoDispatch({
                type: 'CLEAR_ALL'
            })
          };
          
    return(
        <div className="notes-container">
            <div className="notes-header d-flex dir-row j-space gap-s text ">
                <span className="notes-title">Title: 
                {console.log(todoList)}
                <input type='text' className="notes-title-input" value={title} onChange={(e) => todoDispatch({ type: 'SET_TITLE', payload: e.target.value })} />
                </span>
                <label htmlFor='input-category' >
                    Category: 
                    <select value={category} onChange={(e) => todoDispatch({ type: 'SET_CATEGORY', payload: e.target.value })} >
                        <option value='none'>None</option>
                        <option value='work'>Work</option>
                        <option value='personal'>Personal</option>
                        <option value='health'>Health</option>
                        <option value='education'>Education</option>
                    </select>
                </label>
                <label htmlFor='input-priority'>
              Priority:
              <select
                id='input-priority'
                name='priority'
                className='priority'
                placeholder='Add Priority'
                value={priority}
              onChange={(e)=> todoDispatch({type: 'SET_PRIORITY', payload: e.target.value})}
              >
                <option value='none'>None</option>
                <option value='high'>High</option>
                <option value='medium'>Medium</option>
                <option value='low'>Low</option>
              </select>
            </label>
            </div>
            <div className="notes-text-container" >
                <textarea className="notes-text" placeholder="Add Text here"  value={task} onChange={(e) => todoDispatch({ type: 'SET_TASK', payload: e.target.value })}></textarea>
            </div>
            <button className="save-btn" onClick={handleSaveAll}>Save</button>
        </div>
    )
}