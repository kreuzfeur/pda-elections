//react
import React from 'react'
//styles
import './login-form.scss'
//images
import avatar from '../../img/avatar.svg'
//router
import {withRouter} from 'react-router-dom'
const LoginForm = (props) => {
    const onFormSubmit = (e) => {
        e.preventDefault()
        props.history.push('/elections')
    }
    return (
        <section
            className="login-form"
        >
            <div className="login-form-container">
                <div className="header">
                    <h1 className="header-title">
                        <span>Поляков</span>
                        <span>elections</span>
                    </h1>
                    <p className="header-subtitle">
                        Единая система <br />
                        идентификации и аутентификации
                    </p>
                </div>
                <form
                    className="form"
                    onSubmit={(e) => onFormSubmit(e)}
                >
                    <h2 className="form-title">
                        Вход
                    </h2>
                    <p className="form-subtitle">
                        Личный кабинет физического лица
                    </p>
                    <div className="form-user">
                        <img src={avatar} alt="" className="avatar" />
                        <div>
                            <h3 className="form-user-username">Поляков Дмитрий</h3>
                            <p className="form-link">Другой пользователь</p>
                        </div>
                    </div>
                    <label htmlFor="password" className="label">Пароль</label>
                    <input type="text" name="password" placeholder="•••••••••" className="form-password" />
                    <button type="submit" className="form-submit">Войти</button>
                    <p className="form-link">Другой пользователь</p>
                </form>
            </div>
        </section>
    )
}

export default withRouter(LoginForm);