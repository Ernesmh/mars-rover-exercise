var marsGrid = [
["rover", null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null, null]
]

var rover={
  direction: "N",
  x:0,
  y:0,
  travelLog: [[0,0]],
}

console.log("The initial Rover's position is [" + rover.travelLog + "] and Rover is looking " + rover.direction);
console.log('\n');

function turnLeft(rover){
  console.log("turnLeft was called!");
  switch (rover.direction){
    case "N":
    rover.direction = "W"
    console.log("Rover is now looking West")
    break;
    case "W":
    rover.direction = "S"
    console.log("rover is now looking South")
    break;
    case "S":
    rover.direction = "E"
    console.log("Rover is now looking East")
    break;
    case "E":
    rover.direction = "N"
    console.log("Rover is now looking North")
    break;
  }
}

function turnRight(rover){
  console.log("turnRight was called!");
  switch (rover.direction){
    case "N":
    rover.direction = "E"
    console.log("Rover is now looking East")
    break;
    case "W":
    rover.direction = "N"
    console.log("rover is now looking North")
    break;
    case "S":
    rover.direction = "W"
    console.log("Rover is now looking West")
    break;
    case "E":
    rover.direction = "S"
    console.log("Rover is now looking South")
    break;
}
}

function moveForward(rover){

  console.log("moveForward was called");
  console.log ("Rover's position was [" + rover.x + "," + rover.y + "].");
  if(rover.direction == "N"){
    rover.y -=1;
    rover.travelLog.push([rover.x,rover.y]);
  } else if (rover.direction == "W"){
    rover.x -=1;
    rover.travelLog.push([rover.x,rover.y]);
  } else if(rover.direction == "S"){
    rover.y +=1;
    rover.travelLog.push([rover.x,rover.y]);
  } else if(rover.direction == "E"){
    rover.x +=1;
    rover.travelLog.push([rover.x,rover.y]);
  }else{
    console.log("Rover can not go forward!")
  }
console.log ("Rover's position is now [" + rover.x + "," + rover.y + "].");
console.log('\n');
}

function moveBackward(rover){

  console.log("moveBackward was called");
  console.log ("Rover's position was [" + rover.x + "," + rover.y + "].");
  if(rover.direction == "N"){
    rover.y +=1;
  } else if (rover.direction == "W"){
    rover.x +=1;
    rover.travelLog.push([rover.x,rover.y]);
  } else if(rover.direction == "S"){
    rover.y -=1;
    rover.travelLog.push([rover.x,rover.y]);
  } else if(rover.direction == "E"){
    rover.x -=1;
    rover.travelLog.push([rover.x,rover.y]);
  }else{
    console.log("Rover can not go backward!")
  }

console.log ("Rover's position is now [" + rover.x + "," + rover.y + "].");
console.log('\n');
}

var command = "rffbrffblbfrbff";

for (var i = 0; i < command.length; i++){
var someLetter = command.charAt(i);
    switch(someLetter){
      case 'r': turnRight(rover);
      break;
      case 'l': turnLeft(rover);
      break;
      case 'f': moveForward(rover);
      break;
      case 'b': moveBackward(rover);
      break;
      default:
        console.log("The command you used is not a valid command. Please use 'r', 'l', 'f' or 'b'")
      break;
}
}

console.log(rover.travelLog);
