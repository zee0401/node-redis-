const redis = require("redis");

const client = redis.createClient({
  host: "localhost",
  port: 6379,
});

client.on("error", function (err) {
  console.log("Error connecting" + err);
});

async function testRedisConnection() {
  try {
    await client.connect();
    console.log("Redis connection established");
  } catch (err) {
    console.log(" Error connecting to Redis" + err);
  } finally {
    client.quit();
  }
}
testRedisConnection();
