import './main.css'

/* 

Inline Type Declarations

*/

// primitive types variables
const num: number = 12
const str: string = "hi"

// any keyword
const notSure: any = null
const hmm: any = 22222.12

// arrays
const arr: any[] = [undefined, () => false, "15"]
const arrNums: number[] = [15, 16, 17]

// objects
const obj: { firstName: string } = {
    firstName: "Mitch"
}

// functions
function sum(numOne: number, numTwo: number): number {
    return numOne + numTwo
}

function doesNotReturn(): void {
    console.log(5)
}

/* 

Creating our own types

*/

// union types
type strOrNum = string | number
const instance: strOrNum = "true"

// arrays
type arrOfStrings = string[] | number[]
const arrInst: string[] | number[] = [8]

// objects
/*

{
    firstName: string;
    lastName: string;
    age: number;
}

*/

interface IUserInfo {
    firstName: string;
    lastName: string;
    age: number;
}

const userInfo: IUserInfo = {
    firstName: "Mitch",
    lastName: "Cravens",
    age: 28
}

// complex functions 

fetchTodos('https://jsonplaceholder.typicode.com/todos/1')
    .then(handleTodos)
    .catch(handleError)

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
                return json
            })
            .then(resolve)
            .catch(reject)
    })
}


function handleTodos(todos: Array<Todo>): void {
    console.log(todos)
}

function handleError(e: Error): void {
    console.error(e)
}


