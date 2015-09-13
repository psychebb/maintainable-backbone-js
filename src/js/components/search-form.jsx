var React = require('react');
var _ = require('lodash');

module.exports = React.createClass({
    getInitialState: function () {
        return {inputValue: ''};
    },

    handleInput: function(){
        this.setState({inputValue: event.target.value});
    },

    hanleChange: function(){
        this.props.onAdd(this.state.inputValue);
        this.setState({inputValue: ''})
    },

    render: function(){
        return(
            <div class="large-9 medium-9 columns">
              <input type="text" id="locationInput" value={this.state.inputValue} onChange={this.handleInput} placeholder="Type a location name to search"/>
            </div>
            <div class="large-3 medium-3 columns">
                <input type="button" class="submit button tiny" id="searchButton" value="search" onClick={this.hanleChange} />
            </div>
        )
    }
});