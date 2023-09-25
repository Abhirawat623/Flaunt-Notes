import "./notes.css";

export const Notes =()=>{
    return(
        <div className="notes-container">
            <div className="notes-header d-flex dir-row j-space gap-s text ">
                <span className="notes-title">Title:
                <input type='text' className="notes-title-input"/>
                </span>
                <label htmlFor='input-category'>
                    Category:
                    <select>
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
              >
                <option value='none'>None</option>
                <option value='high'>High</option>
                <option value='medium'>Medium</option>
                <option value='low'>Low</option>
              </select>
            </label>
            </div>
            <div className="notes-text-container">
                <textarea className="notes-text" placeholder="Add Text here"></textarea>
            </div>
        </div>
    )
}