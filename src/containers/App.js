import React, { Component } from 'react';
import giphy from 'giphy-api';

// Components
import SearchBar from '../components/SearchBar/SearchBar';
import Gif from '../components/Gif/Gif';
import GifList from '../components/GifList/GifList';

// Styles
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGif: "3oKIPvxye1AAZXBk7m"
    }

    this.search("Homer");
    this.selectGif("3oKIPvxye1AAZXBk7m");
  }

  search = (query) => {
    giphy("290DZpPA3G7S46CG3y6Gpof28H0o9Nug")
      .search({
      q: query,
      rating: 'g',
      limit: 10,
      },  (err, res) => {
        this.setState({
          gifs: res.data,
        })
      });
  }

  selectGif = (id) => {
    console.log(id)
    this.setState({
      selectedGif: id
    });
  }

  render() {
    return (
      <div className="App">
        <div className="left-scene">
          <SearchBar search={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGif} /> 
          </div>
        </div>
        <div className="right-scene">
            <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}


export default App;

//<img src={logo} className="App-logo" alt="logo" />
