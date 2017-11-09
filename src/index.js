import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter as Router } from 'react-router-dom'
import firebase from 'firebase'
import config from './config'
import 'semantic-ui-css/semantic.min.css'
//routes
import AppRoutes from './routes'

firebase.initializeApp(config.configFirebase)

ReactDOM.render(<Router><AppRoutes/></Router>, document.getElementById('root'))
registerServiceWorker()
