
// adds current date to the jumbotron
moment(Date);
$('#currentDay').text(moment().format('dddd MMMM Do YYYY h:mm:ss A'));

var currentTime = moment();
currentTime = currentTime.startOf("hour");
var pastTime = moment().startOf("day").add(9, 'h');

var time1 = pastTime.add(0,"h");
time1 = time1.format('hh:mm A');
$('.block1').text(time1);

var time2 = pastTime.add(1,"h");
time2 = time2.format('hh:mm A');
$('.block2').text(time2);

var time3 = pastTime.add(1,"h");
time3 = time3.format('hh:mm A');
$('.block3').text(time3);

var time4 = pastTime.add(1,"h");
time4 = time4.format('hh:mm A');
$('.block4').text(time4);

var time5 = pastTime.add(1,"h");
time5 = time5.format('hh:mm A');
$('.block5').text(time5);

var time6 = pastTime.add(1,"h");
time6 = time6.format('hh:mm A');
$('.block6').text(time6);

var time7 = pastTime.add(1,"h");
time7 = time7.format('hh:mm A');
$('.block7').text(time7);

var time8 = pastTime.add(1,"h");
time8 = time8.format('hh:mm A');
$('.block8').text(time8);

var time9 = pastTime.add(1,"h");
time9 = time9.format('hh:mm A');
$('.block9').text(time9);

