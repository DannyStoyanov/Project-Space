/*--------------------------аудио-------------------*/
var pathTwoInitialWidth;
var pathTwoInitialHeight;

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
/*----------------------------*/
var divOpenAudio;
function playAudioOpening() {
    divOpenAudio = new Audio();
    divOpenAudio.src = "style/articleOpening.wav";
    divOpenAudio.play();
}
/*--------------------------*/
var audioOnClick;
function playAudioOnClick() {
    audioOnClick = new Audio();
    audioOnClick.src = "style/click.wav";
    audioOnClick.play();
}

/*-----------------------аудио-/край/---------------*/

var isExpanded = false;
$(document).ready(function () {

    $("#galaxyTitle").hide();
    $("#starsFormationInfo").hide();
    $("#spiralInfo").hide();
    $("#doubleSpiralInfo").hide();
    $("#ellipticalInfo").hide();
    $("#irregularShapeInfo").hide();

    $("#starLifeStepOne").hide();
    $("#starLifeStepTwo").hide();
    $("#starLifeStepThree").hide();
    $("#starLifeStepFour").hide();
    $("#starLifeStepFive").hide();

    $("#stepOne").hide();
    $("#arrowOne").hide();
    $("#stepTwo").hide();
    $("#arrowTwo").hide();
    $("#stepThree").hide();
    $("#arrowThree").hide();
    $("#stepFour").hide();
    $("#arrowFour").hide();
    $("#stepFive").hide();


    $("#starLifeStepOnePathTwo").hide();
    $("#starLifeStepTwoPathTwo").hide();
    $("#starLifeStepThreePathTwo").hide();
    $("#starLifeStepFourPathTwo").hide();
    $("#starLifeStepFivePathTwo").hide();

    $("#stepOneTypeTwo").hide();
    $("#arrowOneTypeTwo").hide();
    $("#stepTwoTypeTwo").hide();
    $("#arrowTwoTypeTwo").hide();
    $("#stepThreeTypeTwo").hide();
    $("#arrowThreeTypeTwo").hide();
    $("#stepFourTypeTwo").hide();
    $("#arrowFourTypeTwo").hide();
    $("#stepFiveTypeTwo").hide();

    $("#backButtonGalaxies").hide();
    $("#backButtonGalaxiesPathTwo").hide();

    //-------------------//
    var starEvolutionOne = document.getElementById("pathOne");
    var pathOneInitialWidth = starEvolutionOne.offsetWidth;
    var pathOneInitialHeight = starEvolutionOne.offsetHeight;
    $("#buttonEvolution").click(function () {
        $("#pathOne").animate({
            height: '380px',
            width: '90%'
        });
        playAudioOnClick();
        $("#pathTwo").delay("500").fadeOut();
        $("#welcomeToPathOne").hide();
        $("#starLifeStepOne").delay(1000).fadeIn(900);
        $("#starLifeStepOne").delay(3000).hide(900);
        $("#starLifeStepTwo").delay(5000).fadeIn(900);
        $("#starLifeStepTwo").delay(2000).hide(900);
        $("#starLifeStepThree").delay(9000).fadeIn(900);
        $("#starLifeStepThree").delay(2000).hide(900);
        $("#starLifeStepFour").delay(13000).fadeIn(900);
        $("#starLifeStepFour").delay(2000).hide(900);
        $("#starLifeStepFive").delay(17000).fadeIn(900);
        $("#starLifeStepFive").delay(2000).hide(900);
        $("#stepOne").delay("20000").fadeIn(900);
        $("#arrowOne").delay("21500").fadeIn(900);
        $("#stepTwo").delay("23000").fadeIn(900);
        $("#arrowTwo").delay("24500").fadeIn(900);
        $("#stepThree").delay("26000").fadeIn(900);
        $("#arrowThree").delay("27500").fadeIn(900);
        $("#stepFour").delay("29000").fadeIn(900);
        $("#arrowFour").delay("30500").fadeIn(900);
        $("#stepFive").delay("32000").fadeIn(900);
        $("#backButtonGalaxies").delay("33000").fadeIn(900);
    });
    $("#backButtonGalaxies").click(function () {
        playAudioOnClick();
        $("#starLifeStepOne").hide(900);
        $("#starLifeStepTwo").hide(900);
        $("#starLifeStepThree").hide(900);
        $("#starLifeStepFour").hide(900);
        $("#starLifeStepFive").hide(900);
        $("#stepOne").hide(900);
        $("#arrowOne").hide(900);
        $("#stepTwo").hide(900);
        $("#arrowTwo").hide(900);
        $("#stepThree").hide(900);
        $("#arrowThree").hide(900);
        $("#stepFour").hide(900);
        $("#arrowFour").hide(900);
        $("#stepFive").hide(900);
        $("#backButtonGalaxies").hide(900);
        $("#pathOne").animate({
            width: pathOneInitialWidth,
            height: pathOneInitialHeight
        });
        $("#welcomeToPathOne").show(1000);
        $("#pathTwo").show(1000);
    });
    //--------------------------//
    var starEvolutionTwo = document.getElementById("pathTwo");
    pathTwoInitialWidth = starEvolutionTwo.offsetWidth;
    pathTwoInitialHeight = starEvolutionTwo.offsetHeight;
    $("#buttonEvolutionPathTwo").click(function () {
        playAudioOnClick();
        $("#pathTwo").animate({
            height: '380px',
            width: '90%'
        });
        $("#pathOne").delay("500").fadeOut();
        $("#welcomeToPathTwo").hide();
        $("#starLifeStepOnePathTwo").delay(1000).fadeIn(900);
        $("#starLifeStepOnePathTwo").delay(3000).hide(900);
        $("#starLifeStepTwoPathTwo").delay(5000).fadeIn(900);
        $("#starLifeStepTwoPathTwo").delay(2000).hide(900);
        $("#starLifeStepThreePathTwo").delay(9000).fadeIn(900);
        $("#starLifeStepThreePathTwo").delay(2000).hide(900);
        $("#starLifeStepFourPathTwo").delay(13000).fadeIn(900);
        $("#starLifeStepFourPathTwo").delay(2000).hide(900);
        $("#starLifeStepFivePathTwo").delay(17000).fadeIn(900);
        $("#starLifeStepFivePathTwo").delay(2000).hide(900);
        $("#stepOneTypeTwo").delay("20000").fadeIn(900);
        $("#arrowOneTypeTwo").delay("21500").fadeIn(900);
        $("#stepTwoTypeTwo").delay("23000").fadeIn(900);
        $("#arrowTwoTypeTwo").delay("24500").fadeIn(900);
        $("#stepThreeTypeTwo").delay("26000").fadeIn(900);
        $("#arrowThreeTypeTwo").delay("27500").fadeIn(900);
        $("#stepFourTypeTwo").delay("29000").fadeIn(900);
        $("#arrowFourTypeTwo").delay("30500").fadeIn(900);
        $("#stepFiveTypeTwo").delay("32000").fadeIn(900);
        $("#backButtonGalaxiesPathTwo").delay("33000").fadeIn(900);

        $("#backButtonGalaxiesPathTwo").click(function () {
            playAudioOnClick();
            $("#starLifeStepOnePathTwo").hide(900);
            $("#starLifeStepTwoPathTwo").hide(900);
            $("#starLifeStepThreePathTwo").hide(900);
            $("#starLifeStepFourPathTwo").hide(900);
            $("#starLifeStepFivePathTwo").hide(900);
            $("#stepOneTypeTwo").hide(900);
            $("#arrowOneTypeTwo").hide(900);
            $("#stepTwoTypeTwo").hide(900);
            $("#arrowTwoTypeTwo").hide(900);
            $("#stepThreeTypeTwo").hide(900);
            $("#arrowThreeTypeTwo").hide(900);
            $("#stepFourTypeTwo").hide(900);
            $("#arrowFourTypeTwo").hide(900);
            $("#stepFiveTypeTwo").hide(900);
            $("#backButtonGalaxiesPathTwo").hide(900);

            $("#pathTwo").animate({
                width: pathTwoInitialWidth,
                height: pathTwoInitialHeight
            });

            $("#welcomeToPathTwo").show(1000);
            $("#pathOne").show(1000);

        });
    });
    //----------------------------------//
    var galaxyTypeOne = document.getElementById("spiralGalaxy");
    var initialWidthOne = galaxyTypeOne.offsetWidth;
    var initialHeightOne = galaxyTypeOne.offsetHeight;
    $("#spiralGalaxy").click(function () {
        playAudioOpening();
        if (isExpanded == false) {
            $("#spiralGalaxy").animate({
                width: '600px',
                height: '380px'
            });
            isExpanded = true;
            $("#doubleSpiralGalaxy").delay("500").fadeOut(600);
            $("#ellipticalGalaxy").delay("1000").fadeOut(600);
            $("#irregularShapeGalaxy").delay("1500").fadeOut(600);
            $("#spiralInfo").fadeIn(600);
        }
        else {
            playAudioOpening();
            $("#spiralGalaxy").animate({
                width: initialWidthOne,
                height: initialHeightOne
            });
            isExpanded = false;
            $("#spiralInfo").fadeOut(600);
            $("#doubleSpiralGalaxy").delay("500").fadeIn(600);
            $("#ellipticalGalaxy").delay("1000").fadeIn(600);
            $("#irregularShapeGalaxy").delay("1500").fadeIn(600);
        }
    });
    //---------------------------//
    var galaxyTypeTwo = document.getElementById("doubleSpiralGalaxy");
    var initialWidthTwo = galaxyTypeTwo.offsetWidth;
    var initialHeightTwo = galaxyTypeTwo.offsetHeight;
    $("#doubleSpiralGalaxy").click(function () {
        playAudioOpening();
        if (isExpanded == false) {
            $("#doubleSpiralGalaxy").animate({
                width: '600px',
                height: '380px'
            });
            isExpanded = true;
            $("#spiralGalaxy").delay("500").fadeOut(600);
            $("#ellipticalGalaxy").delay("500").fadeOut(600);
            $("#irregularShapeGalaxy").delay("1000").fadeOut(600);
            $("#doubleSpiralInfo").fadeIn(600);

        }
        else {
            playAudioOpening();
            $("#doubleSpiralGalaxy").animate({
                width: initialWidthTwo,
                height: initialHeightTwo
            });
            isExpanded = false;
            $("#doubleSpiralInfo").fadeOut(600);
            $("#spiralGalaxy").delay("500").fadeIn(600);
            $("#ellipticalGalaxy").delay("500").fadeIn(600);
            $("#irregularShapeGalaxy").delay("1000").fadeIn(600);
        }
    });
    //------------------------------//
    var galaxyTypeThree = document.getElementById("ellipticalGalaxy");
    var initialWidthThree = galaxyTypeThree.offsetWidth;
    var initialHeightThree = galaxyTypeThree.offsetHeight;
    $("#ellipticalGalaxy").click(function () {
        playAudioOpening();
        if (isExpanded == false) {
            $("#ellipticalGalaxy").animate({
                width: '600px',
                height: '380px'
            });
            isExpanded = true;
            $("#doubleSpiralGalaxy").delay("500").fadeOut(600);
            $("#irregularShapeGalaxy").delay("500").fadeOut(600);
            $("#spiralGalaxy").delay("1000").fadeOut(600);
            $("#ellipticalInfo").fadeIn(600);
        }
        else {
            playAudioOpening();
            $("#ellipticalGalaxy").animate({
                width: initialWidthThree,
                height: initialHeightThree
            });
            isExpanded = false;
            $("#ellipticalInfo").fadeOut(600);
            $("#doubleSpiralGalaxy").delay("500").fadeIn(600);
            $("#irregularShapeGalaxy").delay("500").fadeIn(600);
            $("#spiralGalaxy").delay("1000").fadeIn(600);
        }
    });
    //-----------------------------------//
    var galaxyTypeFour = document.getElementById("irregularShapeGalaxy");
    var initialWidthFour = galaxyTypeFour.offsetWidth;
    var initialHeightFour = galaxyTypeFour.offsetHeight;
    $("#irregularShapeGalaxy").click(function () {
        playAudioOpening();
        if (isExpanded == false) {
            $("#irregularShapeGalaxy").animate({
                width: '600px',
                height: '380px'
            });
            isExpanded = true;
            $("#ellipticalGalaxy").delay("500").fadeOut(600);
            $("#doubleSpiralGalaxy").delay("1000").fadeOut(600);
            $("#spiralGalaxy").delay("1500").fadeOut(600);
            $("#irregularShapeInfo").fadeIn(600);
        }
        else {
            playAudioOpening();
            $("#irregularShapeGalaxy").animate({
                width: initialWidthFour,
                height: initialHeightFour
            });
            isExpanded = false;
            $("#irregularShapeInfo").fadeOut(600);
            $("#ellipticalGalaxy").delay("500").fadeIn(600);
            $("#doubleSpiralGalaxy").delay("1000").fadeIn(600);
            $("#spiralGalaxy").delay("1500").fadeIn(600);
        }
    });
    //-------------------------------------------//
});

$(window).bind("scroll", function () {
    if ($(this).scrollTop() > 200) {
        $("#galaxyTitle").fadeIn(1000);
    } else {
        $("#galaxyTitle").stop().fadeOut(800);
    }
});
$(window).bind("scroll", function () {
    if ($(this).scrollTop() > 800) {
        $("#starsFormationInfo").fadeIn(1000);
    } else {
        $("#starsFormationInfo").stop().fadeOut(800);
    }
});

//----------------Изскачащ прозорец-/popup/------------------//
function showPopupOne() {
    var popup = document.getElementById("popupOne");
    popup.classList.toggle("show");
}

function showPopupTwo() {
    var popup = document.getElementById("popupTwo");
    popup.classList.toggle("show");
}

function showPopupThree() {
    var popup = document.getElementById("popupThree");
    popup.classList.toggle("show");
}

function showPopupFour() {
    var popup = document.getElementById("popupFour");
    popup.classList.toggle("show");
}

function showPopupFive() {
    var popup = document.getElementById("popupFive");
    popup.classList.toggle("show");
}

//--------------За втория изскачащ прозорец/popup/----------//
function showPopupOneTypeTwo() {
    var popup = document.getElementById("popupOneTypeTwo");
    popup.classList.toggle("show");
}

function showPopupTwoTypeTwo() {
    var popup = document.getElementById("popupTwoTypeTwo");
    popup.classList.toggle("show");
}

function showPopupThreeTypeTwo() {
    var popup = document.getElementById("popupThreeTypeTwo");
    popup.classList.toggle("show");
}

function showPopupFourTypeTwo() {
    var popup = document.getElementById("popupFourTypeTwo");
    popup.classList.toggle("show");
}

function showPopupFiveTypeTwo() {
    var popup = document.getElementById("popupFiveTypeTwo");
    popup.classList.toggle("show");
}

function showPopupSixTypeTwo() {
    var popup = document.getElementById("popupSixTypeTwo");
    popup.classList.toggle("show");
}
//-------------------

audio.src = "style/site_background.mp3";
function mute() {
    audio.muted = true;

}
function unMute() {
    audio.muted = false;
}