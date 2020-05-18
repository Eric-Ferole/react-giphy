import React, { Component } from 'react';

class SearchBar extends Component {
    // constructor(props) {
    //     super(props);
    // }

    changeHandler = (event) => {
        return event.target.value;
    }

    render() {
        return (
        <input onChange={this.changeHandler} type="text" className="form-control form-search"/>
        )
    };
};

export default SearchBar;