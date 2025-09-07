import express from "express";
import "dotenv/config";
import webRoutes from "./routes/web";

const app = express();
const PORT = process.env.PORT || 8080;

//config view engine
app.set("view engine", "ejs");
app.set("views", "src/views");

//config body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//config routes
webRoutes(app);

//config static files
app.use(express.static("public"));

//start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
