import React, { Component } from 'react';
import '../App.css'; 
import { getTodos, addTodo, completeTodo } from '../api-utils.js';

export default class TodoPage extends Component {
    state= {
        todos: [],
        todo: '',
        completed: false
    }
    
    componentDidMount = async () => {
        await this.fetchTodos();
    }

    fetchTodos = async () => {
        const todos = await getTodos(this.props.user.token);

        this.setState({ todos });
    }

    handleSubmit = async e => {
        e.preventDefault();

        await addTodo(this.state.todo, this.state.completed, this.props.user.token);

        await this.fetchTodos();

        this.setState({ todo: '' })
    }

    handleTodoChange = e => {
        this.setState({ todo: e.target.value, completed: false })
    }

    handleComplete = async(todoId) => {
        this.setState( this.state.completed === false
            ? { completed: true}
            : { completed: false}
        );
        
        await completeTodo(todoId, this.state.completed, this.props.user.token);

        this.fetchTodos();
    }

    render() {
        return (
            <div className='list'>
                Todo Page
                <form onSubmit={this.handleSubmit}>
                    <label value={this.state.todo} onChange={this.handleTodoChange}>
                        Add an item
                        <input />
                    </label>
                    <button>Add todo</button>
                </form>
                
                {!this.state.todos.length && <p>No todos. Add one to get started!</p>}

                {this.state.todos.map(todo =>
                    <p
                        key={`${todo.todo}-${todo.id}`}
                        onClick={() => this.handleComplete(todo.id)}
                        className={ `todo ${todo.completed
                            ? 'completed'
                            : ''}`}
                    >
                        {todo.todo}
                    </p>
                )}
            </div>
        )
    }
}
