var Sequelize = require("sequelize");
var sequelize = new Sequelize("irc", "irc", "irc", {
    "dialect": "postgres"
}); // TODO: Move this into config file

// Table Definitions
var User = sequelize.define("users", {
    username: Sequelize.STRING,
    passwordHash: Sequelize.STRING
});

var Server = sequelize.define("servers", {
    host: Sequelize.STRING,
    nick: Sequelize.STRING,
    active: Sequelize.BOOLEAN
});

var Channel = sequelize.define("channels", {
    name: Sequelize.STRING,
    isPm: Sequelize.BOOLEAN,
    active: Sequelize.BOOLEAN
})

var ChannelMessage = sequelize.define("channel_messages", {
    message: Sequelize.STRING
});

// Relationship Definitions
Server.belongsTo(User)
Channel.belongsTo(Server)
ChannelMessage.belongsTo(Channel)

// Export all models
exports.User = User;
exports.Server = Server;
exports.Channel = Channel;
exports.ChannelMessage = ChannelMessage;

// sequelize.drop();
sequelize.sync();
