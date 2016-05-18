var React = require('react');

var CurrentPlay = React.createClass({
    render: function() {
        return (
            <div className="info group">
                <div className="thum">
                    <img src={this.props.songNow.thumb} alt={this.props.songNow.name} />
                </div>
                <div className="nowplay">
                    <h3>{this.props.songNow.name}</h3>
                    <p>{this.props.songNow.artist}</p>
                </div>
            </div>
        )
    }
});

module.exports = CurrentPlay;
