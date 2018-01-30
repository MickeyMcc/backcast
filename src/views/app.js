var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    this.videos.search('backcast');
    this.render();
    this.listenTo(this.videos, 'sync', App.render);
    this.listenTo(SearchView, 'search', this.videos.search);
  },

  render: function() {
    this.$el.html(this.template());
    new SearchView({
      el: this.$('.search')
    }).render();

    new VideoListView({
      collection: this.videos,
      el: this.$('.list')
    }).render();

    new VideoPlayerView({
      collection: this.videos,
      el : this.$('.player')
    }).render();
    return this;
  },

  template: templateURL('src/templates/app.html')

});
