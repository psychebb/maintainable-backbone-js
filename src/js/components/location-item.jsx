var React = require('react');

module.exports = React.createClass({
    handleChange: function(){
        this.props.changeStatus(this.props.data.name);
    },

    render: function () {
        return (
            <div className="panel large-12 columns">
              <h5>{this.props.data.name}</h5>
              <h6>{this.props.data.description}</h6>
              <a href="#" className="toggle button tiny right" onClick={this.handleChange}>
                {this.props.data.status ? 'Like' : 'Unlike'}
              </a>
            </div>
        )
    }
});