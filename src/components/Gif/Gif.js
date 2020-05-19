import React, { Component } from 'react';

class Gif extends Component {

    selectHandler = (event) => {
        const url = event.target.src // Get the Gif's URL
        const id = url.slice(26, -10) // Retrieve the Gif's id
        this.props.selected(id); // It passes id to <GifList /> properties
    }

    render() {
        const gif = `https://i.giphy.com/media/${this.props.id}/giphy.gif`
        return <img  onClick={this.selectHandler} src={gif} className="gif" alt=""/>
    };
};

export default Gif;