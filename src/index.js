import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import TodoState from './context/TodoState';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <TodoState>
       <App />
    </TodoState>
  
);

