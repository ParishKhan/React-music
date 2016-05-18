var React = require('react');

var Controller = React.createClass({
    componentDidUpdate: function() {

    },
    _initMusic: function() {
        if(this.props.playNow == true) {
            this._pauseSong();
        } else {
            this._playSong()
        }
    },
    _playSong: function() {
        this.refs.audios.play();
        this.refs.pp.attributes.src.value = "images/pause.svg";
        this.props._oninitMusic(true);
    },
    _pauseSong: function() {
        this.refs.audios.pause();
        this.refs.pp.attributes.src.value = "images/play.svg";
        this.props._oninitMusic(false);
    },
    _ended: function() {
        this.refs.pp.attributes.src.value = "images/play.svg";
        this.props._oninitMusic(false);
    },
    render: function(){
        return (
            <div className="control">
                <a href="#" className="left"><img src="images/left.svg" alt="" /></a>
                <a href="#" className="play" onClick={this._initMusic} ><img ref="pp" src="images/play.svg" alt="" /></a>
                <a href="#" className="right"><img src="images/right.svg" alt="" /></a>
                <audio src={this.props.songNow.song} ref="audios" onEnded={this._ended}>
                    <p>Your browser does not support the <code>audio</code> element.</p>
                </audio>
            </div>
        )
    }
});

module.exports = Controller;
