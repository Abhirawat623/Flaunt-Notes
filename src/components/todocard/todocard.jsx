import React from 'react';
import './todocard.css';
import { useTodo } from "../../components/context/index";
export const Todocard = () => {
    const { todoList} = useTodo();
  return (
    <div>
        <section className="todo-card">
        {todoList.map(({ title, task, category, priority }, index) => {
          return (
            <div key={index} className="todo-cards ">
              <h3 className='todo-components'>Title:  <span className='todo-component'>{title}</span></h3>
              <h3 className='todo-components'>Cateory:<span  className='todo-component'>{category}</span></h3>
              <h3 className='todo-components'>Priority:<span  className='todo-component'>{priority}</span></h3>
              <h3 className='todo-components'>Note:  <span className='todo-note'>{task}</span></h3>
            </div>
          );
        })}
      </section>
    </div>
  )
}
