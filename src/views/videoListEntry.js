var VideoListEntryView = Backbone.View.extend({

  events: {
    'click .video-list-entry-title': 'titleClick' 
  },

  initialize: function() {

  },

  titleClick: function() {
    console.log(this.model);
    console.log('titleClick');
    this.model.select();
  },

  render: function() { 
    console.log('this', this.$el); 
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
