var ResultView = Backbone.View.extend({
    initialize: function(model) {
        this.model = model;
        this.model.bind('change:results', _.bind(this.render, this));
        this.template = $('#searchResultsView').html();
    },

    el: '#searchResults',

    render: function() {
        var compiled = _.template(this.template);
        var html = compiled(this.model.toJSON());

        this.$el.html(html);

        return this.$el;
    }
});