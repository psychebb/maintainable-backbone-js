var $ = require('jquery');
var React = require('react');
var _ = require('lodash');

var App = require('./components/app.jsx');

$(function () {
    React.render(<App />, document.getElementById('container'));
});