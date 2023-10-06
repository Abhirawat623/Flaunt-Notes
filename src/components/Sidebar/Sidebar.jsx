import React from 'react'
import './Sidebar.css';
export const Sidebar = () => {
  return (
    <div className='sidebar-container'>
      <span className='sidebar-category d-flex dir-col gap-l pad-s'>
        <button className='sidebar-cat-btn'>All</button>
        <button className='sidebar-cat-btn'>Favourite</button>
        <button className='sidebar-cat-btn'>Archieved</button>
        <button className='sidebar-cat-btn'>Trash</button>
      </span>

      <span className='sidebar-datewise d-flex j-center dir-col'>Sorting Order
      <label value='order-new'><input type='radio' id='order-new' name='order'/>   Sort By Newer</label>
      <label value='order-old'><input type='radio' id='order-old' name='order'/>   Sort By Older</label>
      </span>

      <span className='sidebar-cateorywise d-flex j-center dir-col'>Cateory
      <label value='all'><input type='radio' id='all' name='category'/>   All</label>
      <label value='work'><input type='radio' id='work' name='category'/>   Work</label>
      <label value='personal'><input type='radio' id='personal' name='category'/>   Pesronal</label>
      <label value='health'><input type='radio' id='health' name='category'/>   Health</label>
      <label value='education'><input type='radio' id='education' name='category'/>   Education</label>
      </span>

      <span className='sidebar-prioritywise d-flex j-center dir-col'>Cateory
      <label value='all'><input type='radio' id='all' name='priority'/>   All</label>
      <label value='low'><input type='radio' id='low' name='priority'/>   Low</label>
      <label value='medium'><input type='radio' id='medium' name='priority'/>   Medium</label>
      <label value='high'><input type='radio' id='high' name='priority'/>   High</label>
      
      </span>
    </div>
  )
}


