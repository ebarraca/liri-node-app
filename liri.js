//
// 8. At the top of the `liri.js` file, add code to read and set any environment variables with the dotenv package:
require('dotenv').config()

var Spotify = require('node-spotify-api');

var Twitter = require('twitter');

var request = require('request');

var omdb = require('omdb');
var keys = require('./key.js')

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


if (process.argv[2] === "my-tweets") {

    var client = new Twitter(keys.twitter);

    var params = {screen_name: 'littlepretty'};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
      if (!error) {

          for (var i = 0; i < tweets.length; i++) {

              var twitterResults =
                  "@" + tweets[i].user.screen_name + ": " +
                  tweets[i].text + "\r\n" +
                  tweets[i].created_at + "\r\n" +
                  "-------------------------------------------------------------" + "\r\n";
                  console.log(twitterResults);

      };

      }
    });
}

if (process.argv[2] === "spotify-this-song") {
    var songTitle = process.argv[3];

    //this is b/c user types "spotify this song, and then the song name"

var spotify = new Spotify(keys.spotify);


    spotify.search({ type: 'track', query: songTitle }, function(err, data) {
        if ( err ) {
            console.log('Error occurred: ' + err);
            return;
        }

        var songInfo = data.tracks.items
        for (var i = 0; i < songInfo.length; i++) {

                var spotifyResults =
                    "Artist: " + songInfo[i].artists[0].name + "\r\n" +
                    "Song: " + songInfo[i].name + "\r\n" +
                    "Album the song is from: " + songInfo[i].album.name + "\r\n" +
                    "Preview Url: " + songInfo[i].preview_url + "\r\n" +
                    "-------------------------------------------------------------" + "\r\n";
                    console.log(spotifyResults);
            }
    });
}

// * If no song is provided then your program will default to "The Sign" by Ace of Base.

//
if (process.argv[2] === "movie-this") {
    var movie = process.argv[3];
    // Then run a request to the OMDB API with the movie specified
    var queryUrl = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

    // This line is just to help us debug against the actual URL.
    // console.log(queryUrl);

    // Then create a request to the queryUrl
    var request = require("request");
    request(queryUrl, function(error, response, body) {

      // If the request is successful
      if (!error && response.statusCode === 200) {
      // ...

      var OMDBResults =
          "Year: " + JSON.parse(body).Year + "\r\n" +
          "IMDB Rating: " + JSON.parse(body).imdbRating + "\r\n" +
          "Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value + "\r\n" +
          "Country: " + JSON.parse(body).Country + "\r\n" +
          "Language: " + JSON.parse(body).Language + "\r\n" +
          "Plot: " + JSON.parse(body).Plot + "\r\n" +
          "Actors: " + JSON.parse(body).Actors + "\r\n" +
          "-------------------------------------------------------------" + "\r\n";
          console.log(OMDBResults);
          // console.log(JSON.parse(body));

      };
    });
};
if (process.argv[2] === "do-what-it-says") {
    var fs = require("fs");
    fs.readFile("random.txt", "utf8", function(error, data) {

      // If the code experiences any errors it will log the error to the console.
      if (error) {
        return console.log(error);
      }

      // We will then print the contents of data
      console.log(data);

      // Then split it by commas (to make it more readable)
      var dataArr = data.split(",");

    });
};
