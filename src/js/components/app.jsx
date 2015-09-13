var React = require('react');
var _ = require('lodash');
var $ = require('jquery');
var LocationList = require('./result-list.jsx');
var SearchForm = require('./search-form.jsx');

module.exports = React.createClass({
    getInitialState: function () {
        var data = [{
            "name": "Search results",
            "description": 'Location description'
        }];

        return {datas: data};
    },

    handleSearch: function(input){
        var that = this;
        $.get('http://location-backend-service.herokuapp.com/locations?name='+input, function(data){
            that.setState({datas: data});
        });
    },

    render: function(){
        return (
          <div>
          <div className="row" id="searchForm">
            <SearchForm onSearch={this.handleSearch}/>
          </div>

          <div className="row">
            <hr className="large-12 columns" />
          </div>

          <div className="row">
            <div className="large-12 columns">
              <div id="searchLocations">
                <ResultList datas={this.state.datas}/>
              </div>
            </div>
          </div>
          </div>
        )
    }
});