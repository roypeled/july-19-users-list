import React from "react";
import UserService from "./UserService";
import {Link} from "react-router-dom";

import "./users-list.scss";

export default class UsersList extends React.Component {

    constructor(){
        super();
        this.getUsers();

        this.state = {
            users: []
        }
    }

    async getUsers(){
        const users = await UserService.getAllUsers();
        this.setState({
            users
        });
    }


    renderUser(user, i){
        return <li key={user._id}>
            <Link to={"/users/" + user._id}>{ user.name }</Link>
        </li>
    }

    render(){
        return (<nav className="users-list">
                    <h3>Users List</h3>
                    <ul>
                        { this.state.users.map( user => this.renderUser(user) ) }
                    </ul>
                </nav>)
    }
}
