var VideoListEntryView = Backbone.View.extend({

  el: '.video-list > div',

  events: {
    'click .video-list-entry-title': 'titleClick' 
  },

  initialize: function() {
    console.log(this);
    this.render();
  },

  titleClick: function() {
    console.log('titleClick');
    this.model.select();
  },

  render: function() {  
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
