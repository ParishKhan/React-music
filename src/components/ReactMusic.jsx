var React = require('react');
var MainPlayer = require('./MainPlayer.jsx');
var SongsList = require('./SongsList.jsx');

var ReactMusic = React.createClass({
    getInitialState: function() {
        return {
            playNow: false,
            songNow: this.props.musics[0]
        }
    },
    _oninitMusic: function(play) {
        this.setState({
            playNow: play
        });
    },
    _onChangeSong: function(music) {
        this.setState({
            songNow: music
        });
    },
    render: function() {
        return (
            <div className="music">
                <MainPlayer _oninitMusic={this._oninitMusic} playNow={this.state.playNow} songNow={this.state.songNow} />
                <SongsList _onChangeSong={this._onChangeSong} musics={this.props.musics} />
            </div>
        )
    }
});

module.exports = ReactMusic;
