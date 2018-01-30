var VideoListView = Backbone.View.extend({
  
  el: '.list',
  
  initialize: function() {
    this.collection.on('sync', this.render, this);
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.collection.map(entry => {
      console.log(entry);
      console.log('a entry');
      return new VideoListEntryView({model: entry});
    });
    return this;
  },

  renderEntry: function(entry) {
    var listEntry = new VideoListEntryView({'model': entry});
    //this.$el.append(listEntry.render());
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
