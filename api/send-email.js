module.exports = (req, res) => {
  const sg = require("@sendgrid/mail");
  sg.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: "test@example.com",
    from: "test@example.com",
    subject: "Sending with Twilio SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  };
  sg.send(msg);
  res.send("Success");
};
