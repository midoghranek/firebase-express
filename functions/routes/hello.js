exports.hello = (req, res) => {
  res.send("Hello from Firebase!");
};

exports.post = (req, res) => {
  return res.status(200).json({ message: req.body.msg });
};
