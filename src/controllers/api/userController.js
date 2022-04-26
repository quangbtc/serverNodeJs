import userService from "../../services/userServices";
let getListUsers = async (req, res) => {
  try {
    let data = await userService.getListUserService();
    return res.status(200).json(data);
  } catch (e) {
    console.log("Check error:", e);
  }
};
module.exports = {
  getListUsers,
};
