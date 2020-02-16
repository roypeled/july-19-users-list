import React from "react";
import UserPage from "./UserPage";
import UsersList from "./UsersList";
import { BrowserRouter, Route } from "react-router-dom";

import './main.scss';

export default class App extends React.Component {
    constructor(){
        super();

        this.state = {
            selectedUser: null
        }
    }

    selectUser(selectedUser){
        this.setState({ selectedUser });
    }

    render(){
        return (
        <BrowserRouter>
            <div>
                <UsersList onUserSelected={ this.selectUser.bind(this) } />
                <Route path="/users/:selectedUser" component={UserPage}/>
            </div>
        </BrowserRouter>
        )
    }
}
