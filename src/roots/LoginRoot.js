import React, { Component } from 'react';
import { LoginPage } from '../pages';

class Root extends Component {
    render() {
        const { data } = this.props;
        return <LoginPage data={data ? data : {}}/>
    }
}

export default Root;