import db from "../models/index";
let getListUserService = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let listUser = await db.User.findAll();
      resolve({
        code: 0,
        data: listUser,
      });
    } catch (e) {
      reject(e);
    }
  });
};
module.exports = {
  getListUserService,
};
