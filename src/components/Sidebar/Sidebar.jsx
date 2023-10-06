import React from 'react'
import './Sidebar.css';
export const Sidebar = () => {
  return (
    <div className='sidebar-container'>
      <ul className='sidebar-category'>
        <li>All</li>
        <li>Favourite</li>
        <li>Archieved</li>
        <li>Trash</li>
      </ul>
      <span className='sidebar-datewise d-flex j-center dir-col'>Sorting Order
      <label value='order'><input type='radio' id='order'/>   Sort By Newer</label>
      <label value='order'><input type='radio' id='order'/>   Sort By Older</label>
      </span>
    </div>
  )
}


