import React from 'react'

export default class Greeting extends React.Component {
    
    state = {isLoggedIn: true}

    click = () => {
        this.setState({isLoggedIn: this.state.isLoggedIn ? false : true})
    }

    render(){
        return (
            this.state.isLoggedIn
            ? <div><User/><button onClick={this.click}>退出</button></div>
            : <div><Guest/><button onClick={this.click}>登录</button></div>
        )    
    }
}

function User(props){
    return <h1>欢迎回来！</h1>
}

function Guest(props){
    return <h1>请先登录！</h1>
}
