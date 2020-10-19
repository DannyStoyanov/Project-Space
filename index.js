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
/*-----------------------*/
var popUpSound;
function playPopUpSound() {
    popUpSound = new Audio();
    popUpSound.src = "style/constellationsSound.wav";
    popUpSound.play();
}
/*----------------------*/
$(document).ready(function () {
    $(".popUpButton").click(function () {
        playPopUpSound();
    });
});

/*-----------------------аудио-/край/---------------*/

var randFactsForMars = ["На Марс залезите са сини, поради праха в марсианската атмосфера, който не пропуска червената светлина.", "Една година на Марс се равнява на 687 земни дни.", "На Марс се намира най-високата известна ни планина в Слънчевата система. Висока е 22 километра."];
var randFactsForJupiter = ["Юпитер има най-краткия ден от всички планети в Слънчевата система(9 часа и 55 минути).", "„Голямото червено петно“ е мощна буря, която вилнее на Юпитер поне от 150 години. Бурята е толкова голяма, че в нея се побира два пъти размера на Земята.", "Планетата има 67 известни спътника."];
var randFactsForEarth = [" Земята е най-гореща, когато е най-отдалечена от Слънцето, а не когато е най-близо!", "Позната още като Водната планета!", "Средната температура на Земята е около 16,1 °C."];
var randFactsForDraco = ["Дракон е едно от най-древните съзвездия.", "Простира се между съзвездията Голямата мечка и Малката мечка, затова се казва, че драконът се вие между двете мечки!", "Дракон пресъздава Ладон, стоглав дракон, който пазел златните ябълки на Хесперидите."];
var randFactsForOrion = ["Традиционното българско име на Орион е Рало или Ралица.", "Орион се намира в съседство с реката Еридан и своите ловджийски кучета Голямото куче и Малкото куче в схватка с Бика.", "За древните египтяни Орион е символизирал бога на светлината Озирис."];
var randFactsForMilkyWay = [" В Млечния път има повече от 200 милиарда звезди.", " В средата на Млечния път има черна дупка.", "Млечният път е стар почти колкото самата Вселена."];
var genNumber;
var compareNumbMars = number;
var compareNumbJupiter = number;
var compareNumbEarth = number;
var compareNumbDraco = number;
var compareNumbOrion = number;
var compareNumbMilkyWay = number;
var numberOfFacts = 3;
var k = 0;
var Numbers = [0, 1, 2];
var number = Math.floor((Math.random() * numberOfFacts) + 0);

// въртене на факти за Марс
$(document).ready(function () {
    $("#popUpInfoOne").hide(300);
    for (var i = 0; i < numberOfFacts; i++) {
        if (Numbers[i] == number) document.getElementById('showFactOne').innerHTML = randFactsForMars[i];
    }
});
$(document).ready(function () {
    $("#learnForMars").click(function () {
        $("#popUpInfoOne").toggle(850);
    });
    $("#moreInfoOne").click(function () {
        genNumber = Math.floor((Math.random() * numberOfFacts) + 0);
        while (compareNumbMars == genNumber) {
            genNumber = Math.floor((Math.random() * numberOfFacts) + 0);
        }
        compareNumbMars = genNumber;
        for (var j = 0; j < numberOfFacts; j++)
            if (Numbers[j] == genNumber) document.getElementById('showFactOne').innerHTML = randFactsForMars[j];
    });
});

//  Марс - край

// въртене на факти за Юпитер
$(document).ready(function () {
    $("#popUpInfoTwo").hide(300);
    for (var i = 0; i < numberOfFacts; i++) {
        if (Numbers[i] == number) document.getElementById('showFactTwo').innerHTML = randFactsForJupiter[i];
    }
});
$(document).ready(function () {
    $("#learnForJupiter").click(function () {
        $("#popUpInfoTwo").toggle(850);
    });
    $("#moreInfoTwo").click(function () {
        genNumber = Math.floor((Math.random() * numberOfFacts) + 0);
        while (compareNumbJupiter == genNumber) {
            genNumber = Math.floor((Math.random() * numberOfFacts) + 0);
        }
        compareNumbJupiter = genNumber;
        for (var j = 0; j < numberOfFacts; j++)
            if (Numbers[j] == genNumber) document.getElementById('showFactTwo').innerHTML = randFactsForJupiter[j];
    });
});
//  Юпитер - край

// въртене на факти за Земя
$(document).ready(function () {
    $("#popUpInfoThree").hide(300);
    for (var i = 0; i < numberOfFacts; i++) {
        if (Numbers[i] == number) document.getElementById('showFactThree').innerHTML = randFactsForEarth[i];
    }
});
$(document).ready(function () {
    $("#learnForEarth").click(function () {
        $("#popUpInfoThree").toggle(850);
    });
    $("#moreInfoThree").click(function () {
        genNumber = Math.floor((Math.random() * numberOfFacts) + 0);
        while (compareNumbEarth == genNumber) {
            genNumber = Math.floor((Math.random() * numberOfFacts) + 0);
        }
        compareNumbEarth = genNumber;
        for (var j = 0; j < numberOfFacts; j++)
            if (Numbers[j] == genNumber) document.getElementById('showFactThree').innerHTML = randFactsForEarth[j];
    });
});
// Земя - край

// въртене на факти за Дракон
$(document).ready(function () {
    $("#popUpInfoFour").hide(300);
    for (var i = 0; i < numberOfFacts; i++) {
        if (Numbers[i] == number) document.getElementById('showFactFour').innerHTML = randFactsForDraco[i];
    }
});
$(document).ready(function () {
    $("#learnForDraco").click(function () {
        $("#popUpInfoFour").toggle(850);
    });
    $("#moreInfoFour").click(function () {
        genNumber = Math.floor((Math.random() * numberOfFacts) + 0);
        while (compareNumbDraco == genNumber) {
            genNumber = Math.floor((Math.random() * numberOfFacts) + 0);
        }
        compareNumbDraco = genNumber;
        for (var j = 0; j < numberOfFacts; j++)
            if (Numbers[j] == genNumber) document.getElementById('showFactFour').innerHTML = randFactsForDraco[j];
    });
});
//  Дракон - край

// въртене на факти за Орион
$(document).ready(function () {
    $("#popUpInfoFive").hide(300);
    for (var i = 0; i < numberOfFacts; i++) {
        if (Numbers[i] == number) document.getElementById('showFactFive').innerHTML = randFactsForOrion[i];
    }
});
$(document).ready(function () {
    $("#learnForOrion").click(function () {
        $("#popUpInfoFive").toggle(850);
    });
    $("#moreInfoFive").click(function () {
        genNumber = Math.floor((Math.random() * numberOfFacts) + 0);
        while (compareNumbOrion == genNumber) {
            genNumber = Math.floor((Math.random() * numberOfFacts) + 0);
        }
        compareNumbOrion = genNumber;
        for (var j = 0; j < numberOfFacts; j++)
            if (Numbers[j] == genNumber) document.getElementById('showFactFive').innerHTML = randFactsForOrion[j];
    });
});
// Орион - край

// въртене на факти за Млечен път
$(document).ready(function () {
    $("#popUpInfoSix").hide(300);
    for (var i = 0; i < numberOfFacts; i++) {
        if (Numbers[i] == number) document.getElementById('showFactSix').innerHTML = randFactsForMilkyWay[i];
    }
});
$(document).ready(function () {
    $("#learnForMilkyWay").click(function () {
        $("#popUpInfoSix").toggle(850);
    });
    $("#moreInfoSix").click(function () {
        genNumber = Math.floor((Math.random() * numberOfFacts) + 0);
        while (compareNumbMilkyWay == genNumber) {
            genNumber = Math.floor((Math.random() * numberOfFacts) + 0);
        }
        compareNumbMilkyWay = genNumber;
        for (var j = 0; j < numberOfFacts; j++)
            if (Numbers[j] == genNumber) document.getElementById('showFactSix').innerHTML = randFactsForMilkyWay[j];
    });
});
// Млечен път - край

/* Search Bar */
audio.src = "style/site_background.mp3";
function mute() {

    audio.muted = true;

}
function unMute() {
    audio.muted = false;
}
