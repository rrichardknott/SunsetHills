$(document).ready(function () {

    //Chart
    var myChart = $("#myChart")[0].getContext("2d");    
    var theSunsetBuildings = new Chart(myChart, {
        type: "bar",
        data: {
            labels: [" ", "Height 1", "Height 2", "Height 3", "Height 4", "Height 5", "Height 6"],
            datasets: [{
                label: "Buildings",
                data: [0, 2, 2, 2, 2, 2, 2],
                backgroundColor: ["white", "red", "yellow", "blue", "rebeccapurple", "orange", "black"]
            }]

        },
        options: {}
    });
     //End Chart   
    
    $(".numberInput").keyup(function () {
     //Chart        
        myChart = $("#myChart")[0].getContext("2d");        
        theSunsetBuildings = new Chart(myChart, {
            type: "bar",
            data: {
                labels: [" ", "Height 1", "Height 2", "Height 3", "Height 4", "Height 5", "Height 6"],
                datasets: [{
                    label: "Buildings",                    
                    data: [0, parseInt($("#firstBuilding").val()), parseInt($("#secondBuilding").val()), parseInt($("#thirdBuilding").val()), parseInt($("#fourthBuilding").val()), parseInt($("#fifthBuilding").val()), parseInt($("#sixthBuilding").val())],
                    backgroundColor: ["white", "red", "yellow", "blue", "purple", "orange", "black"]
                }]

            },
            options: {
                responsive: true
            }
        });
     //End Chart
    });
    

    $("#submitButton").click(function () {         

        //check to make sure all fields are entered
        if ($("#firstBuilding").val().length == 0 || $("#secondBuilding").val().length == 0 || $("#thirdBuilding").val().length == 0 || $("#fourthBuilding").val().length == 0 || $("#fifthBuilding").val().length == 0 || $("#sixthBuilding").val().length == 0) {
            swal("Error Alert", "Did you forget to enter a height?", "error");
            return;
        }

        //check to make sure all fields are numbers
        else if (isNaN($("#firstBuilding").val()) || isNaN($("#firstBuilding").val()) || isNaN($("#firstBuilding").val()) || isNaN($("#firstBuilding").val()) || isNaN($("#firstBuilding").val()) || isNaN($("#firstBuilding").val())) {
            swal("Error Alert", "All entries must be valid numbers.", "error");
            return;
        }

        //check to make sure all fields are not negative numbers
        else if ($("#firstBuilding").val() <= 0 || $("#secondBuilding").val() <= 0 || $("#thirdBuilding").val() <= 0 || $("#fourthBuilding").val() <= 0 || $("#fifthBuilding").val() <= 0 || $("#sixthBuilding").val() <= 0) {
            swal("Error Alert", "No negative numbers.", "error");
            return;
        }
        else {            

            var firstBuilding = parseInt($("#firstBuilding").val());
            var secondBuilding = parseInt($("#secondBuilding").val());
            var thirdBuilding = parseInt($("#thirdBuilding").val());
            var fourthBuilding = parseInt($("#fourthBuilding").val());
            var fifthBuilding = parseInt($("#fifthBuilding").val());
            var sixthBuilding = parseInt($("#sixthBuilding").val());            

            let buildings = [firstBuilding, secondBuilding, thirdBuilding, fourthBuilding, fifthBuilding, sixthBuilding];

            //a new array from our current array will be created to represent those buildings that can see the sunset
            let sunsetBuildings = new Array();    

            //create an empty variable representing the tallest building
            let tallestBuilding = 0;
            let counter = 0;

            for (var i = 0; i < 6; i++) {
                //begin by assigning the first building in the array to the tallestBuilding
                if (buildings[i] > tallestBuilding) {
                    sunsetBuildings.push(buildings[i]);
                    tallestBuilding = buildings[i];
                    counter += 1;
                }
                else {
                    continue;
                }
            }           
           
            //output the sunsetBuildings to the user                
            if (sunsetBuildings.length > 1) {               
                return swal({
                                title: "Buildings Found!",
                                text: `There were ${sunsetBuildings.length} buildings that can see the sunset.  And their heights are: ${sunsetBuildings.toString()}.`,
                                icon: "success",
                            });                            
            }
            else {               
                return swal({
                                title: "Building Found!",
                                text: `There was ${sunsetBuildings.length} building that can see the sunset.  And its height is: ${sunsetBuildings.toString()}.`,
                                icon: "success",                                
                            });                
            }            
        }        
    });
    
    $("#clearButton").on("click", function () {
        $("#firstBuilding").val("");
        $("#secondBuilding").val("");
        $("#thirdBuilding").val("");
        $("#fourthBuilding").val("");
        $("#fifthBuilding").val("");
        $("#sixthBuilding").val("");
        $("#firstBuilding").focus();

        //Chart
        myChart = $("#myChart")[0].getContext("2d");
        theSunsetBuildings = new Chart(myChart, {
            type: "bar",
            data: {
                labels: [" ", "Height 1", "Height 2", "Height 3", "Height 4", "Height 5", "Height 6"],
                datasets: [{
                    label: "Buildings",
                    data: [0, 1, 1, 1, 1, 1, 1],
                    backgroundColor: ["white", "red", "yellow", "blue", "rebeccapurple", "darkorange", "gray"]
                }]

            },
            options: {}
        });
     //End Chart
    });   
    //Email Setup//
    emailjs.init("user_LwjM5EqrkyKKqnIS0Feds");

    $("#contactButton").on("click", function () {
        $("#contactButton").text("Sending...");
        var template_params = {
            "subject": $("#subject").val(),
            "message": $("#message").val(),
            "name": $("#name").val(),
            "email": $("#email").val()
        };

        if ($("#email").val().length < 10) {
            swal("Email Error!", "You must enter a valid email address", "error");
            $("#contactButton").text("Send");
            return;
        }

        var service_id = "default_service";
        var template_id = "emailtemplate1";
        var emailSuccess = swal({
            title: "Sent!",
            text: "Your email to Richard was successfully sent!",
            icon: "success",
        });

        emailjs.send(service_id, template_id, template_params).then(function () {
            emailSuccess;
            $("#contactButton").text("Send");
            $("#subject").val("");
            $("#message").val("");
            $("#name").val("");
            $("#email").val("");
        }, function (err) {
            swal("Error! Email not sent", "\r\n Response:\n " + JSON.stringify(err), "error");
            $("#contactButton").text("Send");
        });
        return false;
    });   
    
});


