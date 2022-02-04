import React from 'react';
import './App.css';

import Playlist from "../Playlist/Playlist";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Spotify from "../../util/Spotify";


class App extends React.Component{
    constructor(props){
      super(props);

      this.state={
        SearchResults: [],
        PlaylistName: "New Playlist",
        PlaylistTracks: []
      };

      this.search=this.search.bind(this);
      this.addTrack=this.addTrack.bind(this);
      this.removeTrack=this.removeTrack.bind(this);
      this.updatePlaylistName=this.updatePlaylistName.bind(this);
      this.savePlaylist=this.savePlaylist.bind(this);
      this.removeTrackSearch=this.removeTrackSearch.bind(this);
      this.doThese=this.doThese.bind(this);
    }
  search(term){
    Spotify.search(term).then(SearchResults => {
      this.setState({
        SearchResults: SearchResults
      });
    });
  }

  addTrack(track){
    let tracks=this.state.PlaylistTracks;
    if(tracks.find(savedTrack => savedTrack.id === track.id)){
      return;
    }
    tracks.push(track);
    this.setState({PlaylistTracks: tracks});
  }

  removeTrack(track){
    let tracks = this.state.PlaylistTracks;
    let trackSearch = this.state.SearchResults;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);
    trackSearch.unshift(track);
    this.setState({PlaylistTracks: tracks});
  }

  removeTrackSearch(track){
    let tracks = this.state.SearchResults;
    tracks=tracks.filter(currentTrack => currentTrack.id !== track.id);
    this.setState({SearchResults: tracks});
  }

  doThese(track){
    this.addTrack(track);
    this.removeTrackSearch(track);
  }

  updatePlaylistName(name){
    this.setState({updatePlaylistName: name});
  }

  savePlaylist(){
    const trackurls = this.state.PlaylistTracks.map(track => track.url);
    Spotify.savePlaylist(this.state.PlaylistName, trackurls).then( () => {
      this.setState({
        updatePlaylistName: "New Playlist",
        PlaylistTracks:[]
      });
    });
  }

  render() {
    return (
      <div>
        <h1>
          <a href='https://localhost:3000'>Musicophile</a>
        </h1>
        <div className='App'>
          <SearchBar onSearch={this.search} />
          <div className='App-playlist'>
            <SearchResults SearchResults={this.state.SearchResults} onAdd={this.doThese} />
            <Playlist PlaylistTracks={this.state.PlaylistTracks} onNameChange={this.updatePlaylistName} onRemove={this.removeTrack} onSave={this.savePlaylist} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;