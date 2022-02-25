var msg1 = {
    to: 8333016933,
           msg: "How are you?",
    delivered: true,
    read: false,
    from: 8333016934
};

for (prop in msg1)
    console.log(prop);
for (property in msg1)
    console.log(property + ":" + msg1[property]);
console.log('---------');
console.log(msg1["delivered"]);
var keyX = "delivered";
console.log(msg1[keyX]);

