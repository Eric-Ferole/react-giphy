import React, { Component } from 'react';

// Component 
import Gif from '../Gif/Gif';

class GifList extends Component {

    render() {
        return ( 
            <div className="gif-list">
                {this.props.gifs.map(gif => <Gif id={gif.id} key={gif.id} selected={this.props.selected}/>)}
            </div>
        )
    }
}

export default GifList;