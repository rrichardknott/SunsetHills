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
            
        let sunsetBuildings = new Array();
            
        let tallestBuilding = 0;
        let counter = 0;

        for (var i = 0; i < 6; i++) {                
            if (buildings[i] > tallestBuilding) {
                sunsetBuildings.push(buildings[i]);
                tallestBuilding = buildings[i];
                counter += 1;
            }
            else {
                continue;
            }
        }                  
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