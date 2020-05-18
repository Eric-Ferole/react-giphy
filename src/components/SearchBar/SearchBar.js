import React, { Component } from 'react';

class SearchBar extends Component {
    // constructor(props) {
    //     super(props);
    // }

    changeHandler = (event) => {
        console.log(event.target.value);
        this.props.search(event.target.value);
    }

    render() {
        return (
        <input onChange={this.changeHandler} type="text" className="form-control form-search"/>
        )
    };
};

export default SearchBar;