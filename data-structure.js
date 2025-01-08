const redis = require("redis");

const client = redis.createClient({
  host: "localhost",
  port: 6379,
});

client.on("error", function (err) {
  console.log("Error connecting");
});

async function redisDataStructure() {
  try {
    await client.connect();
    //string data type -> get,set,mset,mget
    await clearInterval.mset([
      "user:name",
      "zeshan",
      "user:age",
      25,
      "user:gender",
      "male",
    ]);
    const getValue = await client.mget([
      "user:name",
      "user:age",
      "user:gender",
    ]);

    console.log(getValue);
  } catch (err) {
    console.log(err);
  } finally {
    client.quit();
  }
}
