var React = require('react');

module.exports = React.createClass({
    handleChange: function(){
        this.props.changeStatus(this.props.data.name);
    },

    render: function () {
        return (
            <div class="panel large-12 columns">
              <h5>Place of interesting</h5>
              <h6>Description of the place</h6>
              <a href="#" className="toggle button tiny right" onClick={this.handleChange}>
                {this.props.data.status ? 'Like' : 'Unlike'}
              </a>
            </div>
        )
    }
});