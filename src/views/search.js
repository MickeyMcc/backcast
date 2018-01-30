var SearchView = Backbone.View.extend({

  events: {
    'click button': 'triggerSearch'
  },

  triggerSearch: function() {
    Backbone.trigger('search');
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
