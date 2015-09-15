var React = require('react');
var LocationItem = require('./location-item.jsx');
var _ = require('lodash');

module.exports = React.createClass({
    render: function () {
        var that = this;
        var locationItems = _.map(this.props.datas, function(data){
            return <LocationItem data={data} changeStatus={that.props.changeStatus}/>;
        });

        return(
        <div className="row">
            <div id="searchResults" className="large-8 medium-8 columns">
                <h4>Search results</h4>
                <div id="results">
                    {locationItems}
                </div>
            </div>
        </div>
        )
    }
});