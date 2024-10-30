import { raw } from "body-parser";
import db from "../models/index";
import CRUDServices from "../services/CRUDservices";

let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    console.log(data);
    return res.render("homepage.ejs", {
      data: JSON.stringify(data),
    });
  } catch (e) {
    console.log(e);
  }
};

let getAboutPage = (req, res) => {
  return res.render("test/about.ejs");
};

let getCRUD = (req, res) => {
  return res.render("crud.ejs");
};

let postCRUD = async (req, res) => {
  let message = await CRUDServices.createNewUser(req.body);
  console.log(message);
  return res.send("post crud from server");
};

let displayGetCRUD = async (req, res) => {
  let data = await CRUDServices.getAllUser({
    raw: true,
  });
  console.log(data);
  return res.render("displayCRUD.ejs", { dataTable: data });
};

let getEditCRUD = async (req, res) => {
  let userId = req.query.id;
  if (userId) {
    let userData = await CRUDServices.getUserInfoById(userId);
    console.log(userData);
    return res.render("editCRUD.ejs", {
      user: userData,
    });
  } else {
    return res.send("User Not Found!");
  }
};

let putCRUD = async (req, res) => {
  let data = req.body;
  let allUser = await CRUDServices.updateUserData(data);
  return res.render("displayCRUD.ejs", {
    dataTable: allUser,
  });
};
module.exports = {
  getHomePage,
  getAboutPage,
  getCRUD,
  getEditCRUD,
  postCRUD,
  putCRUD,
  displayGetCRUD,
};
