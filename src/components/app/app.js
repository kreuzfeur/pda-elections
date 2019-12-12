//react
import React from 'react'
//styles
import './app.scss'
//components
import LoginForm from '../login-form'
import Elections from '../elections'
//router
import { Route } from 'react-router-dom'
const App = () => {
    return (
        <section className="app">
            <Route path="/" component={LoginForm} exact />
            <Route path="/elections" component={Elections} />
        </section>
    )
}

export default App