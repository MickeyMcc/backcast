var VideoListView = Backbone.View.extend({
  
  initialize: function() {
    this.collection.on('sync', this.render, this);
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.$('.video-list').append(
      this.collection.map(entry => (
        new VideoListEntryView({'model': entry}).render().el
      ))
    );
    return this;
  },



  template: templateURL('src/templates/videoList.html')

});
