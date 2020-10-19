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
/*-----------------------------*/
var audioOnClick;
function playAudioOnClick() {
    audioOnClick = new Audio();
    audioOnClick.src = "style/click.wav";
    audioOnClick.play();
}

/*-----------------------аудио-/край/---------------*/

///////////---------------Скрий-всички-в-началото-----------------/////////
$(document).ready(function () {
    var findMeEntertainment = JSON.parse(localStorage.getItem("searchVariable"));
                $("#imageGalleryEntertainment").hide();
                $("#gameLevels").hide();
                $("#backButtonGame").hide();
                $("#backButtonTest").hide();
                $("#backButtonGallery").hide();
                $("#imageGameOver").hide();
                $("#imageYouWin").hide();
                $("#quizArea").hide();
    /*-----------за-бутоните-назад------------*/
    $("#backButtonGame").click(function () {
        playAudioOnClick();
        $("#gameLevels").hide();
        $("#imageGalleryEntertainment").hide();
        $("canvas").hide();
        $("#backButtonGame").hide();
        $("#entertainmentMenu").show();
        $("#imageGameOver").hide();
        $("#imageYouWin").hide();
        $("#quizArea").hide();
        backgroundMusic.stop();
        gamingArea.stop();
    });

    $("#backButtonGallery").click(function () {
        playAudioOnClick();
        $("#gameLevels").hide();
        $("#imageGalleryEntertainment").hide();
        $("canvas").hide();
        $("#backButtonGallery").hide();
        $("#entertainmentMenu").show();
        $("#imageGameOver").hide();
        $("#imageYouWin").hide();
        $("#quizArea").hide();
        backgroundMusic.stop();
        gamingArea.stop();
    });

    $("#backButtonTest").click(function () {
        playAudioOnClick();
        $("#gameLevels").hide();
        $("#imageGalleryEntertainment").hide();
        $("canvas").hide();
        $("#backButtonTest").hide();
        $("#entertainmentMenu").show();
        $("#imageGameOver").hide();
        $("#imageYouWin").hide();
        $("#quizArea").hide();
        backgroundMusic.stop();
        gamingArea.stop();
    });
    /*---------Покажи/скрий галерията--------*/
    $("#buttonGallery").click(function showGallery() {
        playAudioOnClick();
        $("#imageGalleryEntertainment").fadeIn(500);
        $("#gameLevels").hide();
        $("canvas").hide();
        $("#entertainmentMenu").hide();
        $("#backButtonGallery").show();
        $("#backButtonGame").hide();
        $("#backButtonTest").hide();
    });

    $(".column").click(function () {
        $("#imagesForGallery1").hide();

    });
    /*--------------покажи/скрий-нивата-на-играта---------------*/
   
        $("#buttonGame").click(function () {
            playAudioOnClick();
            $("#gameLevels").fadeIn(500);
            $("#imageGalleryEntertainment").hide();
            $("canvas").hide();
            $("#entertainmentMenu").hide();
            $("#imageGame").show();
            $("#backButtonGame").show(500);
            $("#backButtonTest").hide(500);
            $("#backButtonGallery").hide(500);
    });
    /*-------------покажи-теста---------------*/
        $("#buttonTest").click(function () {
            playAudioOnClick();
            $("#entertainmentMenu").hide();
            $("#quizArea").fadeIn(500);
            $("#backButtonTest").show(500);
            $("#backButtonGallery").hide(500);
            $("#backButtonGame").hide(500);
            incorrectAnswers.splice(0, incorrectAnswers.length);//връщаме масива с грешните отговори в първоначалния му вид - []
            incorrectIndex = 0;// връщаме и индекса на масива с грешните отговори
            createQuestion();
        });
});
///////////////////

/*------------блокиране-на-scroll-------------*/
window.addEventListener("keydown", function (e) {
    // space and arrow keys
    if ([37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);

/*------------------------------------------*/

/* Създаване на тест */
var pos = 0;
var showArea;
var test;
var testStatus;
var question;
var choice;
var choices;
var chA;
var chB;
var chC;
var chD;
var correct = 0;
var incorrectAnswers = [];
var incorrectIndex = 0;
var answers = [];
var redQuestion = document.getElementsByClassName("questionTitleClass");
var greenQuestion = document.getElementsByClassName("questionTitleClass");
var colorA = document.getElementsByClassName("choiceColorA");
var colorB = document.getElementsByClassName("choiceColorB");
var colorC = document.getElementsByClassName("choiceColorC");
var colorD = document.getElementsByClassName("choiceColorD");
var isWrong = 0;
var checkRadioA = document.getElementsByClassName("quizRadioButtonA");
var checkRadioB = document.getElementsByClassName("quizRadioButtonB");
var checkRadioC = document.getElementsByClassName("quizRadioButtonC");
var checkRadioD = document.getElementsByClassName("quizRadioButtonD");
var x;
var choiceIndex = 0;
var questions = [
    ["Кой е първият етап от еволюцията на малките звезди?", "Планетарна мъглявина", "Червен гигант", "Малка звезда", "Облак протозвезди", "D", "0"],
    ["През колко етапа минава еволюцията на зввздите?", "7", "3", "5", "4", "C", "1"],
    ["Коя е най-отдалечената планета от Слънцето?", "Юпитер", "Уран", "Нептун", "Сатурн", "C", "2"],
    ["Коя е най-голямата планета в Слънчевата система?", "Венера", "Юпитер", "Сатурн", "Земя", "B", "3"],
    ["Съзвездието Лебед принадлежи към семейството на:", "Херкулес", "Орион", "Зодиакални", "Персей", "A", "4"],
    ["Кой месец е най-добър за гледане на съзвездието Касиопея?", "Ноември", "Февруари", "Юли", "Август", "A", "5"]
];
function getElement(x) {
    return document.getElementById(x);
}
function createQuestion() {
    test = getElement("quiz");
    if (pos >= questions.length) {
        //  test.innerHTML = "<h2>Имате " + correct + " от " + questions.length + " верни отговора!</h2>";
        test.innerHTML = "<h2>Имате " + correct + " от " + questions.length + " верни отговора!" + "(" + (Math.floor((correct / questions.length) * 100)) + "%)" + "</h2 >";
        getElement("status").innerHTML = "Тестът приключи!";
        test.innerHTML += "<button id='showAnswers' onclick='showAnswers()'>Виж грешките</button>";
        pos = 0;
        correct = 0;
        return false;
    }
    getElement("status").innerHTML = "Въпрос " + (pos + 1) + " от " + questions.length;
    question = questions[pos][0];
    chA = questions[pos][1];
    chB = questions[pos][2];
    chC = questions[pos][3];
    chD = questions[pos][4];
    test.innerHTML = "<h3 class='questionTitleClass' id='questionTitle'>" + question + "</h3>";
    test.innerHTML += "<input class='quizRadioButtonA' type='radio' name='choices' value='A' checked> " + "<span class='choiceColorA'>" + chA + "</span>" + "<br>";
    test.innerHTML += "<input class='quizRadioButtonB' type='radio' name='choices' value='B'> " + "<span class='choiceColorB'>" + chB + "</span>" + "<br>";
    test.innerHTML += "<input class='quizRadioButtonC' type='radio' name='choices' value='C'> " + "<span class='choiceColorC'>" + chC + "</span>" + "<br>";
    test.innerHTML += "<input class='quizRadioButtonD' type='radio' name='choices' value='D'> " + "<span class='choiceColorD'>" + chD + "</span>" + "<br><br>";
    test.innerHTML += "<button id='nextQuestion' onclick='checkAnswer()'>Следващ</button>";
}
function checkAnswer() {
    choices = document.getElementsByName("choices");
    for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
            choice = choices[i].value;
        }
    }
    answers[choiceIndex] = choice;
    choiceIndex++;
    if (choice == questions[pos][5]) {
        correct++;
    }
    else {
        incorrectAnswers[incorrectIndex] = questions[pos][6]; //запазваме грешните отговори в масив
        incorrectIndex++; // отделна променлива за индекса на масива с грешните отговори
    }
    pos++;
    createQuestion();
}

function showAnswers() {
    showArea = getElement("quiz");
    isWrong = 0;
    for (var j = 0; j < questions.length; j++) {
        question = questions[j][0];
        chA = questions[j][1];
        chB = questions[j][2];
        chC = questions[j][3];
        chD = questions[j][4];
        if (incorrectAnswers[isWrong] == j) {
            showArea.innerHTML += "<h3 class='questionTitleClass' id='questionTitle'>" + question + "</h3>";
            redQuestion[j].style.color = "red";
            showArea.innerHTML += "<input class='quizRadioButtonA' type='radio' name='choices' value='A'> " + "<span class='choiceColorA'>" + chA + "</span>" + "<br>";
            showArea.innerHTML += "<input class='quizRadioButtonB' type='radio' name='choices' value='B'> " + "<span class='choiceColorB'>" + chB + "</span>" + "<br>";
            showArea.innerHTML += "<input class='quizRadioButtonC' type='radio' name='choices' value='C'> " + "<span class='choiceColorC'>" + chC + "</span>" + "<br>";
            showArea.innerHTML += "<input class='quizRadioButtonD' type='radio' name='choices' value='D'> " + "<span class='choiceColorD'>" + chD + "</span>" + "<br><br>" + "<hr class='hrQuiz' />";
            isWrong++;
        }
        else {
            showArea.innerHTML += "<h3 class='questionTitleClass' id='questionTitle'>" + question + "</h3>";
            greenQuestion[j].style.color = "green";
            showArea.innerHTML += "<input class='quizRadioButtonA' type='radio' name='choices' value='A'> " + "<span class='choiceColorA'>" + chA + "</span>" + "<br>";
            showArea.innerHTML += "<input class='quizRadioButtonB' type='radio' name='choices' value='B'> " + "<span class='choiceColorB'>" + chB + "</span>" + "<br>";
            showArea.innerHTML += "<input class='quizRadioButtonC' type='radio' name='choices' value='C'> " + "<span class='choiceColorC'>" + chC + "</span>" + "<br>";
            showArea.innerHTML += "<input class='quizRadioButtonD' type='radio' name='choices' value='D'> " + "<span class='choiceColorD'>" + chD + "</span>" + "<br><br>" + "<hr class='hrQuiz' />";
        }

        switch (answers[j]) {
            case "A":
                colorA[j].style.color = "red";
                checkRadioA[j].checked = true;
                break;
            case "B":
                colorB[j].style.color = "red";
                checkRadioA[j].checked = true;
                break;
            case "C":
                colorC[j].style.color = "red";
                checkRadioA[j].checked = true;
                break;
            case "D":
                colorD[j].style.color = "red";
                checkRadioA[j].checked = true;
                break;
        }
        switch (questions[j][5]) {
            case "A":
                colorA[j].style.color = "green";
                break;
            case "B":
                colorB[j].style.color = "green";
                break;
            case "C":
                colorC[j].style.color = "green";
                break;
            case "D":
                colorD[j].style.color = "green";
                break;
        }
        $("#showAnswers").hide();
    }
}
/* Край на теста */

/*------------ИГРА------------*/
var gameHero;
var obstacles = [];
var score;
var background;
var backgroundMusic;
var crashSound;
var background;
var youWinSound;

var speed1;
var speed2;
var heroSpeed;
var frames;


function letsPlay() {
        $("#imageGame").hide();
        $("#imageGameOver").hide();
        $("#imageYouWin").hide();
        $("canvas").fadeIn();

    document.getElementById("backButtonGame").disabled = true;
    document.getElementById("buttonGameLevelOne").disabled = true;
    document.getElementById("buttonGameLevelTwo").disabled = true;
    document.getElementById("buttonGameLevelThree").disabled = true;
    document.getElementById("buttonGameLevelFour").disabled = true;
    document.getElementById("buttonGameLevelOne").style.opacity = "0.65";
    document.getElementById("buttonGameLevelTwo").style.opacity = "0.65";
    document.getElementById("buttonGameLevelThree").style.opacity = "0.65";
    document.getElementById("buttonGameLevelFour").style.opacity = "0.65";
    document.getElementById("backButtonGame").style.opacity = "0.65";

    gameHero = new component(50, 52, "style/hero.png", 10, 160, "image");
    score = new component("30px", "Consolas", "black", 480, 40, "text");
    background = new component(650, 350, "style/background.jpg", 0, 0, "image");
    crashSound = new sound("style/sound1.mp3");
    backgroundMusic = new sound("style/game.mp3");
    youWinSound = new sound("style/youWin.mp3");

    backgroundMusic.play();
    speed1 = 1;
    speed2 = -1.5;
    heroSpeed = 2.5;
    frames = 7;
    obstacles = [];
    gamingArea.start();
}

function letsPlayLevelTwo() {
        $("#imageGame").hide();
        $("#imageGameOver").hide();
        $("#imageYouWin").hide();
        $("canvas").fadeIn();

    document.getElementById("backButtonGame").disabled = true;
    document.getElementById("buttonGameLevelOne").disabled = true;
    document.getElementById("buttonGameLevelTwo").disabled = true;
    document.getElementById("buttonGameLevelThree").disabled = true;
    document.getElementById("buttonGameLevelFour").disabled = true;
    document.getElementById("buttonGameLevelOne").style.opacity = "0.65";
    document.getElementById("buttonGameLevelTwo").style.opacity = "0.65";
    document.getElementById("buttonGameLevelThree").style.opacity = "0.65";
    document.getElementById("buttonGameLevelFour").style.opacity = "0.65";
    document.getElementById("backButtonGame").style.opacity = "0.65";


    gameHero = new component(50, 52, "style/hero.png", 10, 160, "image");
    score = new component("30px", "Consolas", "black", 480, 40, "text");
    background = new component(650, 350, "style/background.jpg", 0, 0, "image");
    crashSound = new sound("style/sound1.mp3");
    backgroundMusic = new sound("style/game.mp3");
    youWinSound = new sound("style/youWin.mp3");

    backgroundMusic.play();
    speed1 = 2;
    speed2 = -3;
    heroSpeed = 3;
    frames = 12;
    obstacles = [];
    gamingArea.start();
}

function letsPlayLevelThree() {
        $("#imageGame").hide();
        $("#imageGameOver").hide();
        $("#imageYouWin").hide();
        $("canvas").fadeIn();

    document.getElementById("backButtonGame").disabled = true;
    document.getElementById("buttonGameLevelOne").disabled = true;
    document.getElementById("buttonGameLevelTwo").disabled = true;
    document.getElementById("buttonGameLevelThree").disabled = true;
    document.getElementById("buttonGameLevelFour").disabled = true;
    document.getElementById("buttonGameLevelOne").style.opacity = "0.65";
    document.getElementById("buttonGameLevelTwo").style.opacity = "0.65";
    document.getElementById("buttonGameLevelThree").style.opacity = "0.65";
    document.getElementById("buttonGameLevelFour").style.opacity = "0.65";
    document.getElementById("backButtonGame").style.opacity = "0.65";

    gameHero = new component(50, 52, "style/hero.png", 10, 160, "image");
    score = new component("30px", "Consolas", "black", 480, 40, "text");
    background = new component(650, 350, "style/background.jpg", 0, 0, "image");
    crashSound = new sound("style/sound1.mp3");
    backgroundMusic = new sound("style/game.mp3");
    youWinSound = new sound("style/youWin.mp3");

    backgroundMusic.play();
    speed1 = 4;
    speed2 = -4;
    heroSpeed = 4;
    frames = 17;
    obstacles = [];
    gamingArea.start();
}

function letsPlayLevelFour() {
        $("#imageGame").hide();
        $("#imageGameOver").hide();
        $("#imageYouWin").hide();
        $("canvas").fadeIn();

    document.getElementById("backButtonGame").disabled = true;
    document.getElementById("buttonGameLevelOne").disabled = true;
    document.getElementById("buttonGameLevelTwo").disabled = true;
    document.getElementById("buttonGameLevelThree").disabled = true;
    document.getElementById("buttonGameLevelFour").disabled = true;
    document.getElementById("buttonGameLevelOne").style.opacity = "0.65";
    document.getElementById("buttonGameLevelTwo").style.opacity = "0.65";
    document.getElementById("buttonGameLevelThree").style.opacity = "0.65";
    document.getElementById("buttonGameLevelFour").style.opacity = "0.65";
    document.getElementById("backButtonGame").style.opacity = "0.65";

    gameHero = new component(50, 52, "style/hero.png", 10, 160, "image");
    score = new component("30px", "Consolas", "black", 480, 40, "text");
    background = new component(650, 350, "style/background.jpg", 0, 0, "image");
    crashSound = new sound("style/sound1.mp3");
    backgroundMusic = new sound("style/game.mp3");
    youWinSound = new sound("style/youWin.mp3");

    backgroundMusic.play();
    speed1 = 4;
    speed2 = -5;
    heroSpeed = 4.5;
    frames = 12;
    obstacles = [];
    gamingArea.start();
}


var gamingArea = {
    canvas: document.createElement("canvas"),
    start: function () {
        this.canvas.width = 650;
        this.canvas.height = 350;
        this.context = this.canvas.getContext("2d");

        document.getElementById("gameLevels").insertBefore(this.canvas, document.getElementById("gameLevels").childNodes[10]);

        this.frameNo = 0; //Свойство за броене на фреймове
        this.interval = setInterval(updateGameArea, frames);//Извиква функцията updateGameArea() на всеки 'frames' на брой милисекунди

        window.addEventListener('keydown', function (e) {
            gamingArea.keys = (gamingArea.keys || []);
            gamingArea.keys[e.keyCode] = true;

        })
        window.addEventListener('keyup', function (e) {
            gamingArea.keys[e.keyCode] = false;

        })

    },
    clear: function () {//Функция за изчистване на канваса
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop: function () {//Изчиства интервала
        clearInterval(this.interval);//---------------------Когато се блъснеш-------------------
            $("canvas").hide();

    }
}

function component(width, height, color, x, y, type, newType) {//object constructor
    this.type = type;

    this.width = width;
    this.height = height;
    this.speedIndicatorX = 0;
    this.speedIndicatorY = 0;
    this.x = x;
    this.y = y;

    if (type == "image") {
        this.image = new Image();
        this.image.src = color;
    }

    this.update = function () {//Изчертаване на компонентите
        ctx = gamingArea.context;

        if (this.type == "text") {
            ctx.font = this.width + " " + this.height;
            ctx.fillStyle = "azure";
            ctx.fillText(this.text, this.x, this.y);
        }
        if (type == "image" || type == "background") {
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);

        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }

    }

    this.newPos = function () {//Променя позицията на компонента
        this.x += this.speedIndicatorX;
        this.y += this.speedIndicatorY;


    }

    this.ifCrash = function (otherObj) {//Метод, който проверява дали компонет се е сблъскал с друг компонент
        var left = this.x;
        var right = this.x + (this.width);
        var top = this.y;
        var bottom = this.y + (this.height);
        var otherleft = otherObj.x;
        var otherright = otherObj.x + (otherObj.width);
        var othertop = otherObj.y;
        var otherbottom = otherObj.y + (otherObj.height);
        var crash = true;
        if ((bottom < othertop) || (top > otherbottom) || (right < otherleft) || (left > otherright)) {
            crash = false;
        }
        return crash;

    }

}

function updateGameArea() {
    var x, height, gap, minHeight, maxHeight, minGap, maxGap;
    for (i = 0; i < obstacles.length; i += 1) {
        if (gameHero.ifCrash(obstacles[i])) {
            crashSound.play();
            backgroundMusic.stop();
            gamingArea.stop();
            $("#imageGameOver").show();
            document.getElementById("backButtonGame").disabled = false;
            document.getElementById("buttonGameLevelOne").disabled = false;
            document.getElementById("buttonGameLevelTwo").disabled = false;
            document.getElementById("buttonGameLevelThree").disabled = false;
            document.getElementById("buttonGameLevelFour").disabled = false;
            document.getElementById("buttonGameLevelOne").style.opacity = "1";
            document.getElementById("buttonGameLevelTwo").style.opacity = "1";
            document.getElementById("buttonGameLevelThree").style.opacity = "1";
            document.getElementById("buttonGameLevelFour").style.opacity = "1";
            document.getElementById("backButtonGame").style.opacity = "1";

            return;
        }
    }
    gamingArea.clear();

    background.newPos();
    background.update();

    gameHero.speedIndicatorX = 0;
    gameHero.speedIndicatorY = 0;
    if (gamingArea.keys && gamingArea.keys[37]) { gameHero.speedIndicatorX = -heroSpeed; }
    if (gamingArea.keys && gamingArea.keys[39]) { gameHero.speedIndicatorX = heroSpeed; }
    if (gamingArea.keys && gamingArea.keys[38]) { gameHero.speedIndicatorY = -heroSpeed; }
    if (gamingArea.keys && gamingArea.keys[40]) { gameHero.speedIndicatorY = heroSpeed; }

    background.newPos();
    background.update();

    gamingArea.frameNo += speed1;
    if (gamingArea.frameNo == 1 || inEveryInterval(200)) {
        x = gamingArea.canvas.width;
        minHeight = 20;
        maxHeight = 200;
        height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);
        minGap = 75;
        maxGap = 200;
        gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
        obstacles.push(new component(20, height, "style/rocket.png", x, 0, "image"));
        obstacles.push(new component(20, x - height - gap, "style/rocket.png", x, height + gap, "image"));
    }
    for (i = 0; i < obstacles.length; i += 1) {
        obstacles[i].x += speed2;
        obstacles[i].update();

    }
    score.text = "SCORE:" + gamingArea.frameNo; score.update();
    gameHero.newPos();
    gameHero.update();

    if (gamingArea.frameNo == 4000) {//Когато score=4000 печелиш играта
        clearInterval(this.interval);
        gamingArea.stop();
        backgroundMusic.stop();
        youWinSound.play();
            $("canvas").hide();
            $("#imageYouWin").show();

        document.getElementById("backButtonGame").disabled = false;
        document.getElementById("buttonGameLevelOne").disabled = false;
        document.getElementById("buttonGameLevelTwo").disabled = false;
        document.getElementById("buttonGameLevelThree").disabled = false;
        document.getElementById("buttonGameLevelFour").disabled = false;
        document.getElementById("buttonGameLevelOne").style.opacity = "1";
        document.getElementById("buttonGameLevelTwo").style.opacity = "1";
        document.getElementById("buttonGameLevelThree").style.opacity = "1";
        document.getElementById("buttonGameLevelFour").style.opacity = "1";
        document.getElementById("backButtonGame").style.opacity = "1";

    }

}

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function () {
        this.sound.play();
    }
    this.stop = function () {
        this.sound.pause();
    }
}

function inEveryInterval(n) {
    if ((gamingArea.frameNo / n) % 1 == 0) { return true; }//ако номерът на фрейма съответства на дадения интервал
    return false;
}
/*------------КРАЙ-НА-ИГРАТА------------*/

/*------------ГАЛЕРИЯ------------------*/
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
        $("#imagesForGallery1").hide();
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}
/*---------------------КРАЙ-НА-ГАЛЕРИЯТА------------------*/
audio.src = "style/site_background.mp3";
function mute() {
    audio.muted = true;
}
function unMute() {
    audio.muted = false;
}
