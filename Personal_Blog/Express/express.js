// const express = require("express");
// const path = require("node:path");
// const app = express();

// app.use('*/CSS',express.static(path.join(__dirname, '..', 'CSS')))
// app.use('*/Assets',express.static(path.join(__dirname, '..', 'Assets')))
// app.use('*/JavaScript',express.static(path.join(__dirname, '..', 'JavaScript')))



// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '..', 'Main Page.html')
//     )
//   })
//   app.get('/Main%20Page.html', (req, res) => {
//     res.sendFile(path.join(__dirname, '..', 'Main Page.html')
//     )
//   })
//   app.get('/Contact%20info.html', (req, res) => {
//     res.sendFile(path.join(__dirname, '..', 'Contact info.html')
//     )
//   })
//   app.get('/Main%20Page-AR.html', (req, res) => {
//     res.sendFile(path.join(__dirname, '..', 'Main Page-AR.html')
//     )
//   })
//   app.get('/Advanced%20Table.html', (req, res) => {
//     res.sendFile(path.join(__dirname, '..', 'Advanced Table.html')
//     )
//   })
//   app.get('/Hire%20me.html', (req, res) => {
//     res.sendFile(path.join(__dirname, '..', 'Hire me.html')
//     )
//   })
//   app.get('/tic%20tac%20toe.html', (req, res) => {
//     res.sendFile(path.join(__dirname, '..', 'tic tac toe.html')
//     )
//   })
//   app.get('/gameOfThrones.html', (req, res) => {
//     res.sendFile(path.join(__dirname, '..', 'gameOfThrones.html')
//     )
//   })
  
//   app.all('*', (req, res) => {
//     res.status(404).send('<h1>Page Not Found</h1>')
//   })
  
// app.listen(5000,()=>{
//     console.log("using port 5000")
// })