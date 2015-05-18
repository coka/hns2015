var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: 'o13x18XJMMpljgXFdN08MFIsz',
  consumer_secret: 'TIljUZnvanbSya99jiJLZ9Cy0WT498kwZ7uyMVd8BvroasUovP',
  access_token_key: '3288108405-CWzNWQd4Q1hrBwlbHlTKkMbT9KLIiwlh6QMFbMd',
  access_token_secret: 'vn8ku4ERGMMrG4FmCp7xJKDuofKqomlldgBwWwQfT6kz8'
});

client.post('statuses/update', {status: 'test'},  function(error, tweet, response){
  if(error) throw error;
  console.log(tweet);  // Tweet body.
  console.log(response);  // Raw response object.
});
