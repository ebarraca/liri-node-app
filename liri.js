var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: 'KlQZ1CLwvV3lDBKam7x08WOTy',
  consumer_secret: 'Ys8pwcop4srY6u6qAXFnA0Vyqcd7tFUiG2ihsIfNsbSoCazTAZ',
  access_token_key: '14344783-v3JUGB7VqX69hrirrzP2pZkUxv1kusmZcqWABrPov',
  access_token_secret: 'Z721scUivD3v4Ht0VjQz13jnHooKAbrZcjknRHK42lNoh'
});

var params = {screen_name: 'littlepretty'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {

      for (var i = 0; i < tweets.length; i++) {
      console.log('---------------------------')
      console.log(tweets[i].text);
      console.log(tweets[i].created_at);
      console.log('---------------------------')
  };

  }
});
