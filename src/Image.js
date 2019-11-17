import React, {Component} from 'react';


class Image extends Component {
    render(){
        return (
            <img src={this.props.src} alt={this.props.id} className="img-fluid"/>
        );
    }
}

export default Image;