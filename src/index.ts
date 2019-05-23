import './main.css'

import * as t from 'io-ts'
import { ThrowReporter } from "io-ts/lib/ThrowReporter";

const APITodo = t.interface({
    completed: t.boolean,
    id: t.number,
    title: t.string,
    userId: t.number,
})
const APITodos = t.array(APITodo)

type Todo = {
    completed: boolean;
    id: number;
    title: string;
    userId: number;
}

function fetchTodos(url: string): Promise<Array<Todo> | Error> {
    return new Promise((resolve, reject) => {
        return fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw new Error("Bad response code from the api: " + res.status)
                }
                return res
            })
            .then(res => {
                return res.json()
            })
            .then(json => {
                const result = APITodos.decode(json)
                console.log(result)
                ThrowReporter.report(result)
                return json
            })
            .then(resolve)
            .catch(reject)
    })
}

fetchTodos('https://jsonplaceholder.typicode.com/todos/1')
    .then(handleTodos)
    .catch(handleError)


function handleTodos(todos: Array<Todo>): void {
    console.log(todos)
}

function handleError(e: Error): void {
    console.error(e)
}


