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
    _onRightClick: function(play) {
        if(play.id === this.props.musics.length - 1)
            var arr = 0;
        else
            var arr = play.id + 1;
        this.setState({
            songNow: this.props.musics[arr]
        });
    },
    _onLeftClick: function(play) {
        if(play.id === 0)
            var arr = this.props.musics.length - 1;
        else
            var arr = play.id - 1;
        this.setState({
            songNow: this.props.musics[arr]
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
                <MainPlayer _onRightClick={this._onRightClick} _onLeftClick={this._onLeftClick} playNow={this.state.playNow} songNow={this.state.songNow} />
                <SongsList _onChangeSong={this._onChangeSong} musics={this.props.musics} />
            </div>
        )
    }
});

module.exports = ReactMusic;
