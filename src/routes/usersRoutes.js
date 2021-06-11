const Router = require("express").Router();
const {
  getAccountInfo,
  updateAccount,
  changePinHandlers,
  changePasswordHandlers,
} = require("../handlers/usersHandlers");
const { authentication } = require("../middlewares/authentication");
const {
  errorMulterHandler,
  uploadAvatarImage,
} = require("../middlewares/multer");

Router.get("/", authentication, getAccountInfo);
Router.patch(
  "/edit",
  authentication,
  errorMulterHandler(uploadAvatarImage.single("image")),
  updateAccount
);
Router.patch("/edit-pin", authentication, changePinHandlers);
Router.patch("/edit-password", authentication, changePasswordHandlers);

module.exports = Router;
