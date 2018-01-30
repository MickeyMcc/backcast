var VideoListEntryView = Backbone.View.extend({

  el: '.video-list',

  events: {
    'click .video-list-entry-title': 'titleClick' 
  },

  initialize: function() {
    this.render();
    this.on('click .video-list-entry-title', function() {
      this.titleClick();
    });
  },

  titleClick: function() {
    console.log(this.model);
    console.log('titleClick');
    this.model.select();
  },

  render: function() {  
    this.$el.append(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
