var VideoPlayerView = Backbone.View.extend({
  
  el: '.player',

  initialize: function() {
    this.listenTo(this.collection, 'select', this.render);  //problem line
  },

  render: function() {
    var firstVid = this.collection.at(0);
    this.$el.html(this.template(this.collection.at(0).attributes));
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
