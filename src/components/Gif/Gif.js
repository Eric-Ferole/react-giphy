import React, { Component } from 'react';

// Styles 
// import '../../../src/containers/App.css'; 

class Gif extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        const gif = `https://i.giphy.com/media/${this.props.id}/giphy.gif`
        return <img src={gif} className="gif" alt=""/>
    }
}

export default Gif;