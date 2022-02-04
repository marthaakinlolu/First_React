import React  from "react";

import "./Track.css";

class SearchBar extends React.Component{
    constructor(props){
        super(props);

        this.state={
            term: ""
        };

        this.addTrack = this.addTrack.bind(this);
        this.removeTrack=this.removeTrack.bind(this);
    }

    addTrack(event){
        this.props.onAdd(this.props.track)
    }

    removeTrack(){
        this.props.onRemove(this.state.track);
    }

    renderAction(){
        if(this.props.isRemoval){
            return(
                <button className="Track-action" onClick={this.removeTrack}> - </button>
            );
        }

        return (
            <button className="Track-action" onClick={this.addTrack}> + </button>
        );
    }

    render(){
        return(
            <div className="Track">
                <div className="Track-information"> 
                    <h3>{this.props.track.name}</h3>
                    <p>
                        {this.props.track.artist} | {this.props.track.album}
                    </p>
                    <iframe
                        src={"https://open.spotify.com/embed/track/" + this.props.track.id}
                        width="300"
                        height="30px"
                        frameborder="0"
                        allowtransparency="true"
                        allow="encrypted-media"
                        title="preview"
                    />
                </div>
                {this.renderAction()}
            </div>
        );
    }
}    

export default SearchBar;
