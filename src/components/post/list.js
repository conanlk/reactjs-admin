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

        let elements = state.pages.map((item, index) =>
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.title}</td>
                <td width="200">
                    <button type="button" className="btn btn-info" onClick={() => this.props.onedit(item.id)}><i className="fa fa-pencil-square-o" aria-hidden="true"></i> Sửa</button>
                    <span>&nbsp;</span>
                    <button type="button" className="btn btn-primary" onClick={() => this.props.ondelete(item.id)}><i className="fa fa-trash-o" aria-hidden="true"></i> Xóa</button>
                </td>
            </tr>
        );

        let grid = state.showform ? '' :
            <div className="row">
                <div className="col-3">
                    <button type="button" className="btn btn-primary " onClick={() => this.props.onadd()}><i className="fa fa-pencil-square-o" aria-hidden="true"></i> Add new</button>
                </div>
                <div className="col-9">
                    <div className="dropdown float-right">
                        <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">A -Z
<span className="caret"></span></button>
                        <ul className="dropdown-menu">
                            <li><a onClick={() => { this.props.onsort('dasda') }} >A - Z</a></li>
                            <li><a onClick={() => { this.props.onsort('asdasd') }}  >Z - A</a></li>
                        </ul>
                    </div>
                </div>
                <hr />
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th width="10%">No.</th>
                            <th width="70%" >Title</th>
                            <th width="20%">Action</th>
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
                type: types.POST + types.SORTBY,
                sort,
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

