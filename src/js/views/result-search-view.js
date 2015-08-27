var Backbone = require('backbone');
var _ = require('lodash');
var $ = require('jquery');

var template = require('../templates/search-form.hbs');

module.exports = Backbone.View.extend({
    initialize: function(model) {
        this.model = model;
    },

    events: {
        'click #searchButton': 'searchLocation'
    },

    el: '#searchForm',

    searchLocation: function(e) {
        e.preventDefault();

        var location = $('#locationInput').val();
        var that = this;
        $.get('http://location-backend-service.herokuapp.com/locations?name='+location, function(data){
            that.model.set('results', data);
        });
        // this.model.trigger('change:results', results);
    },

    render: function() {
        var html = template;
        this.$el.html(html);

        return this.$el; 
    }
});