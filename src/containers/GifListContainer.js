import React, { Component } from 'react'

import GifSearch from '../components/GifSearch.js'
import GifList from '../components/GifList.js'


export default class GifListContainer extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            gifs: []
        }
    }

    handleSearch = (query) => {
        const url = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`
        fetch(url)
            .then(resp => resp.json())
            .then(search => {
                const gifs = search.data.splice(0,3).map(gif => {
                    return {title: gif.title, id: gif.id, url: gif.images.original.url}
                })
                this.setState({gifs})
            })
    }
    
    
    render(){
        return(
            <div>
                <GifSearch className='gifSearch' gifSearch={this.handleSearch} />
                <GifList className="gifList" gifImages={this.state.gifs}/>
            </div>
        )
    }
}