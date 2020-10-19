// JavaScript source code
function showPopupImgCnc() {
    var popup = document.getElementById("myPopupImgCnc");
    popup.classList.add("showImg");
    playDrawConst();
}
function hidePopupImgCnc() {
    var popup = document.getElementById("myPopupImgCnc");
    popup.classList.remove("showImg");
    playDrawConst();
}

function showPopupImgCma() {
    var popup = document.getElementById("myPopupImgCma");
    popup.classList.add("showImg");
    playDrawConst();
}
function hidePopupImgCma() {
    var popup = document.getElementById("myPopupImgCma");
    popup.classList.remove("showImg");
    playDrawConst();
}

function showPopupImgGem() {
    var popup = document.getElementById("myPopupImgGem");
    popup.classList.add("showImg");
    playDrawConst();
}
function hidePopupImgGem() {
    var popup = document.getElementById("myPopupImgGem");
    popup.classList.remove("showImg");
    playDrawConst();
}

function showPopupImgAur() {
    var popup = document.getElementById("myPopupImgAur");
    popup.classList.add("showImg");
    playDrawConst();
}
function hidePopupImgAur() {
    var popup = document.getElementById("myPopupImgAur");
    popup.classList.remove("showImg");
    playDrawConst();
}

function showPopupImgLib() {
    var popup = document.getElementById("myPopupImgLib");
    popup.classList.add("showImg");
    playDrawConst();
}
function hidePopupImgLib() {
    var popup = document.getElementById("myPopupImgLib");
    popup.classList.remove("showImg");
    playDrawConst();
}

function showPopupImgOri() {
    var popup = document.getElementById("myPopupImgOri");
    popup.classList.add("showImg");
    playDrawConst();
}
function hidePopupImgOri() {
    var popup = document.getElementById("myPopupImgOri");
    popup.classList.remove("showImg");
    playDrawConst();
}

function showPopupImgCas() {
    var popup = document.getElementById("myPopupImgCas");
    popup.classList.add("showImg");
    playDrawConst();
}
function hidePopupImgCas() {
    var popup = document.getElementById("myPopupImgCas");
    popup.classList.remove("showImg");
    playDrawConst();
}

function showPopupImgLeo() {
    var popup = document.getElementById("myPopupImgLeo");
    popup.classList.add("showImg");
    playDrawConst();
}
function hidePopupImgLeo() {
    var popup = document.getElementById("myPopupImgLeo");
    popup.classList.remove("showImg");
    playDrawConst();
}

function showPopupImgCap() {
    var popup = document.getElementById("myPopupImgCap");
    popup.classList.add("showImg");
    playDrawConst();
}
function hidePopupImgCap() {
    var popup = document.getElementById("myPopupImgCap");
    popup.classList.remove("showImg");
    playDrawConst();
}

function showPopupImgCyg() {
    var popup = document.getElementById("myPopupImgCyg");
    popup.classList.add("showImg");
    playDrawConst();
}
function hidePopupImgCyg() {
    var popup = document.getElementById("myPopupImgCyg");
    popup.classList.remove("showImg");
    playDrawConst();
}

function showPopupImgPer() {
    var popup = document.getElementById("myPopupImgPer");
    popup.classList.add("showImg");
    playDrawConst();
}
function hidePopupImgPer() {
    var popup = document.getElementById("myPopupImgPer");
    popup.classList.remove("showImg");
    playDrawConst();
}

function showPopupImgSco() {
    var popup = document.getElementById("myPopupImgSco");
    popup.classList.add("showImg");
    playDrawConst();
}
function hidePopupImgSco() {
    var popup = document.getElementById("myPopupImgSco");
    popup.classList.remove("showImg");
    playDrawConst();
}
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
/*--------------------------*/
var divOpenAudio;
function playAudioOpening() {
    divOpenAudio = new Audio();
    divOpenAudio.src = "style/articleOpening.wav";
    divOpenAudio.play();
}
/*---------------------*/
var drawConst;
function playDrawConst() {
    drawConst = new Audio();
    drawConst.src = "style/constellationsSound.wav";
    drawConst.play();
}
   
/*-----------------------аудио-/край/---------------*/

var displayName = document.getElementsByClassName("showName");
var displayName = document.getElementsByClassName("showName");
var displayLatinName = document.getElementsByClassName("showLatinName");
var displayAbbreviation = document.getElementsByClassName("showAbbreviation");
var displaySymbol = document.getElementsByClassName("showSymbol");
var displayMonth = document.getElementsByClassName("showMonth");
var displayFamily = document.getElementsByClassName("showFamily");
var displayMainStars = document.getElementsByClassName("showMainStars");
var displayBrightestStar = document.getElementsByClassName("showBrightestStar");
var displayConstellationCardName = document.getElementsByClassName("constellationCardName");

var constellations = [
    {
        name: "Рак",
        latinName: "Crab",
        abbreviation: "Cnc",
        symbol: "рак",
        month: "Март",
        family: "Зодиакални",
        mainStars: 0,
        brightestStar: "Алтарф (β Cnc)",
    },
    {
        name: "Голямо куче",
        latinName: "Canis Major",
        abbreviation: "CMa",
        symbol: "кучето на митичния ловец Орион",
        month: "Февруари",
        family: "Орион",
        mainStars: 5,
        brightestStar: "Сириус (α Canis Majoris)",
    },
    {
        name: "Близнаци",
        latinName: "Gemini",
        abbreviation: "Gem",
        symbol: "близнаците Кастор и Полукс",
        month: "Февруари",
        family: "Зодиакални",
        mainStars: 4,
        brightestStar: "Полукс (β Gem)",
    },
    {
        name: "Колар",
        latinName: "Auriga",
        abbreviation: "Aur",
        symbol: "колесничар",
        month: "Февруари",
        family: "Персей",
        mainStars: 4,
        brightestStar: "Капела (α Aur)",
    },
    {
        name: "Везни",
        latinName: "Libra",
        abbreviation: "Lib",
        symbol: "везна",
        month: "Юни",
        family: "Зодиакални",
        mainStars: 4,
        brightestStar: "Зубен Ел Шемали (β Librae)",
    },
    {
        name: "Орион",
        latinName: "Orion",
        abbreviation: "Ori",
        symbol: "митичният ловец Орион",
        month: "Януари",
        family: "Орион",
        mainStars: 8,
        brightestStar: "Ригел (β Орион)",
    },
    {
        name: "Касиопея",
        latinName: "Cassiopeia",
        abbreviation: "Cas",
        symbol: "царица Касиопея",
        month: "Ноември",
        family: "Персей",
        mainStars: 5,
        brightestStar: "Шедар (α Cas)",
    },
    {
        name: "Лъв",
        latinName: "Leo",
        abbreviation: "Leo",
        symbol: "лъвът",
        month: "Април",
        family: "Зодиакални",
        mainStars: 3,
        brightestStar: "Регул (α Leo)",
    },
    {
        name: "Козирог",
        latinName: "Capricornus",
        abbreviation: "Cap",
        symbol: "козирог",
        month: "Септември",
        family: "Зодиакални",
        mainStars: 1,
        brightestStar: "Денеб Алджеди (δ Cap)",
    },
    {
        name: "Лебед",
        latinName: "Cygnus",
        abbreviation: "Cyg",
        symbol: "лебедът",
        month: "Септември",
        family: "Херкулес",
        mainStars: 4,
        brightestStar: "Денеб (α Cyg)",
    },
    {
        name: "Персей",
        latinName: "Perseus",
        abbreviation: "Per",
        symbol: "митичният герой Персей",
        month: "Декември",
        family: "Персей",
        mainStars: 5,
        brightestStar: "α Per",
    },
    {
        name: "Скорпион",
        latinName: "Scorpius",
        abbreviation: "Sco",
        symbol: "скорпионът",
        month: "Зодиакални",
        family: "Юли",
        mainStars: 13,
        brightestStar: "Антарес (α Sco)",
    },
];

$(document).ready(function () {
    var findMeConstellation = JSON.parse(localStorage.getItem("searchVariable"));
    switch (findMeConstellation) {
        case 0:
            {
                $("#constellationList").show(300);
                $("#Cnc").hide(300);
                $("#CMa").hide(300);
                $("#Gem").hide(300);
                $("#Aur").hide(300);
                $("#Lib").hide(300);
                $("#Ori").hide(300);
                $("#Cas").hide(300);
                $("#Leo").hide(300);
                $("#Cap").hide(300);
                $("#Cyg").hide(300);
                $("#Per").hide(300);
                $("#Sco").hide(300);
                break;
            }
        case 1:
            {
                CncPage();
                break;
            }
        case 2:
            {
                CMaPage();
                break;
            }
        case 3:
            {
                GemPage();
                break;
            }
        case 4:
            {
                AurPage();
                break;
            }
        case 5:
            {
                LibPage();
                break;
            }
        case 6:
            {
                OriPage();
                break;
            }
        case 7:
            {
                CasPage();
                break;
            }
        case 8:
            {
                LeoPage();
                break;
            }
        case 9:
            {
                CapPage();
                break;
            }
        case 10:
            {
                CygPage();
                break;
            }
        case 11:
            {
                PerPage();
                break;
            }
        case 12:
            {
                ScoPage();
                break;
            }
    }

    for (var j = 0; j < 12; j++) {
        displayConstellationCardName[j].innerHTML = constellations[j].name;
        displayName[j].innerHTML = constellations[j].name;
        displayLatinName[j].innerHTML = constellations[j].latinName;
        displayAbbreviation[j].innerHTML = constellations[j].abbreviation;
        displaySymbol[j].innerHTML = constellations[j].symbol;
        displayMonth[j].innerHTML = constellations[j].month;
        displayFamily[j].innerHTML = constellations[j].family;
        displayMainStars[j].innerHTML = constellations[j].mainStars;
        displayBrightestStar[j].innerHTML = constellations[j].brightestStar;
    }

    $(".backButtonConstellations").click(function () {
        playAudioOnClick();
    });

    $(".constellationCard").click(function () {
        playAudioOpening();
    });

});


function CncPage() {
    $("#constellationList").hide(300);
    $("#Cnc").show(300);
    $("#CMa").hide(300);
    $("#Gem").hide(300);
    $("#Aur").hide(300);
    $("#Lib").hide(300);
    $("#Ori").hide(300);
    $("#Cas").hide(300);
    $("#Leo").hide(300);
    $("#Cap").hide(300);
    $("#Cyg").hide(300);
    $("#Per").hide(300);
    $("#Sco").hide(300);
}
function CMaPage() {
    $("#constellationList").hide(300);
    $("#Cnc").hide(300);
    $("#CMa").show(300);
    $("#Gem").hide(300);
    $("#Aur").hide(300);
    $("#Lib").hide(300);
    $("#Ori").hide(300);
    $("#Cas").hide(300);
    $("#Leo").hide(300);
    $("#Cap").hide(300);
    $("#Cyg").hide(300);
    $("#Per").hide(300);
    $("#Sco").hide(300);
}
function GemPage() {
    $("#constellationList").hide(300);
    $("#Cnc").hide(300);
    $("#CMa").hide(300);
    $("#Gem").show(300);
    $("#Aur").hide(300);
    $("#Lib").hide(300);
    $("#Ori").hide(300);
    $("#Cas").hide(300);
    $("#Leo").hide(300);
    $("#Cap").hide(300);
    $("#Cyg").hide(300);
    $("#Per").hide(300);
    $("#Sco").hide(300);
}
function AurPage() {
    $("#constellationList").hide(300);
    $("#Cnc").hide(300);
    $("#CMa").hide(300);
    $("#Gem").hide(300);
    $("#Aur").show(300);
    $("#Lib").hide(300);
    $("#Ori").hide(300);
    $("#Cas").hide(300);
    $("#Leo").hide(300);
    $("#Cap").hide(300);
    $("#Cyg").hide(300);
    $("#Per").hide(300);
    $("#Sco").hide(300);
}
function LibPage() {
    $("#constellationList").hide(300);
    $("#Cnc").hide(300);
    $("#CMa").hide(300);
    $("#Gem").hide(300);
    $("#Aur").hide(300);
    $("#Lib").show(300);
    $("#Ori").hide(300);
    $("#Cas").hide(300);
    $("#Leo").hide(300);
    $("#Cap").hide(300);
    $("#Cyg").hide(300);
    $("#Per").hide(300);
    $("#Sco").hide(300);
}
function OriPage() {
    $("#constellationList").hide(300);
    $("#Cnc").hide(300);
    $("#CMa").hide(300);
    $("#Gem").hide(300);
    $("#Aur").hide(300);
    $("#Lib").hide(300);
    $("#Ori").show(300);
    $("#Cas").hide(300);
    $("#Leo").hide(300);
    $("#Cap").hide(300);
    $("#Cyg").hide(300);
    $("#Per").hide(300);
    $("#Sco").hide(300);
}
function CasPage() {
    $("#constellationList").hide(300);
    $("#Cnc").hide(300);
    $("#CMa").hide(300);
    $("#Gem").hide(300);
    $("#Aur").hide(300);
    $("#Lib").hide(300);
    $("#Ori").hide(300);
    $("#Cas").show(300);
    $("#Leo").hide(300);
    $("#Cap").hide(300);
    $("#Cyg").hide(300);
    $("#Per").hide(300);
    $("#Sco").hide(300);
}
function LeoPage() {
    $("#constellationList").hide(300);
    $("#Cnc").hide(300);
    $("#CMa").hide(300);
    $("#Gem").hide(300);
    $("#Aur").hide(300);
    $("#Lib").hide(300);
    $("#Ori").hide(300);
    $("#Cas").hide(300);
    $("#Leo").show(300);
    $("#Cap").hide(300);
    $("#Cyg").hide(300);
    $("#Per").hide(300);
    $("#Sco").hide(300);
}
function CapPage() {
    $("#constellationList").hide(300);
    $("#Cnc").hide(300);
    $("#CMa").hide(300);
    $("#Gem").hide(300);
    $("#Aur").hide(300);
    $("#Lib").hide(300);
    $("#Ori").hide(300);
    $("#Cas").hide(300);
    $("#Leo").hide(300);
    $("#Cap").show(300);
    $("#Cyg").hide(300);
    $("#Per").hide(300);
    $("#Sco").hide(300);
}
function CygPage() {
    $("#constellationList").hide(300);
    $("#Cnc").hide(300);
    $("#CMa").hide(300);
    $("#Gem").hide(300);
    $("#Aur").hide(300);
    $("#Lib").hide(300);
    $("#Ori").hide(300);
    $("#Cas").hide(300);
    $("#Leo").hide(300);
    $("#Cap").hide(300);
    $("#Cyg").show(300);
    $("#Per").hide(300);
    $("#Sco").hide(300);
}
function PerPage() {
    $("#constellationList").hide(300);
    $("#Cnc").hide(300);
    $("#CMa").hide(300);
    $("#Gem").hide(300);
    $("#Aur").hide(300);
    $("#Lib").hide(300);
    $("#Ori").hide(300);
    $("#Cas").hide(300);
    $("#Leo").hide(300);
    $("#Cap").hide(300);
    $("#Cyg").hide(300);
    $("#Per").show(300);
    $("#Sco").hide(300);
}
function ScoPage() {
    $("#constellationList").hide(300);
    $("#Cnc").hide(300);
    $("#CMa").hide(300);
    $("#Gem").hide(300);
    $("#Aur").hide(300);
    $("#Lib").hide(300);
    $("#Ori").hide(300);
    $("#Cas").hide(300);
    $("#Leo").hide(300);
    $("#Cap").hide(300);
    $("#Cyg").hide(300);
    $("#Per").hide(300);
    $("#Sco").show(300);
}
function backToConstellations() {
    $("#constellationList").show(300);
    $("#Cnc").hide(300);
    $("#CMa").hide(300);
    $("#Gem").hide(300);
    $("#Aur").hide(300);
    $("#Lib").hide(300);
    $("#Ori").hide(300);
    $("#Cas").hide(300);
    $("#Leo").hide(300);
    $("#Cap").hide(300);
    $("#Cyg").hide(300);
    $("#Per").hide(300);
    $("#Sco").hide(300);
}
function showCnc() {
    var canvas = document.getElementById('canvasCnc');
    var constellationShape = canvas.getContext('2d');
    playDrawConst();

    constellationShape.beginPath();
    constellationShape.moveTo(132, 19);
    constellationShape.lineTo(148, 61);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();


    constellationShape.beginPath();
    constellationShape.moveTo(150, 72);
    constellationShape.lineTo(143, 87);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(105, 122);
    constellationShape.lineTo(138, 95);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(138, 95);
    constellationShape.lineTo(208, 144);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();
}
function hideCnc() {
    var canvas = document.getElementById('canvasCnc');
    var constellationShape = canvas.getContext('2d');
    constellationShape.clearRect(0, 0, canvas.width, canvas.height);
}

function showCMa() {
    var canvas = document.getElementById('canvasCMa');
    var constellationShape = canvas.getContext('2d');
    playDrawConst();

    constellationShape.beginPath();
    constellationShape.moveTo(104, 19);
    constellationShape.lineTo(83, 36);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(83, 40);
    constellationShape.lineTo(117, 48);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();


    constellationShape.beginPath();
    constellationShape.moveTo(104, 19);
    constellationShape.lineTo(117, 48);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(125, 48);
    constellationShape.lineTo(160, 45);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();


    constellationShape.beginPath();
    constellationShape.moveTo(175, 45);
    constellationShape.lineTo(225, 48);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(165, 48);
    constellationShape.lineTo(135, 100);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(132, 106);
    constellationShape.lineTo(123, 117);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(118, 122);
    constellationShape.lineTo(96, 132);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(90, 135);
    constellationShape.lineTo(77, 144);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(125, 122);
    constellationShape.lineTo(152, 137);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

}
function hideCMa() {
    var canvas = document.getElementById('canvasCMa');
    var constellationShape = canvas.getContext('2d');
    constellationShape.clearRect(0, 0, canvas.width, canvas.height);
}

function showGem() {
    var canvas = document.getElementById('canvasGem');
    var constellationShape = canvas.getContext('2d');
    playDrawConst();

    constellationShape.beginPath();
    constellationShape.moveTo(84, 20);
    constellationShape.lineTo(87, 35);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(82, 38);
    constellationShape.lineTo(40, 40);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(95, 38);
    constellationShape.lineTo(130, 45);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(87, 40);
    constellationShape.lineTo(76, 75);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(72, 82);
    constellationShape.lineTo(27, 97);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(22, 100);
    constellationShape.lineTo(47, 140);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(79, 81);
    constellationShape.lineTo(110, 102);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(114, 107);
    constellationShape.lineTo(115, 133);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(141, 46);
    constellationShape.lineTo(185, 50);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(190, 47);
    constellationShape.lineTo(185, 35);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();


    constellationShape.beginPath();
    constellationShape.moveTo(180, 30);
    constellationShape.lineTo(168, 22);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(195, 50);
    constellationShape.lineTo(261, 48);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(190, 53);
    constellationShape.lineTo(197, 96);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(198, 101);
    constellationShape.lineTo(180, 133);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(198, 101);
    constellationShape.lineTo(228, 130);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(235, 133);
    constellationShape.lineTo(253, 138);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();
}
function hideGem() {
    var canvas = document.getElementById('canvasGem');
    var constellationShape = canvas.getContext('2d');
    constellationShape.clearRect(0, 0, canvas.width, canvas.height);
}

function showAur() {
    var canvas = document.getElementById('canvasAur');
    var constellationShape = canvas.getContext('2d');
    playDrawConst();

    constellationShape.beginPath();
    constellationShape.moveTo(74, 39);
    constellationShape.lineTo(58, 80);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(56, 86);
    constellationShape.lineTo(140, 136);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(153, 137);
    constellationShape.lineTo(242, 113);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(246, 108);
    constellationShape.lineTo(221, 47);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(215, 43);
    constellationShape.lineTo(183, 31);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(172, 29);
    constellationShape.lineTo(83, 35);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();
}
function hideAur() {
    var canvas = document.getElementById('canvasAur');
    var constellationShape = canvas.getContext('2d');
    constellationShape.clearRect(0, 0, canvas.width, canvas.height);
}

function showLib() {
    var canvas = document.getElementById('canvasLib');
    var constellationShape = canvas.getContext('2d');
    playDrawConst();

    constellationShape.beginPath();
    constellationShape.moveTo(40, 68);
    constellationShape.lineTo(58, 78);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(67, 78);
    constellationShape.lineTo(101, 63);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(108, 57);
    constellationShape.lineTo(124, 26);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(130, 24);
    constellationShape.lineTo(228, 39);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(235, 43);
    constellationShape.lineTo(242, 93);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(130, 24);
    constellationShape.lineTo(242, 93);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(238, 97);
    constellationShape.lineTo(180, 120);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(176, 125);
    constellationShape.lineTo(179, 131);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();
}
function hideLib() {
    var canvas = document.getElementById('canvasLib');
    var constellationShape = canvas.getContext('2d');
    constellationShape.clearRect(0, 0, canvas.width, canvas.height);
}

function showOri() {
    var canvas = document.getElementById('canvasOri');
    var constellationShape = canvas.getContext('2d');
    playDrawConst();

    constellationShape.beginPath();
    constellationShape.moveTo(36, 16);
    constellationShape.lineTo(54, 36);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(59, 37);
    constellationShape.lineTo(64, 36);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(70, 32);
    constellationShape.lineTo(70, 13);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(58, 40);
    constellationShape.lineTo(78, 58);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(85, 62);
    constellationShape.lineTo(98, 69);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(107, 69);
    constellationShape.lineTo(136, 59);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(145, 60);
    constellationShape.lineTo(165, 73);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(174, 74);
    constellationShape.lineTo(232, 72);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(237, 70);
    constellationShape.lineTo(238, 64);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(237, 60);
    constellationShape.lineTo(228, 55);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(235, 75);
    constellationShape.lineTo(233, 79);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(232, 83);
    constellationShape.lineTo(227, 89);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(224, 93);
    constellationShape.lineTo(215, 96);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(169, 77);
    constellationShape.lineTo(155, 101);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(148, 103);
    constellationShape.lineTo(140, 105);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(133, 106);
    constellationShape.lineTo(127, 107);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(121, 105);
    constellationShape.lineTo(103, 72);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(121, 110);
    constellationShape.lineTo(113, 139);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(118, 141);
    constellationShape.lineTo(188, 137);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(192, 134);
    constellationShape.lineTo(155, 105);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();
}
function hideOri() {
    var canvas = document.getElementById('canvasOri');
    var constellationShape = canvas.getContext('2d');
    constellationShape.clearRect(0, 0, canvas.width, canvas.height);
}

function showCap() {
    var canvas = document.getElementById('canvasCap');
    var constellationShape = canvas.getContext('2d');
    playDrawConst();

    constellationShape.beginPath();
    constellationShape.moveTo(218, 15);
    constellationShape.lineTo(227, 22);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(237, 29);
    constellationShape.lineTo(273, 109);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(270, 113);
    constellationShape.lineTo(160, 123);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(145, 123);
    constellationShape.lineTo(67, 129);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(55, 129);
    constellationShape.lineTo(37, 119);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(37, 113);
    constellationShape.lineTo(58, 108);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(70, 106);
    constellationShape.lineTo(122, 85);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(134, 80);
    constellationShape.lineTo(209, 14);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

}
function hideCap() {
    var canvas = document.getElementById('canvasCap');
    var constellationShape = canvas.getContext('2d');
    constellationShape.clearRect(0, 0, canvas.width, canvas.height);
}


function showCas() {
    var canvas = document.getElementById('canvasCas');
    var constellationShape = canvas.getContext('2d');
    playDrawConst();

    constellationShape.beginPath();
    constellationShape.moveTo(60, 35);
    constellationShape.lineTo(60, 58);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(68, 63);
    constellationShape.lineTo(114, 85);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(120, 90);
    constellationShape.lineTo(120, 120);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(130, 123);
    constellationShape.lineTo(210, 107);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();


}
function hideCas() {
    var canvas = document.getElementById('canvasCas');
    var constellationShape = canvas.getContext('2d');
    constellationShape.clearRect(0, 0, canvas.width, canvas.height);
}


function showCyg() {
    var canvas = document.getElementById('canvasCyg');
    var constellationShape = canvas.getContext('2d');
    playDrawConst();

    constellationShape.beginPath();
    constellationShape.moveTo(41, 20);
    constellationShape.lineTo(81, 49);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(93, 58);
    constellationShape.lineTo(135, 85);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(148, 95);
    constellationShape.lineTo(183, 128);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(152, 85);
    constellationShape.lineTo(203, 48);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(135, 93);
    constellationShape.lineTo(65, 120);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

}
function hideCyg() {
    var canvas = document.getElementById('canvasCyg');
    var constellationShape = canvas.getContext('2d');
    constellationShape.clearRect(0, 0, canvas.width, canvas.height);
}

function showLeo() {
    var canvas = document.getElementById('canvasLeo');
    var constellationShape = canvas.getContext('2d');
    playDrawConst();

    constellationShape.beginPath();
    constellationShape.moveTo(68, 63);
    constellationShape.lineTo(32, 76);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(32, 78);
    constellationShape.lineTo(78, 86);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(68, 63);
    constellationShape.lineTo(78, 86);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(93, 88);
    constellationShape.lineTo(209, 117);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(221, 113);
    constellationShape.lineTo(217, 94);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(209, 87);
    constellationShape.lineTo(188, 75);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(180, 68);
    constellationShape.lineTo(184, 58);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(196, 51);
    constellationShape.lineTo(242, 34);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(258, 36);
    constellationShape.lineTo(273, 48);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();
}
function hideLeo() {
    var canvas = document.getElementById('canvasLeo');
    var constellationShape = canvas.getContext('2d');
    constellationShape.clearRect(0, 0, canvas.width, canvas.height);
}


function showPer() {
    var canvas = document.getElementById('canvasPer');
    var constellationShape = canvas.getContext('2d');
    playDrawConst();

    constellationShape.beginPath();
    constellationShape.moveTo(261, 44);
    constellationShape.lineTo(254, 55);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(247, 59);
    constellationShape.lineTo(225, 59);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(211, 58);
    constellationShape.lineTo(180, 47);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(168, 45);
    constellationShape.lineTo(132, 37);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(118, 35);
    constellationShape.lineTo(100, 18);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(89, 17);
    constellationShape.lineTo(52, 15);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(52, 16);
    constellationShape.lineTo(70, 28);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(78, 31);
    constellationShape.lineTo(100, 52);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(112, 56);
    constellationShape.lineTo(132, 64);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(142, 67);
    constellationShape.lineTo(186, 96);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(192, 100);
    constellationShape.lineTo(196, 113);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(202, 119);
    constellationShape.lineTo(224, 128);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(237, 130);
    constellationShape.lineTo(257, 136);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(267, 132);
    constellationShape.lineTo(272, 122);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();


}
function hidePer() {
    var canvas = document.getElementById('canvasPer');
    var constellationShape = canvas.getContext('2d');
    constellationShape.clearRect(0, 0, canvas.width, canvas.height);
}


function showSco() {
    var canvas = document.getElementById('canvasSco');
    var constellationShape = canvas.getContext('2d');
    playDrawConst();

    constellationShape.beginPath();
    constellationShape.moveTo(58, 99);
    constellationShape.lineTo(42, 105);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(35, 108);
    constellationShape.lineTo(25, 113);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(24, 118);
    constellationShape.lineTo(32, 124);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(45, 129);
    constellationShape.lineTo(65, 136);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(73, 137);
    constellationShape.lineTo(92, 140);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(103, 139);
    constellationShape.lineTo(115, 127);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(118, 120);
    constellationShape.lineTo(119, 104);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(125, 101);
    constellationShape.lineTo(162, 91);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(171, 89);
    constellationShape.lineTo(176, 85);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(188, 83);
    constellationShape.lineTo(205, 81);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(211, 81);
    constellationShape.lineTo(240, 83);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(243, 80);
    constellationShape.lineTo(230, 65);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();

    constellationShape.beginPath();
    constellationShape.moveTo(248, 88);
    constellationShape.lineTo(241, 102);
    constellationShape.lineWidth = 2;
    constellationShape.strokeStyle = "white";
    constellationShape.stroke();
}
function hideSco() {
    var canvas = document.getElementById('canvasSco');
    var constellationShape = canvas.getContext('2d');
    constellationShape.clearRect(0, 0, canvas.width, canvas.height);
}

audio.src = "style/site_background.mp3";
function mute() {

    audio.muted = true;

}
function unMute() {

    audio.muted = false;
}
