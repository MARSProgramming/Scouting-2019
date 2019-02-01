//REMEMBER TO CHANGE DEFAULT COMPETITION BETWEEN EVENT

function increment(increaseValue, tagID) {
    var currentValue = Number(document.getElementById(tagID).value);
    console.log(currentValue);
    if (currentValue + increaseValue < 0 ) {
        document.getElementById(tagID).value = 0;
    } else {
        if(currentValue + increaseValue <= document.getElementById(tagID).max || document.getElementById(tagID).max == 0){
        document.getElementById(tagID).value = currentValue + increaseValue;
        }
    }

    console.log(document.getElementById(tagID).value);
    console.log(document.getElementById(tagID).max)
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
    var teamNumber = document.getElementById("teamNumber").value;
    if (teamNumber == null || teamNumber == "")
        teamNumber = "9999";

    //  Autonomous Inputs
    var startLocation = document.getElementsByName("startLocation");
    var startLocationValue;
    for (var i = 0; i < startLocation.length; i++) {
        if (startLocation[i].checked) {
            console.log(startLocation[i].checked)
            startLocationValue = startLocation[i].value;
            break;
        }
    }
    if (startLocationValue == null || startLocationValue == "")
        startLocationValue = "defaultStartLocation";
    var autoRunArray = document.getElementsByName("autoRun");
    console.log(autoRunArray)
    var autoRun;
    for (var i = 0; i < autoRunArray.length; i++) {
        if (autoRunArray[i].checked) {
            autoRun = autoRunArray[i].value;
            break;
        }
    }
    if (autoRun == null || autoRun == "") autoRun = 0;
    var autoHatchesLow = document.getElementById("autoHatchesLow").value;
    if (autoHatchesLow == null || autoHatchesLow == "")
        autoHatchesLow = 0;
    var autoHatchesMid = document.getElementById("autoHatchesMid").value;
    if (autoHatchesMid == null || autoHatchesMid == "")
        autoHatchesMid = 0;
    var autoHatchesHigh = document.getElementById("autoHatchesHigh").value;
    if (autoHatchesHigh == null || autoHatchesHigh == "")
        autoHatchesHigh = 0;
    var autoHatchesMissed = document.getElementById("autoHatchesMissed").value;
    if (autoHatchesMissed == null || autoHatchesMissed == "")
        autoHatchesMissed = 0;
    var autoCargoLow = document.getElementById("autoCargoLow").value;
    if (autoCargoLow == null || autoCargoLow == "")
        autoCargoLow = 0;
    var autoCargoMid = document.getElementById("autoCargoMid").value;
    if (autoCargoMid == null || autoCargoMid == "")
        autoCargoMid = 0;
    var autoCargoHigh = document.getElementById("autoCargoHigh").value;
    if (autoCargoHigh == null || autoCargoHigh == "")
        autoCargoHigh = 0;
    var autoCargoMissed = document.getElementById("autoCargoMissed").value;
    if (autoCargoMissed == null || autoCargoHigh == "")
        autoCargoMissed = 0;

    //  Teleop Inputs
    var teleopHatchesLow = document.getElementById("teleopHatchesLow").value;
    if (teleopHatchesLow == null || teleopHatchesLow == "")
        teleopHatchesLow = 0;
    var teleopHatchesMid = document.getElementById("teleopHatchesMid").value;
    if (teleopHatchesMid == null || teleopHatchesMid == "")
        teleopHatchesMid = 0;
    var teleopHatchesHigh = document.getElementById("teleopHatchesHigh").value;
    if (teleopHatchesHigh == null || teleopHatchesHigh == "")
        teleopHatchesHigh = 0;
    var teleopHatchesMissed = document.getElementById("teleopHatchesMissed").value;
    if (teleopHatchesMissed == null || teleopHatchesMissed == "")
        teleopHatchesMissed = 0;
    var teleopCargoLow = document.getElementById("teleopCargoLow").value;
    if (teleopCargoLow == null || teleopCargoLow == "")
        teleopCargoLow = 0;
    var teleopCargoMid = document.getElementById("teleopCargoMid").value;
    if (teleopCargoMid == null || teleopCargoMid == "")
        teleopCargoMid = 0;
    var teleopCargoHigh = document.getElementById("teleopCargoHigh").value;
    if (teleopCargoHigh == null || teleopCargoHigh == "")
        teleopCargoHigh = 0;
    var teleopCargoMissed = document.getElementById("teleopCargoMissed").value;
    if (teleopCargoMissed == null || teleopCargoHigh == "")
        teleopCargoMissed = 0;

    var playedDefense = document.getElementById("playedDefense").checked ? true : false;
    var robotEndPosition = document.getElementsByName("robotEndPosition");
    console.log(robotEndPosition)
    var robotEndPositionValue;
    for (var i = 0; i < robotEndPosition.length; i++) {
        if (robotEndPosition[i].checked) {
            robotEndPositionValue = robotEndPosition[i].value;
            break;
        }
    }
    if (robotEndPositionValue == null || robotEndPositionValue == "")
        robotEndPositionValue = "defaultEndPosition";
    var helpedOthersClimb = document.getElementById("helpedOthersClimb").checked ? true : false;
    var assistedLevel2Climbs = document.getElementById("assistedLevel2Climbs").value;
    if (assistedLevel2Climbs == null || assistedLevel2Climbs == "")
        assistedLevel2Climbs = 0;
     var assistedLevel3Climbs = document.getElementById("assistedLevel3Climbs").value;
    if (assistedLevel3Climbs == null || assistedLevel3Climbs == "")
        assistedLevel3Climbs = 0;
    var everInactive = document.getElementById("everInactive").checked ? true : false;
    var comments = document.getElementById("comments").value;

    var postData = {
        "Data": {
            "DateTime": Date(),
            "ScoutName": scoutName,
            "ScoutTeam": scoutTeam,
            "Competition": competition,
            "Alliance": allianceValue,
            "MatchNumber": matchNumber,
            "TeamNumber": teamNumber,
            "StartLocation": startLocationValue,

            "autoRun": autoRun,
            "autoHatchesLow": autoHatchesLow,
            "autoHatchesMid": autoHatchesMid,
            "autoHatchesHigh": autoHatchesHigh,
            "autoHatchesMissed": autoHatchesMissed,
            "autoCargoLow": autoCargoLow,
            "autoCargoMid": autoCargoMid,
            "autoCargoHigh": autoCargoHigh,
            "autoCargoMissed" : autoCargoMissed,

            "teleopHatchesLow": teleopHatchesLow,
            "teleopHatchesMid": teleopHatchesMid,
            "teleopHatchesHigh": teleopHatchesHigh,
            "teleopHatchesMissed": teleopHatchesMissed,
            "teleopCargoLow": teleopCargoLow,
            "teleopCargoMid": teleopCargoMid,
            "teleopCargoHigh": teleopCargoHigh,
            "teleopCargoMissed" : teleopCargoMissed,

            "PlayedDefense": playedDefense,
            "RobotEndPosition": robotEndPositionValue,
            "HelpedOthersClimb": helpedOthersClimb,
            "assistedLevel2Climbs": assistedLevel2Climbs,
            "assistedLevel3Climbs": assistedLevel3Climbs,
            "EverInactive": everInactive,
            "Comments": comments

        }
    }

    console.log(postData);
    postData = JSON.stringify(postData);

//    var xhr = new XMLHttpRequest();
//    var url = "https://script.google.com/macros/s/AKfycbwWzE-GlcGUeAxwpS1_IJ4vYIUJTDUa3fbK0pUXPMPj2Qn_X3E/exec";
//    xhr.open("POST", url, true);
//    xhr.send(postData);
//
//    //renames the outmost hierarchy of JSON which makes no duplicates
//    postData = postData.replace("\"Data\"", "\"" + competition + " | Team " + teamNumber + " | Qualification Match " + matchNumber + "\"");
//    postData = JSON.parse(postData);
//    firebase.database().ref().update(postData);

    window.alert("Thank you for submitting!");

}
