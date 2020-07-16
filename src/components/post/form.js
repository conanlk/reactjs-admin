import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as types from '../../constants/index';

class Form extends Component {

    render() {
        let state = this.props.post;

        let errors = state.error === '' ? '' :
            <div className="alert alert-warning">
                <button type="button" className="close" data-dismiss="alert" aria-hidden="true" onClick={this.onCloseAlert}>&times;</button>
                {state.error}
            </div>;

        let myform = (!state.showform ? '' :
            <div className="col-md-12 col-lg-12">
                {errors}
                <div className="form-group">
                    <label >Title</label>
                    <input type="text" className="form-control" name="title" placeholder="Input Title" value={state.title} onChange={(event) => { this.props.onchange(event) }} />
                </div>
                <div className="form-group">
                    <label >Body</label>
                    <textarea className="form-control" rows="15" name="body" value={state.body} onChange={(event) => { this.props.onchange(event) }}></textarea>
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
        post: state.post,
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onchange: (event) => {
            dispatch({
                type: types.POST + types.CHANGE,
                event,
            });
        },
        onsave: () => {
            dispatch({
                type: types.POST + types.SUBMIT,
            });
        },
        oncancel: () => {
            dispatch({
                type: types.POST + types.CANCEL,
            });
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);



