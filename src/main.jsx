var React = require('react');
var ReactDOM = require('react-dom');
var ReactMusic = require('./components/ReactMusic.jsx');
var MusicData = require('./data.js');

ReactDOM.render(<ReactMusic musics={MusicData} />, document.getElementById('play-music'));
