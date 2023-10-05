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
            <div key={index} className="todo-cards">
              <h1>{title}</h1>
              <p>{task}</p>
              <p>{category}</p>
              <p>{priority}</p>
            </div>
          );
        })}
      </section>
    </div>
  )
}
