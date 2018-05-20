import React, {Component} from 'react';

export default class Player extends Component {
    constructor(props) {
        super(props);
        this.back = this.back.bind(this);
    }
    back(){
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                url ：与当前location路径名所匹配部分
                <p>{this.props.match.url}</p>
                path ：路由的地址
                <p>{this.props.match.path}</p>
                isExact ：path 是否等于 pathname
                <p>{this.props.match.isExact}</p>
                params ：从path-to-regexp获取的路径中取出的值都被包含在这个对象中
                <p>{this.props.match.params.number}</p>
                <button onClick={this.back}>back</button>
            </div>
        )
    }
}