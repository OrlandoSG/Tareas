import './style.css';

import {Todo, TodoList, crearTodoHtml} from './classes';

// hacemos una instancia que esta en todo list
export const todoList = new TodoList();


// llenamos en html desde localStorage
// llamamos a la instancia y a la variable
// llamamos a la funcion se encuentra en componentes
// todoList.todos.forEach( crearTodoHtml );  ===>
//  es igual a lo de abajo cuando solo se envia un argumento
todoList.todos.forEach(todo => crearTodoHtml(todo) );


 



