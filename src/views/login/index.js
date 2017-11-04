import React, { Component } from 'react'
import { Grid, Header, Segment } from 'semantic-ui-react'
import LoginButton from '../../components/loginButton'
import './login.css'

class Login extends Component {

  render() {
    return (
      <div className='login-form'>
        <Grid
          textAlign='center'
          style={{ height: '100%' }}
          verticalAlign='middle'
        >
            <Grid.Column style={{ maxWidth: 450 }}>
                <Segment>
                    <Header as='h2' color='grey' textAlign='center'>
                        Log-in to your account
                    </Header>
                    <LoginButton/>
                </Segment>
            </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default Login
