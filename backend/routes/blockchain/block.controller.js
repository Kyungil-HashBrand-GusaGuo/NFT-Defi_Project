const test = async (req, res) => {
  try {
    console.log(req.query.name);
    res.send("test");
  } catch (e) {
    console.error(e);
  }
};
const test2 = async (req, res) => {
  try {
    console.log(req.body.data);
    res.send("test");
  } catch (e) {
    console.error(e);
  }
};

module.exports = {
  test,
  test2
};
