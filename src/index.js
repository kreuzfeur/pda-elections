//react
import React from 'react'
import ReactDOM from 'react-dom'
//components
import App from './components/app'
//redux
import store from './store'
import {Provider} from 'react-redux'
//router
import {BrowserRouter as Router} from 'react-router-dom'
//styles
import './styles/bootstrap.scss'
import './index.scss'

ReactDOM.render(
    <Provider 
        store={store}>
            <Router>
                <App/>
            </Router>
    </Provider>, 
    document.getElementById('root')
)