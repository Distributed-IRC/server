var models = require("./models");

// models.User.create({"username": "camerongray", "passwordHash": "foobar"});
// models.User.findById(1).then(function(user) {
//     models.Server.create({
//         "host": "irc.imaginarynet.uk",
//         "nick": "camerongray",
//         "active": true,
//         "userId": user.id
//     });
// });

// models.Server.findById(4, {"include": [models.User]}).then(function(server) {
//     console.log(server.user.username);
// });

// models.User.create({"username": "joebloggs", "passwordHash": "bazqux"});
// var irc = require("irc");
//
// var client = new irc.Client("SERVER", "NICK", {
//     channels: ["#camerongray_dev"]
// });
//
// client.addListener("message", function(from, to, message) {
//     console.log(from + ' => ' + to + ': ' + message);
// });
//
// client.addListener("join", function(channel, nick, message) {
//     client.say(channel, "Hello!");
// });
