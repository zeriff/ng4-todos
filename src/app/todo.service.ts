export class TodoService {
    todoList : {
        title: string,
        done: boolean
    }[] = [];

    createTodo(value : string) {
        this
            .todoList
            .push({title: value, done: false});
    }

    deleteTodo(index : number) {
        this
            .todoList
            .splice(index, 1);
    }
}