var express = require("express");
var router = express.Router();


router.get("/names",function(req,res){
  res.json([{name: "Peter"}, {name: "Kurt"},{name: "Hanne"}]);
});

module.exports = router;