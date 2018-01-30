var SearchView = Backbone.View.extend({

  events: {
    'click button': 'triggerSearch',
    'keyup' : 'keyPress'
  },

  triggerSearch: function() {
    console.log('search');
    Backbone.trigger('search');
  },

  keyPress: function(event) {
    if (event.keyCode === 13) {
      this.triggerSearch();
    }
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
