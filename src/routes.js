import React from 'react'
import { Route } from 'react-router-dom'

import Login from './views/login/login'
import Home from './views/home/Home'

const AppRoutes = () => (
    <div>
        <Route exact path="/" component={Home}/>
        <Route path="/login" component={Login}/>
    </div>        
)
export default AppRoutes