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
    const { name, age, gender } = await client.mGet([
      "user:name",
      "user:age",
      "user:gender",
    ]);

    console.log(name, age, gender);

    //list data type -> lpush,rpush,lpop,rpop,llen,lrange

    await client.lPush("user:friends", [
      "irshad",
      "Arham",
      "Salman",
      "Tauseef",
      "Mohammad",
    ]);

    const range = await client.lRange("user:friends", 0, -1);
    console.log(range);

    const firstFriend = await client.lPop("user:friends");

    console.log(firstFriend);
  } catch (err) {
    console.log(err);
  } finally {
    client.quit();
  }
}
redisDataStructure();
