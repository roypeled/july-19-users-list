import React from "react";
import UserDetails from "./UserDetails";
import UserPosts from "./UserPosts"
import UserService from "./UserService";
import PostsService from "./PostsService";

import "./user-page.scss";


export default class UserPage extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            user: null,
            posts: []
        };

        if(props.match.params.selectedUser) {
            this.getDataForUser(props.match.params.selectedUser);
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.match.params.selectedUser) {
            this.getDataForUser(nextProps.match.params.selectedUser)
        }
    }

    getDataForUser(id){
        this.getUser(id);
        this.getPosts(id);
    }

    async getUser(id) {
        const user = await UserService.getUser(id);
        this.setState({ user });
    }

    async getPosts(id){
        const posts = await PostsService.getPosts(id);
        this.setState({ posts });
    }

    render(){
        return (<main className="user-page">
                    <UserDetails user={ this.state.user }/>
                    <UserPosts posts={ this.state.posts }/>
                </main>)
    }
}
