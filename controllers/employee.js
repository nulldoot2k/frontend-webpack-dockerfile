const logger = require("../utils/logger");

const home = (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
  logger.info("Good")
  res.status(200).json({ success: true });
}

module.exports = { 
  home,
};
