import React, {Component} from 'react';

export const PAGE_ROUTE = '/test/1';

export function mixins(...list){
    return function(target){
        Object.assign(target.prototype,...list)
    }
}

export default class Test extends Component {
    state = {};

    componentWillMount() {

    }

    componentDidMount() {

    }

    render() {
        return (
            <div>test</div>
        );
    }
}

