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

    //extract all the friends
    const range = await client.lRange("user:friends", 0, -1);
    console.log(range);

    const firstFriend = await client.lPop("user:friends");

    console.log(firstFriend);

    //---sMmebership data type -> sadd,srem,sismember,smembers

    await client.sAdd("user:Nicknames", ["john", "jonny", "xyz"]);

    const checkMember = await client.sIsMember("user:Nicknames", "jonny");

    console.log(checkMember);

    //sMembers

    const allNicknames = await client.sMembers("user:Nicknames");
    console.log(allNicknames);

    //srem

    const deleteNickname = await client.sRem("user:Nicknames", "jonny");
    console.log(deleteNickname);
  } catch (err) {
    console.log(err);
  } finally {
    client.quit();
  }
}
redisDataStructure();
