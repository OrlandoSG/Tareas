import { Todo } from "../classes";
import { todoList } from "..";

const lista = document.querySelector('.todo-list');
const textInput = document.querySelector('.new-todo');
const btnBorrar = document.querySelector('.clear-completed');
const ulFiltros = document.querySelector('.filters');
const anchorFiltro = document.querySelectorAll('.filtro');

// funcion
export const crearTodoHtml = (todo) =>{

    const htmlTodo = ` <li class="${ (todo.completado)? 'completed' : ''}" data-id="${todo.id}">
						<div class="view">
							<input class="toggle" type="checkbox" ${ (todo.completado)? 'checked' : ''}>
							<label>${todo.tarea}</label>
							<button class="destroy"></button>
						</div>
						<input class="edit" value="Create a TodoMVC template">
					</li>
    `;

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;
    lista.append(div.firstElementChild);

    return div.firstElementChild;
}



// eventos
textInput.addEventListener('keyup', (e)=>{

	 if(e.keyCode === 13 && textInput.value !== ""){
		
		const nuevoTodo = new Todo(textInput.value);
         todoList.nuevoTodo(nuevoTodo);
		 crearTodoHtml(nuevoTodo);
		 textInput.value = '';
		// console.log(textInput.value.length);
	 }
	// console.log(e);
})


// marcar tarea completada
lista.addEventListener('click', (e)=>{

    const nombreElemento =  e.target.localName; //input, label, button
	const todoElemento   = e.target.parentElement.parentElement; // seleccionar a los padres de la etiqueta
	const todoId         = todoElemento.getAttribute('data-id'); //acceder al valor de su atributo

	if(nombreElemento.includes('input')){
		// poner en true o false en el array
		todoList.marcarCompletado(todoId);
		// si tiene la clase lo quita , si no tiene lo agrega
		todoElemento.classList.toggle('completed')

	}else if(nombreElemento.includes('button')){
		// poner en true o false en el array
		todoList.eliminar(todoId);
		// si tiene la clase lo quita , si no tiene lo agrega
		todoElemento.remove();
	}
})


btnBorrar.addEventListener('click', ()=>{
	// eliminar del Array
   todoList.eliminarCompletados();
 
//    recorrer todas las tareas de abajo hacia arriaba
   for (let i = lista.children.length -1 ; i >= 0; i--) {

	const elemento = lista.children[i];
	// verifica cual tiene la clase completed
	  if(elemento.classList.contains('completed')){
		lista.removeChild(elemento);
	  }
   }

});


// ejecuta 
ulFiltros.addEventListener('click', (e)=>{
	console.log(e.target.text);

	// filtramos el click por tipo de enlace que presiono, Todos, completados, Pendientes 
	const filtro = e.target.text;

	// si el filtro no tiene nada retorna nada y ahi termina
	if(!filtro) {return;}

	anchorFiltro.forEach(element => element.classList.remove('selected'));

	e.target.classList.add('selected');

	// recorremos cada uno de las tareas agregadas
	for (const elemento of lista.children) {

		// removemos de cada uno de las tareas el hidden, si no es ni pendiente ni completado el boton que presiones
		elemento.classList.remove('hidden');

		// verificamos que cada uno de las tareas tengan la clase completed
		const compleado = elemento.classList.contains('completed');

		// evaluamos si que se presiono el boton la varibale filtro viene con el texto Pendinte
		switch(filtro){
			case 'Pendiente':
				// presionas el boton pendiente vamos a filtran todos las tareas 
				// que no tienen la clase completed, y con hidden eliminamos a las que tienen
				// la clase completed
				if(compleado){
					elemento.classList.add('hidden');
				}
				break;


				// boton completamos filtramos todos los que tienen la clase completed
				// y agregamos hidden a las tareas que no tienen la clase completed
			case 'Completados':
				if(!compleado){
					elemento.classList.add('hidden');
				}
				break;

		}

		// si no es ninguna no hara nada solo removera todas la clases de hidden
				
	}

})