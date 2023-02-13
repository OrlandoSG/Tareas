export class Todo{
    // realizar una nueva Instancia cuando viene de local storage y se pierde los metodos
    // recibe el objeto del local Storage
    // permite recuperar los metodos de esta clase
    static fromJson({id, tarea, completado, creado}){
        const tempTodo = new Todo(tarea);

        tempTodo.id         = id;
        // tempTodo.tarea      = tarea;
        tempTodo.completado = completado;
        tempTodo.creado     = creado;
        
        return tempTodo;
    }


    constructor(tarea){
        this.tarea = tarea;

        this.id = new Date().getTime();
        this.completado = false;
        this.creado = new Date();
    }




}