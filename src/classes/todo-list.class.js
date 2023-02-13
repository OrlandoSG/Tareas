import { Todo } from "./todo.class";

export class TodoList{

    constructor(){
        // this.todos = [];
        this.cargarLocalStorage();
    }

    nuevoTodo(todo){
        this.todos.push(todo);
        this.guardarLocalStorage();
    }

    eliminar(id){
      this.todos =  this.todos.filter(todo => todo.id != id);
      this.guardarLocalStorage();
    }

    // cambiar en el array true o false
    marcarCompletado(id){
       for (const todo of this.todos) {
            if(todo.id == id){
                                // si es true cambia a falso
                 todo.completado = !todo.completado;
                 this.guardarLocalStorage();
                 break;
            }
       }
    }

    eliminarCompletados(){
        this.todos =  this.todos.filter(todo => !todo.completado);
        this.guardarLocalStorage(); 
    }

    guardarLocalStorage(){
        // convierte de objeto a json
       localStorage.setItem('todo', JSON.stringify(this.todos));
    }

    cargarLocalStorage(){
        //  if(localStorage.getItem('todo')){
        // //  regresa a objeto 
        //     this.todos = JSON.parse(localStorage.getItem('todo'));
        //     console.log("Cargar Local", this.todos);

        //  }else{
        //      this.todos = [];
        //  }

         this.todos = (localStorage.getItem('todo')) 
                    ?  JSON.parse(localStorage.getItem('todo')) 
                    : [];
    //   antes de instanciarlo 
    //    console.log(this.todos);

        // MAP permite recorrer cada uno de los elementos de los array y retorna todos cambiados
        // this.todos = this.todos.map(Todo.fromJson);
        this.todos = this.todos.map(obj => Todo.fromJson(obj));

        // despues de instanciarlo a objeto
        // console.log(this.todos);
    }

    

}



// [{"tarea":"Aprender JavaScript" ,"id":1676307347992,"completado":true,"creado":"2023-02-13T16:55:47.992Z"},{"tarea":"Aprender Wordpress","id":1676307347992,"completado":false,"creado":"2023-02-13T16:55:47.992Z"},{"tarea":"nuevo","id":1676307350324,"completado":false,"creado":"2023-02-13T16:55:50.324Z"}]