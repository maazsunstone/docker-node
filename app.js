import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    status: true,
    message: "Hello from API Response!",
  });
});
console.log("Hello World!")
const port = 3001;
app.listen(port, () => {
  console.log(`The Port is running at ${port}`);
});
