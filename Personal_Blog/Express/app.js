const express = require("express");
const path = require("path");
const app = express();



const cssRouter = require("../routes/css");
const assetsRouter = require("../routes/assets");
const javascriptRouter = require("../routes/javascript");
const mainRouter = require("../routes/main");
const contactRouter = require("../routes/contact");
const advancedTable = require("../routes/advanced-table");
const GOT = require("../routes/game-of-thrones");
const hireMe = require("../routes/hire-me");
const ticTacToe = require("../routes/tic-tac-toe");



app.use('/CSS', cssRouter);
app.use('/Assets', assetsRouter);
app.use('/JavaScript', javascriptRouter);
app.use('/', mainRouter);
app.use('/Contact%20info.html', contactRouter);
app.use('/Advanced%20Table.html', advancedTable);
app.use('/gameOfThrones.html', GOT);
app.use('/Hire%20me.html', hireMe);
app.use('/tic%20tac%20toe.html', ticTacToe);



app.all('*', (req, res) => {
  res.status(404).send('<h1>Page Not Found</h1>')
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
