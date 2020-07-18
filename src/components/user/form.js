import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as types from '../../constants/index';

class Form extends Component {

    render() {
        let state = this.props.user;

        let errors = state.error === '' ? '' :
            <div className="alert alert-warning">
                <button type="button" className="close" data-dismiss="alert" aria-hidden="true" onClick={this.onCloseAlert}>&times;</button>
                {state.error}
            </div>;

        let myform = (!state.showform ? '' :
            <div className="col-md-12 col-lg-12">
                {errors}
                <div className="form-group">
                    <label >Name</label>
                    <input type="text" className="form-control" name="name" placeholder="Input Title" value={state.name} onChange={(event) => { this.props.onchange(event) }} />
                </div>
                <div className="form-group">
                    <label >UserName</label>
                    <input type="text" className="form-control" name="username" placeholder="Input Title" value={state.username} onChange={(event) => { this.props.onchange(event) }} />
                </div>
                <div className="form-group">
                    <label >Email</label>
                    <input type="text" className="form-control" name="email" placeholder="Input Title" value={state.email} onChange={(event) => { this.props.onchange(event) }} />
                </div>
                <div className="form-group">
                    <button type="button" className="btn btn-primary" onClick={() => { this.props.onsave() }}>{state.id === '' ? 'Add' : 'Save'}</button>
                    <span>&nbsp;&nbsp;</span>
                    <input type="reset" value="Cancel" className="btn btn-default" onClick={() => this.props.oncancel()} />
                </div>
            </div>
        );
        return (
            <div className="row">
                {myform}
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        user: state.user,
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onchange: (event) => {
            dispatch({
                type: types.USER + types.CHANGE,
                event,
            });
        },
        onsave: () => {
            dispatch({
                type: types.USER + types.SUBMIT,
            });
        },
        oncancel: () => {
            dispatch({
                type: types.USER + types.CANCEL,
            });
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);



