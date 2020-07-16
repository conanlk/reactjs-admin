import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as types from './../../constants/index';
import * as pagefunctions from './../../systems/post';

class List extends Component {

    componentWillMount() {
        this.props.listall();
    }

    render() {
        let state = this.props.post;

        let elements = state.posts.map((item, index) =>
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.title}</td>
                <td>
                    <button type="button" className="btn btn-primary" onClick={() => this.props.ondelete(item.id)}><i className="fa fa-list" aria-hidden="true"></i> list</button>
                    <span>&nbsp;</span>
                    <button type="button" className="btn btn-info" onClick={() => this.props.onedit(item.id)}><i className="fa fa-pencil-square-o" aria-hidden="true"></i> Edit</button>
                    <span>&nbsp;</span>
                    <button type="button" className="btn btn-primary" onClick={() => this.props.ondelete(item.id)}><i className="fa fa-trash-o" aria-hidden="true"></i> Delete</button>
                </td>
            </tr>
        );

        let grid = state.showform ? '' :
            <div className="row">
                <div className="col-12">
                    <button type="button" className="btn btn-primary " onClick={() => this.props.onadd()}><i className="fa fa-pencil-square-o" aria-hidden="true"></i> Add new</button>
                    <span>&nbsp;</span>
                    <button className="btn btn-primary dropdown-toggle" type="button" onClick={() => this.props.onsort(state.sort === types.SORTBY.AZ ? types.SORTBY.ZA : types.SORTBY.AZ)} >{state.sort}</button>
                </div>
                <hr />
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th width="10%">No.</th>
                            <th width="60%" >Title</th>
                            <th width="30%">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {elements}
                    </tbody>
                </table>
            </div >;

        return (
            <div>
                {grid}
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
        listall: () => {
            dispatch(pagefunctions.getdata());
        },
        onsort: (sort) => {
            dispatch({
                type: types.POST + sort,
            });
        },
        onadd: () => {
            dispatch({
                type: types.POST + types.ADD,
            });
        },
        onedit: (id) => {
            dispatch({
                type: types.POST + types.EDIT,
                id,
            });
        },
        ondelete: (id) => {
            dispatch({
                type: types.POST + types.DELETE,
                id,
            });
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);

