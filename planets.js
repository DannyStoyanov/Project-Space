// JavaScript source code
/*--------------------------аудио-------------------*/
var audio;
function playAudio() {
    audio = new Audio();
    audio.src = "style/site_background.mp3";
    audio.loop = true;
    audio.play();
}

function pauseAudio() {
    audio.pause();
}
/*--------------------------*/
var audioOnClick;
function playAudioOnClick() {
    audioOnClick = new Audio();
    audioOnClick.src = "style/click.wav";
    audioOnClick.play();
}
/*------------------*/
var divOpenAudio;
function playAudioOpening() {
    divOpenAudio = new Audio();
    divOpenAudio.src = "style/articleOpening.wav";
    divOpenAudio.play();
}
/*------------------*/
$(function () {
    $(".planets").click(function () {
        playAudioOpening();
    });
});
/*------------------*/
$(function () {
    $(".backButton").click(function () {
        playAudioOnClick();
    });
});

/*-----------------------аудио-/край/---------------*/

var planetNumber = 0;
var element = document.getElementsByClassName("distanceLenght");
var showPlanetName = document.getElementsByClassName("planetName");
var planetNameTitle = document.getElementsByClassName("planetNameTitle");
var displaySpeed = document.getElementsByClassName("showSpeed");
var displayDiameter = document.getElementsByClassName("showDiameter");
var displayGroup = document.getElementsByClassName("showGroup");
var displayMass = document.getElementsByClassName("showMass");
var displaySatellites = document.getElementsByClassName("showSatellites");
var displayTemperature = document.getElementsByClassName("showTemperature");

function showDistance() {
    setTimeout(function () {
        for (var i = 0; i <= planets.length; i++)
            if (planets[i].id == planetNumber) {
                element[i].innerHTML = "Дистанция до слънцето: " + planets[i].distanceFromSun + " км.";
                index = i;
            }
    }, 100);
}
function drawDistance() {
    setTimeout(function () {
        $(".distanceLine").animate({
            height: '5px',
            width: '390px'
        });
        showDistance();
    }, 1000);
}
$(function () {
    $(".backButton").click(function () {
        $(".planetNameTitle").hide();
        $(".planetTable").hide();
        $(".planetImage").hide();
        $(".moonImage").hide();
        $(".mainSun").hide();
        $(".showSatellites").hide();
        $(".distanceLine").animate({
            height: '10px',
            width: '0px'
        });
        element[index].innerHTML = "";
    });
});
var planets = [
    {
        name: "Меркурий",
        id: 1,
        numberOfSatellites: 0,
        speed: 10.892,
        avrTemperature: 166.85,
        distanceFromSun: "57 909 176",
        diameter: 4879.4,
        group: "Земна",
        mass: "3,302×10<sup>23</sup"
    },
    {
        name: "Венера",
        id: 2,
        numberOfSatellites: 0,
        speed: 6.52,
        avrTemperature: 463.85,
        distanceFromSun: "108 208 926",
        diameter: 12103.7,
        group: "Земна",
        mass: "4,8685×10<sup>24</sup"
    },
    {
        name: "Земя",
        id: 3,
        numberOfSatellites: 1,
        speed: 1674.38,
        avrTemperature: 13.85,
        distanceFromSun: "149 597 887",
        diameter: 12756.270,
        group: "Земна",
        mass: "	5,9736×10<sup>24</sup"
    },
    {
        name: "Марс",
        id: 4,
        numberOfSatellites: 2,
        speed: 868.22,
        avrTemperature: -63.15,
        distanceFromSun: "227 936 637",
        diameter: 6804.9,
        group: "Земна",
        mass: "6,4185×10<sup>23</sup"
    },
    {
        name: "Юпитер",
        id: 5,
        numberOfSatellites: 63,
        speed: 45300,
        avrTemperature: -120.15,
        distanceFromSun: "778 412 027",
        diameter: 142984,
        group: "Гиганти",
        mass: "1,899×10<sup>27</sup"
    },
    {
        name: "Сатурн",
        id: 6,
        numberOfSatellites: 34,
        speed: 35500,
        avrTemperature: -130.15,
        distanceFromSun: "1, 426725 ×10<sup>9</sup",
        diameter: 120536,
        group: "Гиганти",
        mass: "5,6846×10<sup>26</sup"
    },
    {
        name: "Уран",
        id: 7,
        numberOfSatellites: 27,
        speed: 9320,
        avrTemperature: -341.15,
        distanceFromSun: "2,870972220×10<sup>9</sup",
        diameter: 51118,
        group: "Гиганти",
        mass: "8,6832×10<sup>25</sup"
    },
    {
        name: "Нептун",
        id: 8,
        numberOfSatellites: 13,
        speed: 9660,
        avrTemperature: -220.15,
        distanceFromSun: "4, 498253×10<sup>9</sup",
        diameter: 49528,
        group: "Гиганти",
        mass: "1,0243×10<sup>26</sup"
    }
    // величините на полетата на планетите са в: км, км/ч и Целзий
];

$(document).ready(function () {
    var findMePlanet = JSON.parse(localStorage.getItem("searchVariable"));
    switch (findMePlanet) {
            case 0:
                {
                    $("#divSolarSystem").show(300);
                    $("#divMerc").hide(300);
                    $("#divVen").hide(300);
                    $("#divEarth").hide(300);
                    $("#divMars").hide(300);
                    $("#divJup").hide(300);
                    $("#divSat").hide(300);
                    $("#divUran").hide(300);
                    $("#divNept").hide(300);
                    $(".planetNameTitle").hide();
                    $(".planetTable").hide();
                    $(".planetImage").hide();
                    $(".moonImage").hide();
                    $(".showSatellites").hide();
                    $(".mainSun").hide();
                    break;
                }
            case 1:
                {
                    showMercury();
                    break;
                }
            case 2:
                {
                    showVenus();
                    break;
                }
            case 3:
                {
                    showEarth();
                    break;
                }
            case 4:
                {
                    showMars();
                    break;
                }
            case 5:
                {
                    showJupiter();
                    break;
                }
            case 6:
                {
                    showSaturn();
                    break;
                }
            case 7:
                {
                    showUranus();
                    break;
                }
            case 8:
                {
                    showNeptune();
                    break;
                }
    }
    for (var j = 0; j < 8; j++) {
        showPlanetName[j].innerHTML = planets[j].name;
    }
    for (var j = 0; j < 8; j++) {
        planetNameTitle[j].innerHTML = planets[j].name;
    }
    for (var j = 0; j < 8; j++) {
        planetNameTitle[j].innerHTML = planets[j].name;
        displaySpeed[j].innerHTML = planets[j].speed + " км/ч";
        displayDiameter[j].innerHTML = planets[j].diameter + " км.";
        displayGroup[j].innerHTML = planets[j].group;
        displayMass[j].innerHTML = planets[j].mass + " кг.";
        displaySatellites[j].innerHTML = "Брой спътници: " + planets[j].numberOfSatellites;
        displayTemperature[j].innerHTML = planets[j].avrTemperature + "°C";
    }

});

function showMercury() {
    planetNumber = 1;
    $("#divSolarSystem").hide();
    $("#divMerc").fadeIn(1500);
    $("#divVen").hide();
    $("#divEarth").hide();
    $("#divMars").hide();
    $("#divJup").hide();
    $("#divSat").hide();
    $("#divUran").hide();
    $("#divNept").hide();

    $(".planetNameTitle").delay("500").fadeIn(1000);
    $(".planetTable").delay("1000").fadeIn(1000);
    $(".planetImage").delay("1500").fadeIn(1000);
    $(".moonImage").delay("2000").fadeIn(1000);
    $(".mainSun").delay("2500").fadeIn(1000);
    $(".showSatellites").delay("3000").fadeIn(1000);
    drawDistance();
}
function showVenus() {
    planetNumber = 2;
    $("#divSolarSystem").hide();
    $("#divMerc").hide();
    $("#divVen").fadeIn(1500);
    $("#divEarth").hide();
    $("#divMars").hide();
    $("#divJup").hide();
    $("#divSat").hide();
    $("#divUran").hide();
    $("#divNept").hide();
    $(".planetNameTitle").delay("500").fadeIn(1000);
    $(".planetTable").delay("1000").fadeIn(1000);
    $(".planetImage").delay("1500").fadeIn(1000);
    $(".moonImage").delay("2000").fadeIn(1000);
    $(".mainSun").delay("2500").fadeIn(1000);
    $(".showSatellites").delay("3000").fadeIn(1000);
    drawDistance();
}
function showEarth() {
    planetNumber = 3;
    $("#divSolarSystem").hide();
    $("#divMerc").hide();
    $("#divVen").hide();
    $("#divEarth").fadeIn(1500);
    $("#divMars").hide();
    $("#divJup").hide();
    $("#divSat").hide();
    $("#divUran").hide();
    $("#divNept").hide();
    $(".planetNameTitle").delay("500").fadeIn(1000);
    $(".planetTable").delay("1000").fadeIn(1000);
    $(".planetImage").delay("1500").fadeIn(1000);
    $(".moonImage").delay("2000").fadeIn(1000);
    $(".mainSun").delay("2500").fadeIn(1000);
    $(".showSatellites").delay("3000").fadeIn(1000);
    drawDistance();
}
function showMars() {
    planetNumber = 4;
    $("#divSolarSystem").hide();
    $("#divMerc").hide();
    $("#divVen").hide();
    $("#divEarth").hide();
    $("#divMars").fadeIn(1500);
    $("#divJup").hide();
    $("#divSat").hide();
    $("#divUran").hide();
    $("#divNept").hide();
    $(".planetNameTitle").delay("500").fadeIn(1000);
    $(".planetTable").delay("1000").fadeIn(1000);
    $(".planetImage").delay("1500").fadeIn(1000);
    $(".moonImage").delay("2000").fadeIn(1000);
    $(".mainSun").delay("2500").fadeIn(1000);
    $(".showSatellites").delay("3000").fadeIn(1000);
    drawDistance();
}
function showJupiter() {
    planetNumber = 5;
    $("#divSolarSystem").hide();
    $("#divMerc").hide();
    $("#divVen").hide();
    $("#divEarth").hide();
    $("#divMars").hide();
    $("#divJup").fadeIn(1500);
    $("#divSat").hide();
    $("#divUran").hide();
    $("#divNept").hide();
    $(".planetNameTitle").delay("500").fadeIn(1000);
    $(".planetTable").delay("1000").fadeIn(1000);
    $(".planetImage").delay("1500").fadeIn(1000);
    $(".moonImage").delay("2000").fadeIn(1000);
    $(".mainSun").delay("2500").fadeIn(1000);
    $(".showSatellites").delay("3000").fadeIn(1000);
    drawDistance();
}
function showSaturn() {
    planetNumber = 6;
    $("#divSolarSystem").hide();
    $("#divMerc").hide();
    $("#divVen").hide();
    $("#divEarth").hide();
    $("#divMars").hide();
    $("#divJup").hide();
    $("#divSat").fadeIn(1500);
    $("#divUran").hide();
    $("#divNept").hide();
    $(".planetNameTitle").delay("500").fadeIn(1000);
    $(".planetTable").delay("1000").fadeIn(1000);
    $(".planetImage").delay("1500").fadeIn(1000);
    $(".moonImage").delay("2000").fadeIn(1000);
    $(".mainSun").delay("2500").fadeIn(1000);
    $(".showSatellites").delay("3000").fadeIn(1000);
    drawDistance();
}
function showUranus() {
    planetNumber = 7;
    $("#divSolarSystem").hide();
    $("#divMerc").hide();
    $("#divVen").hide();
    $("#divEarth").hide();
    $("#divMars").hide();
    $("#divJup").hide();
    $("#divSat").hide();
    $("#divUran").fadeIn(1500);
    $("#divNept").hide();
    $(".planetNameTitle").delay("500").fadeIn(1000);
    $(".planetTable").delay("1000").fadeIn(1000);
    $(".planetImage").delay("1500").fadeIn(1000);
    $(".moonImage").delay("2000").fadeIn(1000);
    $(".mainSun").delay("2500").fadeIn(1000);
    $(".showSatellites").delay("3000").fadeIn(1000);
    drawDistance();
}
function showNeptune() {
    planetNumber = 8;
    $("#divSolarSystem").hide();
    $("#divMerc").hide();
    $("#divVen").hide();
    $("#divEarth").hide();
    $("#divMars").hide();
    $("#divJup").hide();
    $("#divSat").hide();
    $("#divUran").hide();
    $("#divNept").fadeIn(1500);
    $(".planetNameTitle").delay("500").fadeIn(1000);
    $(".planetTable").delay("1000").fadeIn(1000);
    $(".planetImage").delay("1500").fadeIn(1000);
    $(".moonImage").delay("2000").fadeIn(1000);
    $(".mainSun").delay("2500").fadeIn(1000);
    $(".showSatellites").delay("3000").fadeIn(1000);
    drawDistance();
}
function backToSolarSystem() {
    $("#divSolarSystem").fadeIn(1500);
    $("#divMerc").hide();
    $("#divVen").hide();
    $("#divEarth").hide();
    $("#divMars").hide();
    $("#divJup").hide();
    $("#divSat").hide();
    $("#divUran").hide();
    $("#divNept").hide();
    $(".planetNameTitle").delay("500").fadeIn(1000);
    $(".planetTable").delay("1000").fadeIn(1000);
    $(".planetImage").delay("1500").fadeIn(1000);
    $(".moonImage").delay("2000").fadeIn(1000);
    $(".mainSun").delay("2500").fadeIn(1000);
    $(".showSatellites").delay("3000").fadeIn(1000);
    drawDistance();
};

audio.src = "style/site_background.mp3";
function mute() {
    audio.muted = true;

}
function unMute() {
    audio.muted = false;
}