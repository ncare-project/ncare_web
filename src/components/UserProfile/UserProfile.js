import React, { Component } from 'react'
import MenuBar from '../MenuBar/MenuBar'

export default class UserProfile extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const userInfo = this.props.user

        return (
            <div className='two-columns'>
                <MenuBar sideMenu handleUserExit={this.props.handleUserExit} isSignedIn={this.props.isSignedIn}/>
                <div>
                    <h1>{userInfo.nickname}</h1>
                    <p>{userInfo.email}</p>
                </div>
            </div>
        )
    }
}
