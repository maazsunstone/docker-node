import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    status: true,
    message: "Hello",
  });
});
const port = 3001;
app.listen(port, () => {
  console.log(`The Port is running at ${port}`);
});
