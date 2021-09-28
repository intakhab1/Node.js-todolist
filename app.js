const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.js');

const app = express();

const items = ['Buy Food', 'Cook Food','Eat Food'];
const workItems = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

app.get('/', function(req, res) {

const day = date.getDate();

  res.render('list', {listTitle: day, newListItems: items});
});

app.post('/', function(req,res){
    let item = req.body.newItem;
    // for adding item in work list
    if (req.body.list === 'Work') {
      workItems.push(item);
      res.redirect('/Work');
    } else{
      items.push(item);
      res.redirect('/');
    }
});

app.get('/Work', function(req,res){
  res.render('list', {listTitle: 'Work List', newListItems: workItems});
});

app.get('/about', function(req,res){
  res.render('about')
});

app.listen(3000, function() {
  console.log('server is running on port 3000');
});


// FOR LESS THEN 5 USE IF ELSE >5 USE SWITCH
//
// if (currentDay === 6 || currentDay === 0){
//   // res.send ('its weekend')
//   // res.write('its weekend')
//   // res.write ('party time')
//   // res.sendFile(__dirname + '/index.html')
//   day = 'Weekend';
//
// } else{
//   // res.send('no its working day')
//   // res.write ('no its working day')
//   // res.write('go to work')
//   // res.send();
//   day ='Weekday';
// }
