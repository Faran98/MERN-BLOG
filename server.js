const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.json({ extended: false }));

// Connect to MongoDB using Mongoose
mongoose
  .connect("mongodb://127.0.0.1:27017/mernblog", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("Error connecting to MongoDB:", err));

// Define Mongoose schemas and models
const commentSchema = new mongoose.Schema({
  username: String,
  text: String,
});

const articleSchema = new mongoose.Schema({
  name: String,
  comments: [commentSchema],
});

const Article = mongoose.model("Article", articleSchema);

// `withdb` function to handle operations
const withdb = async (operation, res) => {
  try {
    const result = await operation();
    res.status(200).json(result);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error performing database operation", error });
  }
};

// Routes
app.get("/api/articles/:name", async (req, res) => {
  const articleName = req.params.name;

  const operation = async () => {
    return await Article.findOne({ name: articleName });
  };
  withdb(operation, res);
});

app.post("/api/articles/:name/add-comment", async (req, res) => {
  const { username, text } = req.body;
  const articleName = req.params.name;

  withdb(async () => {
    const article = await Article.findOne({ name: articleName });
    article.comments.push({ username, text });
    await article.save();
    return article;
  }, res);
});

// app.get('/',(req,res)=>res.send("hello"));
// app.post('/',(req,res)=>res.send(`hello ${req.body.name}`));
// app.get('/hello/:name',(req,res)=>res.send(`hello ${req.params.name}`));
app.listen(PORT, () => console.log(`server started at port ${PORT}`));
