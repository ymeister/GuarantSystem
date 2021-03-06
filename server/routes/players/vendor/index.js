var express = require('express');
var router = express.Router();
var playersScheme = require('../../../db/DBSchema');
var dbhelper = require('../../../db/DBHelper');

router.get('/In', function (req, res) {
  var pUser = dbhelper.getAllUsers;//TODO tmp

      Promise.all([pUser()]).then(function([user]){//TODO tmp
        res.render('players/vendorIn.html',{
            listOfUsers : user,
            listOfpendingItems : dbhelper.getAllItems
        });
      }).catch(function(err){
        console.log('Error: '+ err);
      });
});

router.get('/requests/list', function (req, res) {
  res.render('players/vendor/requests/list.html',{//TODO tmp
    listofReceivedPartnerships : ['listofReceivedPartnerships1','listofReceivedPartnerships2'],
    listofRequestedPartnerships : ['listofRequestedPartnerships1','listofRequestedPartnerships2']
  });
});

router.get('/partners/list', function (req, res) {
  var pManufacturer = dbhelper.getAllManufacturers;//TODO tmp

  Promise.all([pManufacturer()]).then(function([manuf]){//TODO tmp
    res.render('players/vendor/partners/list.html',{
        listOfManufacturer : manuf
    });
  }).catch(function(err){
    console.log('Error: '+ err);
  });
});

router.get('/partners/addPartners', function (req, res) {
  var pManufacturer = dbhelper.getAllManufacturers;//TODO tmp

  Promise.all([pManufacturer()]).then(function([manuf]){//TODO tmp
    res.render('players/vendor/partners/addPartners.html',{
        listOfManufacterer : manuf
    });
  }).catch(function(err){
    console.log('Error: '+ err);
  });
});

router.get('/:id', function (req, res) {
  var pVendor = new Promise(function(resolve, reject) {
    console.log('ID: '+req.params.id);
    var vendor = playersScheme.Vendor.findOne({_id : req.params.id}, function(err, vendor) {
      if(err) return reject(err);
      resolve(vendor);
    });
  });

  //TODO товары

  var pManufacturer = dbhelper.getAllManufacturers;//TODO tmp

  Promise.all([pManufacturer(),pVendor]).then(function([manuf,vend]){//TODO tmp
    res.render('players/vendor.html',{
        listOfManufacterer : manuf,
        vendor : vend,
        listOfpendingItems : dbhelper.getAllItems
    });
  }).catch(function(err){
    console.log('Error: '+ err);
  });
});

router.get('/requests/apply/:reqId',function(req,res){
  res.redirect('/players/vendor/requests/list');
});

router.get('/partners/addPartners/apply/:reqId',function(req,res){
  res.redirect('/players/vendor/partners/addPartners');
});

router.post('/In', function (req, res) {
  res.redirect('/players/vendor/In');
});

module.exports = router;