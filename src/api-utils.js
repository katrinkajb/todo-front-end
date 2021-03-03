import request from 'superagent';

const URL = 'https://kb-todos2.herokuapp.com';


export async function getTodos(token) {
    const response = await request
        .get(`${URL}/api/todos`)
        .set('Authorization', token)

    return response.body
}

export async function addTodo(todo, completed, token) {
    const response = await request
    .post(`${URL}/api/todos`)
    .set('Authorization', token)
    .send({ todo, completed })

    return response.body
}

export async function completeTodo(todoId, isCompleted, token) {
    const response = await request
    .put(`${URL}/api/todos/${todoId}`) 
    .set('Authorization', token)
    .send({ completed: isCompleted })

    return response.body
}

export async function signUpUser(email, password) {
    const response = await request
        .post(`${URL}/auth/signup`)
        .send({ email, password })

    return response.body;
}

export async function loginUser(email, password) {
    const response = await request
        .post(`${URL}/auth/signin`)
        .send({ email, password })

    return response.body;
}