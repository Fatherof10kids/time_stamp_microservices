
var monthArr = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var convertToTime = function(unix){
  console.log("converted Time");
  var date = new Date((+unix)*1000.0);
if(isNaN(date.getMonth())){
  return null;
}
  return monthArr[date.getMonth()] +' '+date.getDate()+', ' + date.getFullYear();
}
var convertToUnix =function(date){
  console.log("converted unix");
var date1 = Date.parse(date);
if(isNaN(date1)) return null;
return (date1/1000.0).toString();
}

module.exports.convertToTime = convertToTime;
module.exports.convertToUnix = convertToUnix;
