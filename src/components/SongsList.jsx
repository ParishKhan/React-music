var React = require('react');
var SongsListItem = require('./SongsListItem.jsx');

var SongsList = React.createClass({
    _onChangeSong: function(music){
        this.props._onChangeSong(music);
    },
    render: function() {
        var rows = [];
        this.props.musics.forEach(function(music){
            rows.push(<SongsListItem music={music} key={music.name} _onChangeSong={this._onChangeSong} />)
        }, this)
        return (
            <div className="songs">
                <ul>{rows}</ul>
            </div>
        )
    }
});

module.exports = SongsList;
