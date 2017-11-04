import React from 'react'
import ReactDOM from 'react-dom'
//import App from './App'
import Login from './views/login'
import registerServiceWorker from './registerServiceWorker'
import firebase from 'firebase'
import config from './config'
import './index.css'
import 'semantic-ui-css/semantic.min.css'

firebase.initializeApp(config.configFirebase)

ReactDOM.render(<Login />, document.getElementById('root'))
registerServiceWorker()
