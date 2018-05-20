import React, {Component} from 'react';

// import {WbHeader} from 'components/Layout/Layout.jsx';
import {GetRouter} from 'router/router';

export default class App extends Component {
    render() {
        return (
            <div>
                {/* <div> */}
                    {/* <WbHeader /> */}
                    <GetRouter />
                {/* </div> */}
            </div>
        )
    }
}