import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import M from "materialize-css";

class Login extends Component {
    state = {
        usuario: null,
        password: null,
        redirect: null
    };
    postLogin = async () => {
        let loginCredentials = this.state;
        let url = "http://localhost:3001/usuarios/login";
        let post = {
            method: "POST",
            headers: {
                Accept: "aplication/json",
                "Content-type": "application/json"
            },
            body: JSON.stringify(loginCredentials)
        };
        let response = await fetch(url, post);
        if (response.status === 200) {
            let token = await response.json();
            return token;
        } else {
            return null;
        }
    };

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };
    handleSubmit = async e => {
        e.preventDefault();
        let respuesta = await this.postLogin();
        if (respuesta) {
            this.props.updateToken(respuesta.token, this.state.usuario, respuesta.idUser);
            this.setState(prevState => {
                let newState = this.state;
                newState.redirect = "/acount";
                return { newState };
            });
        } else {
            M.toast({ html: "Usuario o Contraseña invalida" });
        }
    };

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />;
        } else {
            return (
                <div className="container row" style={{ marginTop: "45px" }}>
                    <form onSubmit={this.handleSubmit} className="col s8 offset-s2 m6 offset-m3">
                        <div className="blue-grey-text  input-field">
                            <i className="material-icons prefix">account_circle</i>
                            <label htmlFor="usuario">Usuario</label>
                            <input type="text" id="usuario" className="center-align" onChange={this.handleChange} />
                        </div>

                        <div className="input-field">
                            <i className="material-icons prefix">lock</i>
                            <label htmlFor="age">Password</label>
                            <input
                                type="password"
                                id="password"
                                className=" center-align"
                                onChange={this.handleChange}
                            />
                        </div>

                        <div className="input-field center">
                            <button className="btn">Login</button>
                        </div>
                    </form>
                </div>
            );
        }
    }
}

export default Login;
