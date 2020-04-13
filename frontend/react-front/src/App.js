import React, { Component } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Acount from "./components/Acount";

class App extends Component {
    state = {
        logueado: false,
        token: null,
        usuarioLogueado: null,
        idUser: null
    };
    updateToken = (token, user, id) => {
        if (token !== "quit") {
            this.setState({
                logueado: true,
                token: token,
                idUser: id,
                usuarioLogueado: user
            });
        } else {
            this.setState({
                logueado: false,
                token: null
            });
        }
    };
    render() {
        if (this.state.logueado) {
            return (
                <div className="App">
                    <Header />
                    <Acount updateToken={this.updateToken} sessionData={this.state} />
                    <Footer />
                </div>
            );
        } else {
            return (
                <div className="App">
                    <Header />
                    <Login updateToken={this.updateToken} />
                    <Footer />
                </div>
            );
        }
    }
}

export default App;
