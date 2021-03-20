const redis = require("redis");
 
const publisher = redis.createClient();
const subscriber = redis.createClient();
 
publisher.publish("JS Community", JSON.stringify({
  message: "ES 2021 released today!"
}));

subscriber.on("message", function(channel, message) {
  console.log(channel, JSON.parse(message));
});
