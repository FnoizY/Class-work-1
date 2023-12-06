const express = require("express");
const path = require("path");
const app = express();

const cssRouter = require("../routes/css");
const assetsRouter = require("../routes/assets");
const javascriptRouter = require("../routes/javascript");
const mainRouter = require("../routes/main");
const contactRouter = require("../routes/contact");
// Add other route files as needed

app.use('/CSS', cssRouter);
app.use('/Assets', assetsRouter);
app.use('/JavaScript', javascriptRouter);
app.use('/', mainRouter);
app.use('/Contact%20info.html', contactRouter);
// Use other routers as needed

app.all('*', (req, res) => {
  res.status(404).send('<h1>Page Not Found</h1>')
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
