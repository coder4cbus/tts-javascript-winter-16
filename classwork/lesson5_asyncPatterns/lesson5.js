// exercise 1: array functions
var players = [
  {firstName: 'Cam', lastName: 'Newton', position: 'QB', touchdowns: 32},
  {firstName: 'Derek', lastName: 'Anderson', position: 'QB', touchdowns: 0},
  {firstName: 'Jonathan', lastName: 'Stewart', position: 'RB', touchdowns: 12},
  {firstName: 'Mike', lastName: 'Tolbert', position: 'RB', touchdowns: 8},
  {firstName: 'Fozzy', lastName: 'Whittaker', position: 'RB', touchdowns: 3},
  {firstName: 'Ted', lastName: 'Ginn', position: 'WR', touchdowns: 9},
  {firstName: 'Devin', lastName: 'Funchess', position: 'WR', touchdowns: 2}
];

// forEach
// filter
// map
// reduce
// 
var nameMatch = players.find(function(item) {
	return item.firstName === "Mike";
});

// console.log(nameMatch);

// var findMatch = players.find("");

var runningBacks = players.filter(function(item) {
	return item.position === "RB"; //&& item.touchdowns > 5;
});

var runningBacksWith5Touchdowns = players.filter(function(item) {
	return item.position === "RB" && item.touchdowns > 5;
}).map(function(player) {
	return player.firstName + " " + player.lastName;
});

console.log(runningBacksWith5Touchdowns);

// var lastNames = players.map(function(item) {
// 	return item.lastName;
// });

// console.log(lastNames);

var runningBacksTotalTouchdowns = runningBacks.reduce(function(previousValue, currentValue) {
	return previousValue + currentValue.touchdowns;
}, 0);

console.log(runningBacksTotalTouchdowns);
