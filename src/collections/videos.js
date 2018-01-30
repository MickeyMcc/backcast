

var Videos = Backbone.Collection.extend({
  
  model: Video,

  url: 'https://www.googleapis.com/youtube/v3/search',

  initialize: function () {
    this.search();
  },

  search: function(query = 'cats') {
    this.fetch({
      data: {
        'q': query,
        'maxResults': '5',
        'videoEmbeddable': 'true'
        //'APIKey' : YOUTUBE_API_KEY
      },
      success: function(data) { console.log('success'); this.collection = data; },
      error: function(data) {console.log('failure');}
    });
  },

  parse: function(response) {
    console.log('parsing');
    return response.data;
  }
});