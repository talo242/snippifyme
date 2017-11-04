import React, { Component } from 'react'
import { Button, Icon } from 'semantic-ui-react'
import loginService from '../../services/auth/login'

class LoginButton extends Component {
    handleLogin(){
        loginService()
        .then( (result) =>{
            let token = result.credential.accessToken
            let user = result.user
            console.log(token)
            console.log(user)
        })
        .catch( (result) => {
            console.log(result)
        })
    }
    render() {
        return (
            <Button onClick={() => this.handleLogin()}>
                <Icon name='github' /> GitHub
            </Button>
        )
    }
}

export default LoginButton
