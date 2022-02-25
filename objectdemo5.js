var  msg1 = {
    to: 8333016933,
           msg: "How are you?",
    delivered: true,
    read: false,
    from: 8333016934
};

for(property in msg1)
console.log(property + ":" + msg1[property]);
console.log("--------");
msg1.timestamp = 10;

for(property in msg1)
console.log(property + ":" + msg1[property]);
console.log("----------");

delete msg1.from;
for(property in msg1)
console.log(property + ":" + msg1[property]);