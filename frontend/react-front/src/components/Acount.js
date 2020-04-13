import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import M from "materialize-css";

class Acount extends Component {
    state = {
        redirect: null
    };

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />;
        } else {
            return (
                <div className="container row" style={{ marginTop: "45px" }}>
                    <div className="col s12 indigo white-text ">
                        <h5>
                            {" "}
                            Usuario: {this.props.sessionData.usuarioLogueado}
                            <i className="material-icons deep-orange-text left-align">account_box</i>
                        </h5>
                    </div>
                </div>
            );
        }
    }
}
export default Acount;
