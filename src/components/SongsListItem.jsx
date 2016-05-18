var React = require('react');

var SongsListItem = React.createClass({
    _changeSong: function() {
        this.props._onChangeSong(this.props.music);
    },
    render: function() {
        return (
            <li onClick={this._changeSong}>
                <div className="music-item group">
                    <div className="list-thumb">
                        <img src={this.props.music.thumb} alt={this.props.music.name} />
                    </div>
                    <div className="song">
                        <h3>{this.props.music.name}</h3>
                        <p>{this.props.music.artist}</p>
                    </div>
                </div>
            </li>
        )
    }
});

module.exports = SongsListItem;
