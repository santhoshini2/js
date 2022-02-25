var user ={
    name:"santhoshini"
};

var permissions1 = {
    canView: true
};
var permissions2 = {
    canEdit :true
};

Object.assign(user,permissions1,permissions2);
console.log(user);