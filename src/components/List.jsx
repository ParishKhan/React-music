var React = require('react');
var ListItem = require('./ListItem.jsx');
// Dummy data
var coolCats = [{"id": 1, "name": "pew"}, {"id": 2, "name": "mew"}, {"id": 3, "name": "wof"}]

var List = React.createClass({
    render: function() {
        var cats = coolCats.map(function(coolCat){
            return <ListItem key={coolCat.id} cat={coolCat.name} />
        })

        return (
            <ul>{cats}</ul>
        )
    }
});

module.exports = List;
