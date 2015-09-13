var $ = require('jquery');
var React = require('react');
var _ = require('lodash');

var App = require('./compoents/app.jsx');
var ResultList = require('./compoents/result-list.jsx');

$(function () {
    React.render(<App />, document.getElementById('container'));
});