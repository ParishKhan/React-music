var React = require('react');

var Controller = React.createClass({
    componentWillUpdate: function() {
        this.refs.audios.pause();
    },
    componentDidUpdate: function() {
        this.refs.audios.play();
    },
    _initMusic: function(e) {
        e.preventDefault();
        if(this.refs.audios.duration > 0 && !this.refs.audios.paused) {
            this.refs.audios.pause();
        } else {
            this.refs.audios.play();
        }
    },
    _ended: function() {
        this.refs.pp.attributes.src.value = "http://downloadfreebd.com/ariful/data/images/play.svg";
    },
    _play: function(){
        this.refs.pp.attributes.src.value = "http://downloadfreebd.com/ariful/data/images/pause.svg";
    },
    _pause: function() {
        this.refs.pp.attributes.src.value = "http://downloadfreebd.com/ariful/data/images/play.svg";
    },
    _right: function() {
        this.props._onRightClick(this.props.songNow);
    },
    _left: function() {
        this.props._onLeftClick(this.props.songNow);
    },
    render: function(){
        return (
            <div className="control">
                <a href="#" className="left" onClick={this._left} ><img src="http://downloadfreebd.com/ariful/data/images/left.svg" alt="" /></a>
                <a href="#" className="play" onClick={this._initMusic} ><img ref="pp" src="http://downloadfreebd.com/ariful/data/images/play.svg" alt="" /></a>
                <a href="#" className="right" onClick={this._right} ><img src="http://downloadfreebd.com/ariful/data/images/right.svg" alt="" /></a>

                <audio
                    src={this.props.songNow.song}
                    ref="audios" onEnded={this._ended}
                    onPause={this._pause}
                    onPlay={this._play}>
                </audio>
            </div>
        )
    }
});

module.exports = Controller;
