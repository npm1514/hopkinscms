import React, { Component } from 'react';
import { PromoformPage } from '../pages';

class Root extends Component {
    render() {
        const { data } = this.props;
        return <PromoformPage data={data ? data : {}}/>
    }
}

export default Root;