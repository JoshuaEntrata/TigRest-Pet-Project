const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

/*****************************
 *          POSTS
 * ***************************/

// In-memory data storage
let posts = [];
let postIdCounter = 1;

const testPost = {
  id: 1,
  datetime_posted: "1 January 2025, 4:20pm",
  message: "Testing",
  count: "10",
  comments: [
    {
      id: 1,
      message: "Very good post...",
      datetime_posted: "21 September 2024, 9:28pm",
      count: "1",
      username: "Gwen Apuli",
    },
    {
      id: 2,
      message: "Support!",
      datetime_posted: "23 September 2024, 5:28pm",
      count: "0",
      username: "Colet Vergara",
    },
  ],
};

posts.push(testPost);
postIdCounter++;

app.get("/", (req, res) => {
  res.send("Welcome to tigreddit 🐯");
});

// CREATE POST
app.post("/posts", (req, res) => {
  const { title, message, username } = req.body;
  if (!title | !message | !username) {
    res.status(400).json({ error: "Title, Message, and Username is required" });
  }

  const newPost = {
    id: postIdCounter++,
    datetime_posted: new Date().toLocaleString(),
    title: title,
    message: message,
    count: 0,
    username: username,
    comments: [],
  };

  posts.push(newPost);
  res.status(201).json(newPost);
});

// READ
// All posts
app.get("/posts", (req, res) => {
  res.json(posts);
});

// Single post
app.get("/posts/:id", (req, res) => {
  const post = posts.find((p) => p.id === parseInt(req.params.id));

  if (!post) {
    return res
      .status(404)
      .json({ error: `Post with id: ${req.params.id} not found` });
  }

  res.json(post);
});

// UPDATE POST
app.put("/posts/:id", (req, res) => {
  const post = posts.find((p) => p.id === parseInt(req.params.id));
  if (!post) {
    return res
      .status(404)
      .json({ error: `Post with id: ${req.params.id} not found` });
  }
  const { title, message } = req.body;
  if (title) post.title = title;
  if (message) post.message = message;

  res.json(post);
});

// DELETE POST
app.delete("/posts/:id", (req, res) => {
  const postIndex = posts.findIndex((p) => p.id === parseInt(req.params.id));
  if (postIndex === -1) {
    return res
      .status(404)
      .json({ error: `Post with id: ${req.params.id} not found` });
  }

  posts.splice(postIndex, 1);
  // status 204 doesn't send any content back
  return res
    .status(200)
    .json({ message: `Post with id: ${req.params.id} deleted` });
});

/*****************************
 *         COMMENTS
 * ***************************/
// CREATE COMMENTS
app.post("/posts/:id/comments", (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find((p) => p.id === postId);

  if (!post) {
    return res.status(404).json({ error: `Post with id: ${postId} not found` });
  }

  const { message, username } = req.body;
  if (!message || !username) {
    return res.status(400).json({ error: "Message and Username are required" });
  }

  const newComment = {
    id: post.comments.length + 1, // Simple ID generation
    message: message,
    datetime_posted: new Date().toLocaleString(),
    count: 0,
    username: username,
  };

  post.comments.push(newComment);
  res.status(201).json(newComment);
});

// READ COMMENTS
app.get(`/posts/:id/comments`, (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find((p) => p.id === postId);

  if (!post) {
    return res.status(404).json({ error: `Post with id: ${postId} not found` });
  }

  res.json(post.comments);
});

app.listen(port, () => {
  console.log(`Blooms to the moon 🌜 on http://localhost:${port}`);
});
