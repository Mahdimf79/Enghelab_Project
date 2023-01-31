import { resolve } from "path";

export default {
  dbkey: process.env.SECRET_KEY || "Me1vfSudFwiPqhl78yRbTA1kW9VoIZ",
  url: process.env.EXTERNAL_URL || "http://localhost:8080",
  db: process.env.DB || "mongodb://localhost/comma",
  uploadDir: resolve(__dirname, "static/uploads"),
  otkey: "l4E7MDeLCt3SbrIoY2UHWBiONVh9f1RPGvg",
  emailAddress: "mahdimol66@gmail.com",
  emailPassword: "1379m9731M:",
  title: "Comma",
  port: "8080",
};
