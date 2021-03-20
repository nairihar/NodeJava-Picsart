const redis = require("redis");
 
const publisher = redis.createClient();
const subscriber = redis.createClient();
 
subscriber.on("message", function(channel, message) {
  console.log(channel, JSON.parse(message));
  if () {
    // 
    publisher.publish()
  }
});
 
subscriber.subscribe("JS Community");

SQL


Redis
  id2 : StringifY({ ...game data })

Server1

Server2

Server3

Server4
