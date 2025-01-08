const redis = require("redis");

const client = redis.createClient({
  host: "localhost",
  port: 6379,
});

client.on("error", function (err) {
  console.log("Error connecting");
});

async function testRedisConnection() {
  try {
    await client.connect();
    console.log("Redis connection established");

    await client.set("name", "zeshan");

    const getValue = await client.get("name");
    console.log("Value is " + getValue);

    const deleteCount = await client.del("name");
    console.log("Deleted " + deleteCount + " keys");
  } catch (err) {
    console.log(" Error connecting to Redis" + err);
  } finally {
    client.quit();
  }
}
testRedisConnection();
