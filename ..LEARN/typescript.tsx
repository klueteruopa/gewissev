// typealias für unions
// GROß-schreiben 
type Status = "open" | "close";

// nur für objekte gedacht <TData> nur wenn Generics verwendet werden sollen
interface ToDo<TData> {
    description: string;
    id: string | number;
    status: Status;
    assignee?: string;
    // Falls Interface nicht vordefiniert werden soll: Generic
    data: TData;
}

interface MetaData {
    date: number;
}

const todo: ToDo<MetaData> = {
    description: "hi",
    id: 12,
    status: "open",
    data: {
        date: 120322
    }
};

// ------------ SONSTIGES

// einfache Typen braucht es eigentlich nicht
let text: string = "das ist ein text";

// Rückgabewert ist optional
const add = function (left: number, right: number) : number {
    return left + right;
}

// unknow -> unknow mit IF mit type of abfragen
const print_text = function (value: unknown) : void {
    // if (value type of String) ...
}

// Funktionen, die nie einen gültigen Rückgabewert ausgeben -> never
const print_error = function () : never {
    throw new Error();
}

// MODULE

/*
Pro Typ, Interface -> 1ne Datei mit Import & Export
z.B. Status.ts

----  type Status2 = 'open' | 'close';
----  export { Staus2 }

*/

// https://definitelytyped.org/ --> Module mit Typen finden für Packages


// CLASSEN

class ToDoList<TData> {
    private todos: ToDo<TData>[];

    public constructor () {
        this.todos = [];    // hier muss ich keinen Type angeben
    }

    public note (description: string, data: TData): string {
        const id = "123";

        const todo: ToDo<TData> = {
            id,
            description,
            status: "open",
            data
        }

        this.todos.push(todo);

        return id;
    }

    public edit (id: string, description: string): void {
        
        const todo = this.todos.find(todo => todo.id === id);

        if (!todo) {
            todo
            throw new Error('Todo not found');
        }

        todo.description = description;
    }
}

// https://definitelytyped.org/

