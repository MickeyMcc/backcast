

var Videos = Backbone.Collection.extend({
  
  model: Video,

  url: 'https://www.googleapis.com/youtube/v3/search',

  initialize: function () {
    this.listenTo(Backbone, 'search', function() {
      this.search($('.form-control').val());
    });
  },

  search: function(query) {
    this.fetch({
      data: {
        part: 'snippet',
        key: window.YOUTUBE_API_KEY,
        q: query,
        maxResults: 7,
        type: 'video',
        videoEmbeddable: true,
      },
      success: function(data) { console.log('success'); },
      error: function(data) { console.log('failure'); }
    });
  },

  parse: function(response) {
    return response.items;
  }
});