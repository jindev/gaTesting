var GA = require('googleanalytics'),
    util = require('util'),
    config = {
        "user": "bjkim.dev@mindquake.co",
        "password": "akdlsem331"
    },
    ga = new GA.GA(config);

exports.getData = function(req,res){

var dimensions = [
  'ga:date',
  'ga:daysSinceLastSession'
 
];

var metrics = [
  'ga:newUsers'
];

ga.login(function(err, token) {
  var options = {
    'ids': 'ga:83478455',
    'start-date': '2015-02-01',
    'end-date': '2015-02-05',
    'dimensions': dimensions.join(','),
    'metrics': metrics.join(','),
    'sort': 'ga:date'
  };
  

  ga.get(options, function(err, entries) {
    if (!err) {

      console.log(entries);

      console.log('date,pageviews,eventLabel,transactions,sales');
      entries.forEach(function(entry) {
        var buf = '';

        dimensions.forEach(function(dimension){
          buf += entry.dimensions[0][dimension] + ',';
        });


        metrics.forEach(function(metric) {
          buf += entry.metrics[0][metric] + ',';
        });

        console.log(buf);

      });
    } else {  
      console.log(err);
    }
  });
});



}    

