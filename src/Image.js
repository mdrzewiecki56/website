import React, {Component} from 'react';


class Image extends Component {
    render(){
        return (
           <img src={this.props.src} alt={this.props.id} className={`${this.props.classes} img-fluid`} onClick={() => this.props.display(this.props.src)}/>
        );
    }
}

export default Image;