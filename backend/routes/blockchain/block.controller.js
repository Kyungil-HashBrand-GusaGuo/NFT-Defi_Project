const test = async (req, res) => {
  try {
    console.log(req.query.name);
    res.send("test");
  } catch (e) {
    console.error(e);
  }
};

module.exports = {
  test,
};
