import React, { Component } from 'react';
import { PromolistPage } from '../pages';

class Root extends Component {
    render() {
        const { data } = this.props;
        return <PromolistPage data={data ? data : {}}/>
    }
}

export default Root;