const express = require('express');
const app = express();

app.use(express.static('public'));


// トップ画面を表示するルーティングを作成
app.get('/',(req,res) => {
  res.render('top.ejs')
})

// 一覧画面を表示するルーティングを作成
app.get('/index', (req, res) => {
  res.render('index.ejs');
});

const port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log('Listening on ${port}');

