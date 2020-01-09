import React, {Component} from 'react';
import axios from 'axios';
import uuid from 'uuid/v4';
import Image from './Image';
import './Gallery.scss';
import { DualRing } from 'react-awesome-spinners'

class Gallery extends Component {
    constructor(props){
        super(props);
        this.state = {images: [], isLoading: true, isDisplaying: false, activeImage: ""};
        this.getImages = this.getImages.bind(this);
        this.display = this.display.bind(this);
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

    display(src){
        this.setState({isDisplaying:true, activeImage: src});
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
                        imgs[i].push(<Image src={this.state.images[img_index].url} id={id} classes="col-lg-6 col-sm-12 col-centered img-fluid app-img" key={id} display={this.display}/>);
                        img_index++;
                    }
                    else{
                        imgs[i].push(<Image src={this.state.images[img_index].url} id={id}  classes="col-lg-3 col-sm-12 col-centered img-fluid app-img" key={id} display={this.display}/>);
                        img_index++;
                    }   
                }
                if (i%3===1){
                    if (j===1 || j===2){
                        imgs[i].push(<Image src={this.state.images[img_index].url} id={id} classes="col-lg-3 col-sm-12 col-centered img-fluid app-img" key={id} display={this.display}/>);
                        img_index++;
                    }
                    else{
                        imgs[i].push(<Image src={this.state.images[img_index].url} id={id}  classes="col-lg-6 col-sm-12 col-centered img-fluid app-img" key={id} display={this.display}/>);
                        img_index++;
                    }    
                }
                if (i%3===2){
                    if (j===2){
                        imgs[i].push(<Image src={this.state.images[img_index].url} id={id} classes="col-lg-6 col-sm-12 col-centered img-fluid app-img" key={id} display={this.display}/>);
                        img_index++;
                    }
                    else{
                        imgs[i].push(<Image src={this.state.images[img_index].url} id={id}  classes="col-lg-3 col-sm-12 col-centered img-fluid app-img" key={id} display={this.display}/>);
                        img_index++;
                    }    
                }

                    
            }
        }
        let layout = 0;
        if (this.state.isLoading)
            layout = <div className="col-lg-12 col-centered loader"><DualRing size={15} sizeUnit={'vh'}/></div>;
        else if (this.state.isDisplaying)
            layout = <div className="overlay fadeIn" onClick={() => this.setState({isDisplaying: false, activeImage:""})}><img src={this.state.activeImage} alt="activeImage" className="img-fluid"/></div>;
        else
            layout = <div>{imgs.map(el => {let id = uuid(); return <div key={id} className="row fadeIn">{el}</div>})}
            <div className="row mt-3 mb-3 fadeIn"><button onClick={this.getImages} className="load col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">Get More</button></div></div>;
        return (
            <div className="Gallery pt-3 fadeIn">
                {layout}
            </div>

        );
    }
}

export default Gallery;