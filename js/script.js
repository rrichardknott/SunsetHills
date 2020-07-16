
$("#errorAlert").hide();
$("#errorAlertButton").hide();

$("#submitButton").click(function () {   

    //check to make sure all fields are entered
    if ($("#firstBuilding").val().length == 0 || $("#secondBuilding").val().length == 0 || $("#thirdBuilding").val().length == 0 || $("#fourthBuilding").val().length == 0 || $("#fifthBuilding").val().length == 0 || $("#sixthBuilding").val().length == 0) {
        $("#errorAlert").show();
        $("#errorAlertButton").show();
        $("#submitButton").hide();
        $("#clearButton").hide();
    } 
    //check to make sure all fields are numbers
    if (isNaN($("#firstBuilding").val()) || isNaN($("#firstBuilding").val()) || isNaN($("#firstBuilding").val()) || isNaN($("#firstBuilding").val()) || isNaN($("#firstBuilding").val()) || isNaN($("#firstBuilding").val())) {
        $("#errorAlert").show();
        $("#errorAlertButton").show();
        $("#submitButton").hide();
        $("#clearButton").hide();
    } 
    //check to make sure all fields are not negative numbers
    if ($("#firstBuilding").val() <= 0 || $("#secondBuilding").val() <= 0 || $("#thirdBuilding").val() <= 0 || $("#fourthBuilding").val() <= 0 || $("#fifthBuilding").val() <= 0 || $("#sixthBuilding").val() <= 0) {
        $("#errorAlert").show();
        $("#errorAlertButton").show();
        $("#submitButton").hide();
        $("#clearButton").hide();
    } 

    let firstBuilding = parseInt($("#firstBuilding").val());    
    let secondBuilding = parseInt($("#secondBuilding").val());    
    let thirdBuilding = parseInt($("#thirdBuilding").val());    
    let fourthBuilding = parseInt($("#fourthBuilding").val());    
    let fifthBuilding = parseInt($("#fifthBuilding").val());   
    let sixthBuilding = parseInt($("#sixthBuilding").val());    

    let buildings = [firstBuilding, secondBuilding, thirdBuilding, fourthBuilding, fifthBuilding, sixthBuilding];

    //a new array from our current array will be created to represent those buildings that can see the sunset
    let sunsetBuildings = new Array();    

    //create an empty variable representing the tallest building
    let tallestBuilding = 0;

    for (var i = 0; i < 6; i++) {
        //begin by assigning the first building in the array to the tallestBuilding
        if (buildings[i] > tallestBuilding) {            
            sunsetBuildings.push(buildings[i]);
            tallestBuilding = buildings[i];
        }
        //output the sunsetBuildings to the user
        $("#sunsetBuildingsLabel").html(`There are ${sunsetBuildings.length} buildings that can see the sunset.  <br/> And their heights are: ${sunsetBuildings.toString()}.`);
    }
});

$("#errorAlertButton").on("click", function () {
    $("#errorAlert").hide();
    $("#errorAlertButton").hide();
    $("#submitButton").show();
    $("#clearButton").show();
    $("#firstBuilding").focus();
});

$("#clearButton").on("click", function () {
    $("#firstBuilding").val("");
    $("#secondBuilding").val("");
    $("#thirdBuilding").val("");
    $("#fourthBuilding").val("");
    $("#fifthBuilding").val("");
    $("#sixthBuilding").val("");
    $("#firstBuilding").focus();
});

// Interval function to change the image on main page from day to night/night to day
var counter = 0;
setInterval(function () {

    let buildings = "/images/buildings.jpg";
    let buildingsNight = "/images/buildingsNight.jpg";
    let image = $("#titleImage");

    if (counter == 0) {
        $(image).attr("src", "/images/buildingsNight.jpg");
        counter = 1;
    } else {
        $(image).attr("src", "/images/buildings.jpg");
        counter = 0;
    }
}, 3000); //set to change image every 3 seconds.




