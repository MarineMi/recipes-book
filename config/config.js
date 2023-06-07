const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");
const session = require("express-session");
const ssr = require("../middleware/ssr");
const getUser = require("../middleware/getUser");
const sessionConfig = require("./sessionConfig");

const config = (app) => {
  app.use(session(sessionConfig));
  app.use(cookieParser());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(express.static(path.join(__dirname, "../public")));
  app.use(ssr);
  app.use(getUser);
};

module.exports = config;
