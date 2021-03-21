import {Component} from 'react';
class SecondComponent extends Component{
render(){
    return (<div className="second-component">
        <h1>User surname: {this.props.user.surname}</h1>
    </div>);
}
}

export default SecondComponent;