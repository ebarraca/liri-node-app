//
// 8. At the top of the `liri.js` file, add code to read and set any environment variables with the dotenv package:
var DotEnv = require('dotenv').config()

var Spotify = require('node-spotify-api');

var Twitter = require('twitter');

var request = require('request');

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
//
// var key = require('./key.js');
// var spotify = new Spotify(key.spotify);
// var client = new Twitter(key.twitter);

// // module.exports = {
// // 	essentials: essentials,
// // 	nicetohaves: nicetohaves





//3 if statements if process.argv[2] === "my tweet"
//then....

if (process.argv[2] === "my-tweets") {

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
}

if (process.argv[2] === "spotify-this-song") {
    var songTitle = process.argv[3];

    //this is b/c user types "spotify this song, and then the song name"

var spotify = new Spotify({
    id: '92097ecfeeef4f78923cd7326b10b2bd',
    secret: '43395a0622514ba2be7b22926897e65e'
}
);

    spotify.search({ type: 'track', query: songTitle }, function(err, data) {
        if ( err ) {
            console.log('Error occurred: ' + err);
            return;
        }

        console.log(data.tracks.items[0]);


        // Do something with 'data'
    });


}
