var VideoListView = Backbone.View.extend({
  init: function() {
    this.collection.on('add', this.render, this);
  },

  render: function() {
    console.log('VideoListView is rendering');
    this.$el.children().detach();
    this.collection.forEach(this.renderEntry, this);
    this.$el.html(this.template());
    return this;
  },

  renderEntry: function(entry) {
    var listEntry = new VideoListEntryView({model: entry});
    this.$el.append(listEntry.render());
  },

  template: templateURL('src/templates/videoList.html')

});
