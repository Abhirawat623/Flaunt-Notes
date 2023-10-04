import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { TodoProvider } from './components/context/todoContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <TodoProvider>
      <App />
      </TodoProvider>
    </Router>
  </React.StrictMode>
);


