import React, { Component } from 'react'


export default class GifSearch extends Component {

    constructor(){
        super()
        this.state = {
            gifSearchValue: ""
        }
    }

    handleOnChange = (event) => {
        this.setState({
            gifSearchValue: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.gifSearch(this.state.gifSearchValue)
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <h1>Gif Search</h1>
                <input type='text' name='content' id='content' value={this.state.gifSearchValue}
                onChange={this.handleOnChange}></input>
                <input type="submit" value='Search'></input>
            </form>
        )
    }
}