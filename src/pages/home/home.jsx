import './home.css';
import {Notes,Navbar} from '../../components/index';
import { useTodo } from '../../components/context/todoContext';
export const Home =()=>{
  const {todoList, todoDispatch, category,priority, task, title} = useTodo();
  console.log(todoList)
    return(<>
      <Navbar/>
      <Notes/>
      {
        console.log(todoList)
      }
      <section className='todo-card'>
      {
       todoList.map(({title, task,category,priority}, index)=> {
        return (
          <div key={index} className='todo-cards'>
          <h1>{title}</h1>
          <p>{task}</p>
          <p>{category}</p>
          <p>{priority}</p>
        </div>
        )
          
       })
      }
      </section>
    
      </>

    )
}