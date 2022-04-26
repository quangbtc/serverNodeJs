let getHomePage = (req, res) => {
  return res.status(200).json({
    name: "Quang",
    age: "18",
  });
};
module.exports = {
  getHomePage,
};
