var VideoPlayerView = Backbone.View.extend({
  
  el: '.player',

  initialize: function() {
    this.listenTo(this.model, 'click', this.render);
  },

  render: function() {
    console.log('vidPlayerRender');
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
