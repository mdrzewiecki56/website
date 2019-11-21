import React, {Component} from 'react';
import axios from 'axios';
import uuid from 'uuid/v4';
import {Link} from 'react-router-dom';
import Image from './Image';
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import './Gallery.scss';

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
        let imgs = [];
        let img_index = 0;
        for (let i=0;i<this.state.images.length/3;i++) {
                imgs.push([]);
            for (let j=0;j<3;j++){
                let id = uuid();
                if (i%3===0){
                    if (j===1){
                        imgs[i].push(<Image src={this.state.images[img_index].url} id={id} classes="col-lg-6 col-sm-12 col-centered img-fluid app-img" key={id}/>);
                        img_index++;
                    }
                    else{
                        imgs[i].push(<Image src={this.state.images[img_index].url} id={id}  classes="col-lg-3 col-sm-12 col-centered img-fluid app-img" key={id}/>);
                        img_index++;
                    }   
                }
                if (i%3===1){
                    if (j===1 || j===2){
                        imgs[i].push(<Image src={this.state.images[img_index].url} id={id} classes="col-lg-3 col-sm-12 col-centered img-fluid app-img" key={id}/>);
                        img_index++;
                    }
                    else{
                        imgs[i].push(<Image src={this.state.images[img_index].url} id={id}  classes="col-lg-6 col-sm-12 col-centered img-fluid app-img" key={id}/>);
                        img_index++;
                    }    
                }
                if (i%3===2){
                    if (j===2){
                        imgs[i].push(<Image src={this.state.images[img_index].url} id={id} classes="col-lg-6 col-sm-12 col-centered img-fluid app-img" key={id}/>);
                        img_index++;
                    }
                    else{
                        imgs[i].push(<Image src={this.state.images[img_index].url} id={id}  classes="col-lg-3 col-sm-12 col-centered img-fluid app-img" key={id}/>);
                        img_index++;
                    }    
                }

                    
            }
        }
        return (
            <div className="Gallery pt-5">
                {this.state.isLoading ? <div className="col-lg-12 col-centered"><Loader type="Puff" color="#00BFFF" height={250} width={250}/></div> : 
                imgs.map(el => {let id = uuid(); return <div key={id} className="row">{el}</div>})}
                {!this.state.isLoading && <div className="row mt-3 mb-3"><div className="col-lg-4 col-md-3 col-sm-2"></div><button onClick={this.getImages} className="col-lg-4 col-md-6 col-sm-8 load">Get More</button><div className="col-lg-4 col-md-3 col-sm-2"></div></div>}
            </div>

        );
    }
}

export default Gallery;