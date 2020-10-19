// JavaScript source code
var isListOpened = false;
var isSearchBoxOpened = false;
function showHideSearchList() {
    if (isListOpened == false) {
        document.getElementById("searchSuggestions").style.visibility = "visible";
        isListOpened = true;
    }
    else {
        document.getElementById("searchSuggestions").style.visibility = "hidden";
        isListOpened = false;
    }
}
function showHideSearchBox() {
    if (isSearchBoxOpened == false) {
        document.getElementById("searchInput").style.visibility = "visible";
        document.getElementById("searchSuggestions").style.visibility = "visible";
        document.getElementById("muteButtonsArea").style.visibility = "hidden";
        isSearchBoxOpened = true;
    }
    else {
        document.getElementById("searchInput").style.visibility = "hidden";
        document.getElementById("searchSuggestions").style.visibility = "hidden";
        document.getElementById("muteButtonsArea").style.visibility = "visible";
        isSearchBoxOpened = false;
    }
}
function hideSearchBox() {
    document.getElementById("searchInput").style.visibility = "hidden";
    document.getElementById("searchSuggestions").style.visibility = "hidden";
    document.getElementById("muteButtonsArea").style.visibility = "visible";
    isSearchBoxOpened = false;
}

function checkSuggestions() {
    var input, filter, myList, div, a, i;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    myList = document.getElementById("searchSuggestions");
    div = myList.getElementsByTagName("div");
    for (i = 0; i < div.length; i++) {
        a = div[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            div[i].style.display = "";
        } else {
            div[i].style.display = "none";

        }
    }
}
$(window).bind("scroll", function () {
    if ($(this).scrollTop() > 75) {
        $(".searchBar").fadeOut(500);
        $("#muteButtonsArea").fadeOut(500);
        hideSearchBox();
    } else {
        $(".searchBar").stop().fadeIn(500);
        $("#muteButtonsArea").fadeIn(500);
    }
});
if (localStorage.getItem("searchVariable", 0) == "undefined") {
    localStorage.setItem("searchVariable", 0);
}
function setFindMe(value) {
    localStorage.setItem("searchVariable", value);
}
function initialFindMe() {
    localStorage.setItem("searchVariable", 0);
}