import React, {Component} from 'react';
import axios from 'axios';
import uuid from 'uuid/v4';
import {Link} from 'react-router-dom';
import Image from './Image';
import Loader from './Loader';

class Gallery extends Component {
    constructor(props){
        super(props);
        this.state = {images: [], isLoading: true};
        this.getImages = this.getImages.bind(this);
    }

    async componentDidMount(){
        this.getImages();   
    }

    async getImages(){
        this.setState({isLoading: true});
        let imgs = [];
        let sig = 0;
        while (imgs.length !== this.props.perPage){
            let img = await axios.get(`https://source.unsplash.com/random?sig=${sig}`);
            sig++;
            imgs.push({url: img.request.responseURL, id: uuid()});
        }
        imgs = [...this.state.images, ...imgs];
        this.setState({images: imgs}, () => this.setState({isLoading: false}));
    }

    render(){    
        return (
            <div className="Gallery">
                {this.state.isLoading ? <Loader/> : 
                this.state.images.map( el => <Link to={`/img${el.id}`} key={el.id}><Image src={el.url} id={el.id}/></Link>)}
                <button onClick={this.getImages}>Get More!</button>
            </div>

        );
    }
}

export default Gallery;