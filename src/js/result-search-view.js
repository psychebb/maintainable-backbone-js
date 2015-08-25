var ResultSearchView = Backbone.View.extend({
    initialize: function(model) {
        this.model = model;
        this.template = $('#searchFormView').html();
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
        var compiled = _.template(this.template);
        var html = compiled();
        this.$el.html(html);

        return this.$el; 
    }
});