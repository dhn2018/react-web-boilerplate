import React, {Component} from 'react';

// import { mixins } from './Test1'

export const PAGE_ROUTE = '/test/2';

export default class Test extends Component {
    state = {};

    componentWillMount() {

    }

    componentDidMount() {

    }


    render() {
        const nameStr = '小君';
        console.log(nameStr);

        // class Math {
        //     @log
        //     add(a, b){
        //         return a + b
        //     }
        // }
        //
        // function log(target, name, descriptor) {
        //     var oldValue = descriptor.value
        //     descriptor.value = function() {
        //         console.log(`Calling ${name} with`, arguments);
        //         return oldValue.apply(null, arguments);
        //     }
        //     return descriptor
        // }
        //
        // const math = new Math();
        //
        // math.add(2, 4);

        // class Math {
        //     @log
        //     add(a, b) {
        //         return a + b;
        //     }
        // }

        function log(target, name, descriptor) {
            var oldValue = descriptor.value;

            descriptor.value = function() {
                console.log(`Calling ${name} with`, arguments);
                return oldValue.apply(null, arguments);
            };

            return descriptor;
        }

// passed parameters should get logged now
        Math.add(2, 4);
        return (
            <div>{nameStr}123</div>
        );
    }
}


