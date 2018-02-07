//
// 8. At the top of the `liri.js` file, add code to read and set any environment variables with the dotenv package:
var DotEnv = require('dotenv').config()

var spotify = require('spotify');
console.log (spotify);

var twitter = require('twitter');
console.log (twitter);

var request = require('request');
console.log(request);

// ```js
// require("dotenv").config();
// ```
//
// 9. Add the code required to import the `keys.js` file and store it in a variable.
//
// * You should then be able to access your keys information like so
//
//   ```js
//   var spotify = new Spotify(keys.spotify);
//   var client = new Twitter(keys.twitter);

var key = require('./key.js');
var spotify = new Spotify(key.spotify);
var client = new Twitter(key.twitter);

// // module.exports = {
// // 	essentials: essentials,
// // 	nicetohaves: nicetohaves



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
