import React from 'react'

function Hello(props) {
return <h1>Hello World {props.name}</h1>
    
}

class Welcome extends React.Component {
    render(){
        return <h2>Welcome {this.props.name}</h2>
    }
}

Hello.defaultProps={
    name: 'liuchen'
}
Welcome.defaultProps={
    name: 'liuchen'
}
export {Hello,Welcome}