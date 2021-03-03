import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import '../App.css'; 

export default withRouter(class Header extends Component {
    render() {
        return (
            <header className='App-header'>
                <div className='welcome'>Todo List App</div>
                <div>
                    <NavLink exact className="header-links" to="/signup">
                        Signup
                    </NavLink>
                    <NavLink exact className="header-links" to="/login">
                        Login
                    </NavLink>
                    <NavLink exact className="header-links" to="/">
                        Home
                    </NavLink>
                    <NavLink exact className="header-links" to="/todos">
                        To Do List
                    </NavLink>
                </div>
            </header>
        )
    }
})
