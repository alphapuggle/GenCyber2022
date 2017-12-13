
var currentversion = "v3.5"
var redirectlocation = ""
var windowlocation = ""
var pdurl1 = "https://classroom.google.com/u/0/c/" + getCookie('period1');
var pdurl2 = "https://classroom.google.com/u/0/c/" + getCookie('period2');
var pdurl3 = "https://classroom.google.com/u/0/c/" + getCookie('period3');
var pdurl4 = "https://classroom.google.com/u/0/c/" + getCookie('period4');
var pdurl5 = "https://classroom.google.com/u/0/c/" + getCookie('period5');
var pdurl6 = "https://classroom.google.com/u/0/c/" + getCookie('period6');
var pdurl7 = "https://classroom.google.com/u/0/c/" + getCookie('period7');
var pdurl8 = "https://classroom.google.com/u/0/c/" + getCookie('period8');
var pdurl9 = "https://classroom.google.com/u/0/c/" + getCookie('period9');
var pdurl10 = "https://classroom.google.com/u/0/c/" + getCookie('period10');
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function firstrunFunction() {
    document.getElementById('pd1').value = getCookie("period1")
    document.getElementById('pd2').value = getCookie("period2")
    document.getElementById('pd3').value = getCookie("period3")
    document.getElementById('pd4').value = getCookie("period4")
    document.getElementById('pd5').value = getCookie("period5")
    document.getElementById('pd6').value = getCookie("period6")
    document.getElementById('pd7').value = getCookie("period7")
    document.getElementById('pd8').value = getCookie("period8")
    document.getElementById('pd9').value = getCookie("period9")
    document.getElementById('pd10').value = getCookie("period10")
    document.getElementById('Pdls').className = "firstrun";
}
function firstrunFunction2() {
    var pdv1 = document.getElementById('pd1').value
    var pdv2 = document.getElementById('pd2').value
    var pdv3 = document.getElementById('pd3').value
    var pdv4 = document.getElementById('pd4').value
    var pdv5 = document.getElementById('pd5').value
    var pdv6 = document.getElementById('pd6').value
    var pdv7 = document.getElementById('pd7').value
    var pdv8 = document.getElementById('pd8').value
    var pdv9 = document.getElementById('pd9').value
    var pdv10 = document.getElementById('pd10').value
    document.cookie = "firstrun=" + currentversion + "; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    document.cookie = "period1=" + pdv1 + "; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    document.cookie = "period2=" + pdv2 + "; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    document.cookie = "period3=" + pdv3 + "; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    document.cookie = "period4=" + pdv4 + "; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    document.cookie = "period5=" + pdv5 + "; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    document.cookie = "period6=" + pdv6 + "; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    document.cookie = "period7=" + pdv7 + "; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    document.cookie = "period8=" + pdv8 + "; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    document.cookie = "period9=" + pdv9 + "; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    document.cookie = "period10=" + pdv10 + "; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    if (document.getElementById('period1typescience').checked == true) {
        document.cookie = "period1type=science; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    } else if (document.getElementById('period1typemath').checked == true) {
        document.cookie = "period1type=math; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";

    } else if (document.getElementById('period1typeother').checked == true) {
        document.cookie = "period1type=other; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    } else if (document.getElementById('period1typecustom').checked == true) {
        document.cookie = "period1type=" + document.getElementById('period1customurl').value + "; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    }
    if (document.getElementById('period2typemath').checked == true) {
        document.cookie = "period2type=math; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    } else if (document.getElementById('period2typescience').checked == true) {
        document.cookie = "period2type=science; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";

    } else if (document.getElementById('period2typeother').checked == true) {
        document.cookie = "period2type=other; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    } else if (document.getElementById('period2typecustom').checked == true) {
        document.cookie = "period2type=" + document.getElementById('period2customurl').value + "; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    }
    if (document.getElementById('period3typemath').checked == true) {
        document.cookie = "period3type=math; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    } else if (document.getElementById('period3typescience').checked == true) {
        document.cookie = "period3type=science; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";

    } else if (document.getElementById('period3typeother').checked == true) {
        document.cookie = "period3type=other; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    } else if (document.getElementById('period3typecustom').checked == true) {
        document.cookie = "period3type=" + document.getElementById('period3customurl').value + "; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    }
    if (document.getElementById('period4typemath').checked == true) {
        document.cookie = "period4type=math; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    } else if (document.getElementById('period4typescience').checked == true) {
        document.cookie = "period4type=science; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";

    } else if (document.getElementById('period4typeother').checked == true) {
        document.cookie = "period4type=other; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    } else if (document.getElementById('period4typecustom').checked == true) {
        document.cookie = "period4type=" + document.getElementById('period4customurl').value + "; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    }
    if (document.getElementById('period5typemath').checked == true) {
        document.cookie = "period5type=math; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    } else if (document.getElementById('period5typescience').checked == true) {
        document.cookie = "period5type=science; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";

    } else if (document.getElementById('period5typeother').checked == true) {
        document.cookie = "period5type=other; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    } else if (document.getElementById('period5typecustom').checked == true) {
        document.cookie = "period5type=" + document.getElementById('period5customurl').value + "; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    }
    if (document.getElementById('period6typemath').checked == true) {
        document.cookie = "period6type=math; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    } else if (document.getElementById('period6typescience').checked == true) {
        document.cookie = "period6type=science; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";

    } else if (document.getElementById('period6typeother').checked == true) {
        document.cookie = "period6type=other; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    } else if (document.getElementById('period6typecustom').checked == true) {
        document.cookie = "period6type=" + document.getElementById('period6customurl').value + "; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    }
    if (document.getElementById('period7typemath').checked == true) {
        document.cookie = "period7type=math; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    } else if (document.getElementById('period7typescience').checked == true) {
        document.cookie = "period7type=science; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";

    } else if (document.getElementById('period7typeother').checked == true) {
        document.cookie = "period7type=other; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    } else if (document.getElementById('period7typecustom').checked == true) {
        document.cookie = "period7type=" + document.getElementById('period7customurl').value + "; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    }
    if (document.getElementById('period8typemath').checked == true) {
        document.cookie = "period8type=math; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    } else if (document.getElementById('period8typescience').checked == true) {
        document.cookie = "period8type=science; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";

    } else if (document.getElementById('period8typeother').checked == true) {
        document.cookie = "period8type=other; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    } else if (document.getElementById('period8typecustom').checked == true) {
        document.cookie = "period8type=" + document.getElementById('period8customurl').value + "; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    }
    if (document.getElementById('period9typemath').checked == true) {
        document.cookie = "period9type=math; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    } else if (document.getElementById('period9typescience').checked == true) {
        document.cookie = "period9type=science; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";

    } else if (document.getElementById('period9typeother').checked == true) {
        document.cookie = "period9type=other; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    } else if (document.getElementById('period9typecustom').checked == true) {
        document.cookie = "period9type=" + document.getElementById('period9customurl').value + "; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    }
    if (document.getElementById('period10typemath').checked == true) {
        document.cookie = "period10type=math; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    } else if (document.getElementById('period10typescience').checked == true) {
        document.cookie = "period10type=science; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";

    } else if (document.getElementById('period10typeother').checked == true) {
        document.cookie = "period10type=other; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    } else if (document.getElementById('period10typecustom').checked == true) {
        document.cookie = "period10type=" + document.getElementById('period10customurl').value + "; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
    }
    location.reload()
}
function period1() {
    if (getCookie('period1type') == 'other') {
        redirectlocation = pdurl1
    } else if (getCookie('period1type') == 'math') {
        redirectlocation = pdurl1
        windowlocation = 'https://www.pearsonsuccessnet.com/'
        return visibility();
    } else if (getCookie('period1type') == 'science') {
        redirectlocation = pdurl1
        windowlocation = 'https://my.hrw.com/'
        return visibility();
    } else if (getCookie('period1type') != '') {
        redirectlocation = getCookie('period1type')
    } else {
        redirectlocation = ""
    }
}
function period2() {
    if (getCookie('period2type') == 'other') {
        redirectlocation = pdurl2
    } else if (getCookie('period2type') == 'math') {
        redirectlocation = pdurl2
        windowlocation = 'https://www.pearsonsuccessnet.com/'
        return visibility();
    } else if (getCookie('period2type') == 'science') {
        redirectlocation = pdurl2
        windowlocation = 'https://my.hrw.com/'
        return visibility();
    } else if (getCookie('period2type') != '') {
        redirectlocation = getCookie('period2type')
    } else {
        redirectlocation = ""
    }
}
function period3() {
    if (getCookie('period3type') == 'other') {
        redirectlocation = pdurl3
    } else if (getCookie('period3type') == 'math') {
        redirectlocation = pdurl3
        windowlocation = 'https://www.pearsonsuccessnet.com/'
        return visibility();
    } else if (getCookie('period3type') == 'science') {
        redirectlocation = pdurl3
        windowlocation = 'https://my.hrw.com/'
        return visibility();
    } else if (getCookie('period3type') != '')  {
        redirectlocation = getCookie('period3type')
    } else {
        redirectlocation = ""
    }
}
function period4() {
    if (getCookie('period4type') == 'other') {
        redirectlocation = pdurl4
    } else if (getCookie('period4type') == 'math') {
        redirectlocation = pdurl4
        windowlocation = 'https://www.pearsonsuccessnet.com/'
        return visibility();
    } else if (getCookie('period4type') == 'science') {
        redirectlocation = pdurl4
        windowlocation = 'https://my.hrw.com/'
        return visibility();
    } else if (getCookie('period4type') != '') {
        redirectlocation = getCookie('period4type')
    } else {
        redirectlocation = ""
    }
}
function period5() {
    if (getCookie('period5type') == 'other') {
        redirectlocation = pdurl5
    } else if (getCookie('period5type') == 'math') {
        redirectlocation = pdurl5
        windowlocation = 'https://www.pearsonsuccessnet.com/'
        return visibility();
    } else if (getCookie('period5type') == 'science') {
        redirectlocation = pdurl5
        windowlocation = 'https://my.hrw.com/'
        return visibility();
    } else if (getCookie('period5type') != '') {
        redirectlocation = getCookie('period5type')
    } else {
        redirectlocation = ""
    }
}
function period6() {
    if (getCookie('period6type') == 'other') {
        redirectlocation = pdurl6
    } else if (getCookie('period6type') == 'math') {
        redirectlocation = pdurl6
        windowlocation = 'https://www.pearsonsuccessnet.com/'
        return visibility();
    } else if (getCookie('period6type') == 'science') {
        redirectlocation = pdurl6
        windowlocation = 'https://my.hrw.com/'
        return visibility();
    } else if (getCookie('period6type') != '') {
        redirectlocation = getCookie('period6type')
    } else {
        redirectlocation = ""
    }
}
function period7() {
    if (getCookie('period7type') == 'other') {
        redirectlocation = pdurl7
    } else if (getCookie('period7type') == 'math') {
        redirectlocation = pdurl7
        windowlocation = 'https://www.pearsonsuccessnet.com/'
        return visibility();
    } else if (getCookie('period7type') == 'science') {
        redirectlocation = pdurl7
        windowlocation = 'https://my.hrw.com/'
        return visibility();
    } else if (getCookie('period7type') != '') {
        redirectlocation = getCookie('period7type')
    } else {
        redirectlocation = ""
    }
}
function period8() {
    if (getCookie('period8type') == 'other') {
        redirectlocation = pdurl8
    } else if (getCookie('period8type') == 'math') {
        redirectlocation = pdurl8
        windowlocation = 'https://www.pearsonsuccessnet.com/'
        return visibility();
    } else if (getCookie('period8type') == 'science') {
        redirectlocation = pdurl8
        windowlocation = 'https://my.hrw.com/'
        return visibility();
    } else if (getCookie('period8type') != '') {
        redirectlocation = getCookie('period8type')
    } else {
        redirectlocation = ""
    }
}
function period9() {
    if (getCookie('period9type') == 'other') {
        redirectlocation = pdurl9
    } else if (getCookie('period9type') == 'math') {
        redirectlocation = pdurl9
        windowlocation = 'https://www.pearsonsuccessnet.com/'
        return visibility();
    } else if (getCookie('period9type') == 'science') {
        redirectlocation = pdurl9
        windowlocation = 'https://my.hrw.com/'
        return visibility();
    } else if (getCookie('period9type') != '') {
        redirectlocation = getCookie('period9type')
    } else {
        redirectlocation = ""
    }
}
function period10() {
    if (getCookie('period10type') == 'other') {
        redirectlocation = pdurl10
    } else if (getCookie('period10type') == 'math') {
        redirectlocation = pdurl10
        windowlocation = 'https://www.pearsonsuccessnet.com/'
        return visibility();
    } else if (getCookie('period10type') == 'science') {
        redirectlocation = pdurl10
        windowlocation = 'https://my.hrw.com/'
        return visibility();
    } else if (getCookie('period10type') != '') {
        redirectlocation = getCookie('period10type')
    } else {
        redirectlocation = ""
    }
}
function visibility() {
    document.getElementById('confirmation').style.visibility = "visible";
    if (redirectlocation == "https://classroom.google.com/u/0/c/" || redirectlocation == "") {
        document.getElementById("confirmationbutton").style.visibility = "hidden";
        document.getElementById("confirmation").innerHTML = "No code was specified for this period. If this is incorrect, rewrite it at cookiewriter";
    }
}
function confirmRedirect() {
    if (windowlocation != "") {
        window.open(windowlocation);
        window.location.assign(redirectlocation);
    } else {
        window.location.assign(redirectlocation);
    }
}
function classroomLoad() {
    document.getElementById('Status').innerHTML = ""
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    if (h == "7") {
        if (m >= 30) {
           return period1();
        }
    } else if (h == 8) {
        if (m <= 13) {
            return period1();
        } else if (m >= 14) {
            if (m <= 56) {
                return period2();
            } else {
                return period3();
            }
        }
    } else if (h == 9) {
        if (m <= 37) {
            return period3();
        } else if (m >= 38) {
            return period4();
        }
    } else if (h == 10) {
        if (m <= 22) {
            return period4();
        } else {
            return period5();
        }
    } else if (h == 11) {
        if (m <= 4) {
            return period5();
        } else if (m >= 5) {
            if (m <= 47) {
                return period6();
            }
        } else if (m >= 48) {
            return period7();
        }
    } else if (h == 12) {
        if (m <= 31) {
            return period7();
        } else if (m >= 32) {
        }
    } else if (h == 13) {
        if (m <= 14) {
            return period8();
        } else if (m >= 15) {
            return period9();
        }
    } else if (h == 14) {
        if (m <= 34) {
            return period10();
        } else {
            alert("Classes are done for the day. Please try again tomorrow.");
            document.getElementById('Status').innerHTML = "";
        }
    } else {
        alert("Classes are done for the day. Please try again tomorrow.");
        document.getElementById('Status').innerHTML = "";
    }
}
