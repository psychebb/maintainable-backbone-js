var $ = require('jquery');

var ResultItem = require('./models/result-model');
var ResultView = require('./views/result-view');
var ResultSearchView = require('./views/result-search-view');
$(function() {
    var data = [
        {
            "name": "Search results",
            "description": 'Location description'
        }
    ];

    var model = new ResultItem({'results': data});

    var searchForm = new ResultSearchView(model);
    var searchResults = new ResultView(model);

    searchForm.render();
    searchResults.render();
});