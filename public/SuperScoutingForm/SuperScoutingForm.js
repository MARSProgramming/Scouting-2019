//REMEMBER TO CHANGE DEFAULT COMPETITION BETWEEN EVENT

function increment(increaseValue, tagID) {
    var currentValue = Number(document.getElementById(tagID).value);
    console.log(currentValue);
    if (currentValue + increaseValue < 0) {
        document.getElementById(tagID).value = 0;
    } else {
        if (currentValue + increaseValue <= document.getElementById(tagID).max || document.getElementById(tagID).max == 0) {
            document.getElementById(tagID).value = currentValue + increaseValue;
        }
    }

    console.log(document.getElementById(tagID).value);
    console.log(document.getElementById(tagID).max)
}
//jquery function to make dropdowns update themselves to selected value.....make sure that btn id is under dropdown-menu property
$(function () {

    $(".dropdown-menu").on('click', 'a', function () {
        $($(this).parent().prev()).text($(this).text());
        $($(this).parent().prev()).val($(this).text());
    });
});

function updateTeamNum(teamNum) {
    console.log("change occurred at " + teamNum + " to " + document.getElementById('teamNumber' + teamNum).value);
    $("span.team" + teamNum).text(("Team #" + document.getElementById('teamNumber' + teamNum).value));
}

function inputOtherCompetition(name) {
    if (name == 'Other')
        document.getElementById('otherCompetitionInput').innerHTML = 'Other Competition: <input type="text" id="otherCompetition" />';
    else
        document.getElementById('otherCompetitionInput').innerHTML = '';
}

function writeNewPost() {

    //  Pre-Match Inputs
    var scoutName = document.getElementById("scoutName").value;
    if (scoutName == null || scoutName == "")
        scoutName = "defaultScoutName";
    var scoutTeam = document.getElementById("scoutTeam").value;
    if (scoutTeam == null || scoutTeam == "")
        scoutTeam = "9999";
    var competition = document.getElementById("competition").value;
    if (competition == "Other")
        competition = document.getElementById("otherCompetition").value;
    if (competition == null || competition == "" || competition == "Select Competition")
        competition = "defaultCompetition"
    var alliance = document.getElementsByName('alliance');
    var allianceValue;
    for (var i = 0; i < alliance.length; i++) {
        if (alliance[i].checked) {
            allianceValue = alliance[i].value;
            break;
        }
    }
    if (allianceValue == null || allianceValue == "")
        allianceValue = "defaultAlliance";
    var matchNumber = document.getElementById("matchNumber").value;
    if (matchNumber == null || matchNumber == "")
        matchNumber = "9999";
    var teamNumber1 = document.getElementById("teamNumber1").value;
    if (teamNumber1 == null || teamNumber1 == "")
        teamNumber1 = "9999";
    console.log(teamNumber1);
    var teamNumber2 = document.getElementById("teamNumber2").value;
    if (teamNumber2 == null || teamNumber2 == "")
        teamNumber2 = "9999";
    console.log(teamNumber2);
    var teamNumber3 = document.getElementById("teamNumber3").value;
    if (teamNumber3 == null || teamNumber3 == "")
        teamNumber3 = "9999";
    console.log(teamNumber3);
    //  Autonomous Inputs

    var autoDescrip1 = document.getElementById("autoDescrip1").value;
    if (autoDescrip1 == null || autoDescrip1 == "")
        autoDescrip1 = 0;
    var autoDescrip2 = document.getElementById("autoDescrip2").value;
    if (autoDescrip2 == null || autoDescrip2 == "")
        autoDescrip2 = 0;
    var autoDescrip3 = document.getElementById("autoDescrip3").value;
    if (autoDescrip3 == null || autoDescrip3 == "")
        autoDescrip3 = 0;
    // Teleop Inputs
    var fouls1 = document.getElementById("fouls1").value;
    if (fouls1 == null || fouls1 == "")
        fouls1 = 0;
    var techFouls1 = document.getElementById("techFouls1").value;
    if (techFouls1 == null || techFouls1 == "")
        techFouls1 = 0;
    var placementPosition1 = document.getElementById("placementPosition1").value;
    if (placementPosition1 == null || placementPosition1 == "")
        placementPosition1 = 0;

    var fouls2 = document.getElementById("fouls2").value;
    if (fouls2 == null || fouls2 == "")
        fouls2 = 0;
    var techFouls2 = document.getElementById("techFouls2").value;
    if (techFouls2 == null || techFouls2 == "")
        techFouls2 = 0;
    var placementPosition2 = document.getElementById("placementPosition2").value;
    if (placementPosition2 == null || placementPosition2 == "")
        placementPosition2 = 0;

    var fouls3 = document.getElementById("fouls3").value;
    if (fouls3 == null || fouls3 == "")
        fouls3 = 0;
    var techFouls3 = document.getElementById("techFouls3").value;
    if (techFouls3 == null || techFouls3 == "")
        techFouls3 = 0;
    var placementPosition3 = document.getElementById("placementPosition3").value;
    if (placementPosition3 == null || placementPosition3 == "")
        placementPosition3 = 0;


    var comments1 = document.getElementById("comments1").value;
    var comments2 = document.getElementById("comments2").value;
    var comments3 = document.getElementById("comments3").value;

    var fullCargoShip = document.getElementById("fullCargoShip").checked;
    var fullRocket = document.getElementById("fullRocket").checked;
    
//    var autoRunArray = document.getElementsByName("autoRun");
//    console.log(autoRunArray)
//    var climbsLevel1;
//    for (var i = 0; i < autoRunArray.length; i++) {
//        if (autoRunArray[i].checked) {
//            autoRun = autoRunArray[i].value;
//            break;
//        }
//    }
    var postData = {
        data: {
            "Team1": {
                "DateTime": Date(),
                "ScoutName": scoutName,
                "ScoutTeam": scoutTeam,
                "Competition": competition,
                "Alliance": allianceValue,
                "MatchNumber": matchNumber,
                "teamNumber": teamNumber1,

                "autoDescrip": autoDescrip1,

                "fouls": fouls1,
                "techFouls": techFouls1,
                "placementPosition": placementPosition1,
                "comments": comments1,
                
                "fullCargoShip":fullCargoShip,
                "fullRocket":fullRocket
            },
            "Team2": {
                "DateTime": Date(),
                "ScoutName": scoutName,
                "ScoutTeam": scoutTeam,
                "Competition": competition,
                "Alliance": allianceValue,
                "MatchNumber": matchNumber,
                "teamNumber": teamNumber2,

                "autoDescrip": autoDescrip2,

                "fouls": fouls2,
                "techFouls": techFouls2,
                "placementPosition": placementPosition2,
                "comments": comments2,

                "fullCargoShip":fullCargoShip,
                "fullRocket":fullRocket
            },
            "Team3": {
                "DateTime": Date(),
                "ScoutName": scoutName,
                "ScoutTeam": scoutTeam,
                "Competition": competition,
                "Alliance": allianceValue,
                "MatchNumber": matchNumber,
                "teamNumber": teamNumber3,

                "autoDescrip": autoDescrip3,

                "fouls": fouls3,
                "techFouls": techFouls3,
                "placementPosition": placementPosition3,
                "comments": comments3,
                
                "fullCargoShip":fullCargoShip,
                "fullRocket":fullRocket
            }
        }
    }
    console.log(postData);
    postData = JSON.stringify(postData);
    var xhr = new XMLHttpRequest();
    
    var url = "https://script.google.com/macros/s/AKfycbxX0uNCpgOMGFuD225KOYNrDALAh1mW64hV5ukrwEi1IYFW1LQk/exec";
    xhr.open("POST", url, true);
    xhr.send(postData);
  
    //    //renames the outmost hierarchy of JSON which makes no duplicates
    //    postData = postData.replace("\"Data\"", "\"" + competition + " | Team " + teamNumber + " | Qualification Match " + matchNumber + "\"");
    //    postData = JSON.parse(postData);
    //    firebase.database().ref().update(postData);

    window.alert("Thank you for submitting!");
}
