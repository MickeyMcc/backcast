var VideoPlayerView = Backbone.View.extend({
  
  initialize: function() {
    this.listenTo(this.collection, 'sync', function() {
      this.render(this.collection.at(0));
    }, this);

    this.listenTo(this.collection, 'select', this.render);
  },

  render: function(currentVideo = this.collection.at(0)) {
    this.$el.html(this.template(currentVideo.attributes));
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
