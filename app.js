
//find the body tag and store it in a variable called 'body'

//find the body tag and store it in a variable called 'body'
var body = document.querySelector("body");

var taxiLocationCounter = 1;

//event handler when the key is pressed
body.onkeydown = function(e){
    var trafficLight = new TrafficLight(taxiLocationCounter);

    if (e.keyCode === 38){
      trafficLight.makeRed();
    }

    else if (e.keyCode === 40){
      trafficLight.makeGreen();
    }
    else if(e.keyCode === 16){

      trafficLight.makeOrange();
    }
    else if ((e.keyCode === 39) && (trafficLight.color() === "green")) {
        moveForward();
    }
    else if (e.keyCode === 37) {
     moveBackward();
        }

    displayMessage (createLocationClass (taxiLocationCounter));
}

    //var Name = keyCodeName(e.keyCode);

function moveForward() {
  var currentLocation = createLocationClass (taxiLocationCounter);
  taxiLocationCounter++
  if(taxiLocationCounter > 9){
    taxiLocationCounter = 1;
  }
  var newLocation =  createLocationClass (taxiLocationCounter);
  moveTaxi (currentLocation, newLocation);
}


function moveBackward() {
 var currentLocation = createLocationClass (taxiLocationCounter);
 taxiLocationCounter--;
 if (taxiLocationCounter === 0){
   taxiLocationCounter = 9;
 }
 var newLocation = createLocationClass(taxiLocationCounter);
 moveTaxi(currentLocation, newLocation);
}

function createTrafficLightClass(taxiLocationCounter){

  switch (taxiLocationCounter) {
   case 1:
     result = ".one-of-nine";
     break;

   case 2:
     result = ".two-of-nine";
     break;

   case 3:
     result = ".three-of-nine";
     break;

   case 4:
     result = ".four-of-nine";
     break;

   case 5:
     result = ".five-of-nine";
     break;

   case 6:
     result = ".six-of-nine";
     break;

   case 7:
     result = ".seven-of-nine";
     break;

   case 8:
     result = ".eight-of-nine";
     break;

   case 9:
     result = ".nine-of-nine";
     break;

   default:
     result = "";
   }

 return result;

}

var TrafficLight = function (trafficLightNumber) {
  var className = createTrafficLightClass(trafficLightNumber);
  var trafficLightElement = document.querySelector(className);

  this.makeGreen = function() {
    trafficLightElement.classList.add("lights-go");
    trafficLightElement.classList.remove("lights-slowdown");
    trafficLightElement.classList.remove("lights-stop");

  }
  this.makeOrange = function () {
    trafficLightElement.classList.add("lights-slowdown");
    trafficLightElement.classList.remove("lights-go");
    trafficLightElement.classList.remove("lights-stop");
  }
  this.makeRed = function () {
    trafficLightElement.classList.add("lights-stop");
    trafficLightElement.classList.remove("lights-go");
    trafficLightElement.classList.remove("lights-slowdown");
  }
  this.color = function (){
    if (trafficLightElement.classList.contains("lights-go")){
      return 'green';
    }
    else if (trafficLightElement.classList.contains("lights-slowdown")){
      return 'orange';
    }
    else if (trafficLightElement.classList.contains("lights-stop")){
      return "red";
    }
  }
}


function createLocationClass(i){

switch (i) {
   case 1:
     result = "slot-one-of-nine";
     break;

   case 2:
     result = "slot-two-of-nine";
     break;

   case 3:
     result = "slot-three-of-nine";
     break;

   case 4:
     result = "slot-four-of-nine";
     break;

   case 5:
     result = "slot-five-of-nine";
     break;

   case 6:
     result = "slot-six-of-nine";
     break;

   case 7:
     result = "slot-seven-of-nine";
     break;

   case 8:
     result = "slot-eight-of-nine";
     break;

   case 9:
     result = "slot-nine-of-nine";
     break;

   default:
     result = "";
 }

 return result;

}



function keyCodeName(keyCode){
  if (keyCode === 37) {
    return "left";
  }

  else if (keyCode === 38) {
    return "up";
  }
  else if (keyCode === 39) {
    return "right";
  }

  else if (keyCode === 40){
    return "down";
  }

 else {
   return "";
  }
}
