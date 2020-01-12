import React from "react";

export default class UserDetails extends React.Component {
    render(){
        if(!this.props.user)
            return <article>No User selected</article>;

        return (<article>
                    <h1>{ this.props.user.name }</h1>
                    <dl>
                        <dt>Email</dt>
                        <dd>{ this.props.user.email }</dd>
                        <dt>Phone</dt>
                        <dd>{ this.props.user.phone }</dd>
                    </dl>
                </article>)
    }
}
