//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const { default: mongoose } = require("mongoose");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect('mongodb://localhost:27017/todolistDB', {useNewUrlParser: true}, {useFindAndModify: false});

const itemSchema = {
    name: String
};

const Item = mongoose.model('item', itemSchema);

const item1 = new Item ({
  name: 'Work'
});

const item2 = new Item ({
  name: 'Study'
});

const item3 = new Item ({
  name: 'Exercise'
});

const defaultItems = [item1, item2, item3];

const listSchema = {
  name: String,
  items: [itemSchema]
};

const List = mongoose.model("List", listSchema);

app.get("/", function(req, res) {

  Item.find({}).then(function(foundItems){
    if (foundItems.length == 0) {
      Item.insertMany(defaultItems).then(function() {
        console.log('Data inserted');
      }).catch(function() {
        console.log('error');
      });
      res.redirect('/');
    } else {
      res.render("list", { listTitle: "Today", newListItems: foundItems });
    }
  }).catch(function(err){
    console.log(err);
  });

});

app.post("/", function(req, res){

  const itemName = req.body.newItem;
  const item = new Item ({
    name: itemName
  });

  item.save();
  res.redirect('/');
});

app.post("/delete", function(req, res) {

  const checkedBoxId = req.body.checkbox.trim();

  // Deletes item
  Item.deleteOne({_id: checkedBoxId}).then(function() {
    res.redirect("/");
  }).catch(function(err) {
    console.log(err);
  });

});

app.get("/:customListName", function(req, res) {
  const customListName = req.params.customListName;

  List.findOne({name: customListName}).then(function(foundList) { // if the name was found
    res.render("list", { listTitle: foundList.name, newListItems: foundList.items });
  }).catch(function() { // if the name wasnt found
    const list = new List ({
      name: customListName,
      items: defaultItems
    });
  
    list.save();
    res.redirect("/" + customListName);
  });

});

app.get("/about", function(req, res){
  res.render("about");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
