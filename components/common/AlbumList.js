import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

export default class AlbumList extends Component {

     state = {albums: []};

    componentWillMount() {
        //console.log('AlbumList will mount!!!');
        //debugger;
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => {
                this.setState({albums: response.data});
                // this.setState((prev)=>({back:prev.back+1}));
            });
    }

    renderAlbums() {
        return this.state.albums.map(album =>
            <AlbumDetail key={album.title} data={album}/>
        );
    }

    render() {
        console.log(this.state.albums);
        // debugger;
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}