const {
  Client: { plugin }
} = require("@botbind/klasa");

module.exports = {
  [plugin]() {
    this.commands.registerCoreDirectory(`${__dirname}/`);
  }
};
