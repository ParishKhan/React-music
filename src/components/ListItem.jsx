var React = require('react');

var ListItem = React.createClass({
    render: function(){
        return (
            <li>{this.props.cat}</li>
        )
    }
});

module.exports = ListItem;
