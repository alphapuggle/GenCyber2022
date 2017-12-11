
function debugFunction() {
    document.getElementById('Status').innerHTML = pdurl1;
}

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
function pageDebug() {
    document.getElementById('Status').innerHTML = decodedCookie;
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
    document.cookie = "firstrun=v3.0; expires=Mon, 18 Jun 2018 12:00:00 GMT-0400 EDT;";
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
function pageLoad() {
    if (getCookie('firstrun') == "") {
        document.getElementById('Status').innerHTML = "Please complete the first run setup below."
        return firstrunFunction();
    } else if (getCookie('firstrun') != "") {
        if (getCookie('firstrun') != "3.0") {
            document.getElementById('Status').innerHTML = "TBC " + getCookie('firstrun') + " detected, please recomplete the form."
            return firstrunFunction();
        } else {
            return classroomLoad();
        }
    }
}
function classroomLoad() {
    document.getElementById('Status').innerHTML = ""
    var period1 = getCookie('period1');
    var period2 = getCookie('period2');
    var period3 = getCookie('period3');
    var period4 = getCookie('period4');
    var period5 = getCookie('period5');
    var period6 = getCookie('period6');
    var period7 = getCookie('period7');
    var period8 = getCookie('period8');
    var period9 = getCookie('period9');
    var period10 = getCookie('period10');
    var pdurl1 = "https://classroom.google.com/u/0/c/" + period1;
    var pdurl2 = "https://classroom.google.com/u/0/c/" + period2;
    var pdurl3 = "https://classroom.google.com/u/0/c/" + period3;
    var pdurl4 = "https://classroom.google.com/u/0/c/" + period4;
    var pdurl5 = "https://classroom.google.com/u/0/c/" + period5;
    var pdurl6 = "https://classroom.google.com/u/0/c/" + period6;
    var pdurl7 = "https://classroom.google.com/u/0/c/" + period7;
    var pdurl8 = "https://classroom.google.com/u/0/c/" + period8;
    var pdurl9 = "https://classroom.google.com/u/0/c/" + period9;
    var pdurl10 = "https://classroom.google.com/u/0/c/" + period10;
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    if (h == "7") {
        if (m >= 30) {
            if (getCookie('period1type') != 'math' || getCookie('period1type') != 'science' || getCookie('period1type') != 'other') {
                window.location.assign(pdurl1)
                if (getCookie('period1type') == 'math') {
                    window.open('https://www.pearsonsuccessnet.com/')
                } else if (getCookie('period1type') == 'science') {
                    window.open('https://my.hrw.com/')
                } else {
                    return false;
                }
            } else {
                window.location.assign(getCookie('period1type'))
            }
        }
    } else if (h == 8) {
        if (m <= 13) {
            if (getCookie('period1type') != 'math' || getCookie('period1type') != 'science' || getCookie('period1type') != 'other') {
                window.location.assign(pdurl1)
                if (getCookie('period1type') == 'math') {
                    window.open('https://www.pearsonsuccessnet.com/')
                } else if (getCookie('period1type') == 'science') {
                    window.open('https://my.hrw.com/')
                } else {
                    return false;
                }
            } else {
                window.location.assign(getCookie('period1type'))
            }
        } else if (m >= 14) {
            if (m <= 56) {
                if (getCookie('period2type') != 'math' || getCookie('period2type') != 'science' || getCookie('period2type') != 'other') {
                    window.location.assign(pdurl2)
                    if (getCookie('period2type') == 'math') {
                        window.open('https://www.pearsonsuccessnet.com/')
                    } else if (getCookie('period2type') == 'science') {
                        window.open('https://my.hrw.com/')
                    } else {
                        return false;
                    }
                } else {
                    window.location.assign(getCookie('period2type'))
                }
            } else {
                if (getCookie('period3type') != 'math' || getCookie('period3type') != 'science' || getCookie('period3type') != 'other') {
                    window.location.assign(pdurl3)
                    if (getCookie('period3type') == 'math') {
                        window.open('https://www.pearsonsuccessnet.com/')
                    } else if (getCookie('period3type') == 'science') {
                        window.open('https://my.hrw.com/')
                    } else {
                        return false;
                    }
                } else {
                    window.location.assign(getCookie('period3type'))
                }
            }
        }
    } else if (h == 9) {
        if (m <= 37) {
            if (getCookie('period3type') != 'math' || getCookie('period3type') != 'science' || getCookie('period3type') != 'other') {
                window.location.assign(pdurl3)
                if (getCookie('period3type') == 'math') {
                    window.open('https://www.pearsonsuccessnet.com/')
                } else if (getCookie('period3type') == 'science') {
                    window.open('https://my.hrw.com/')
                } else {
                    return false;
                }
            } else {
                window.location.assign(getCookie('period3type'))
            }
        } else if (m >= 38) {
            if (getCookie('period4type') != 'math' || getCookie('period4type') != 'science' || getCookie('period4type') != 'other') {
                window.location.assign(pdurl4)
                if (getCookie('period4type') == 'math') {
                    window.open('https://www.pearsonsuccessnet.com/')
                } else if (getCookie('period4type') == 'science') {
                    window.open('https://my.hrw.com/')
                } else {
                    return false;
                }
            } else {
                window.location.assign(getCookie('period4type'))
            }
        }
    } else if (h == 10) {
        if (m <= 22) {
            if (getCookie('period4type') != 'math' || getCookie('period4type') != 'science' || getCookie('period4type') != 'other') {
                window.location.assign(pdurl4)
                if (getCookie('period4type') == 'math') {
                    window.open('https://www.pearsonsuccessnet.com/')
                } else if (getCookie('period4type') == 'science') {
                    window.open('https://my.hrw.com/')
                } else {
                    return false;
                }
            } else {
                window.location.assign(getCookie('period4type'))
            }
        } else {
            if (getCookie('period5type') != 'math' || getCookie('period5type') != 'science' || getCookie('period5type') != 'other') {
                window.location.assign(pdurl1)
                if (getCookie('period5type') == 'math') {
                    window.open('https://www.pearsonsuccessnet.com/')
                } else if (getCookie('period5type') == 'science') {
                    window.open('https://my.hrw.com/')
                } else {
                    return false;
                }
            } else {
                window.location.assign(getCookie('period5type'))
            }
        }
    } else if (h == 11) {
        if (m <= 4) {
            if (getCookie('period5type') != 'math' || getCookie('period5type') != 'science' || getCookie('period5type') != 'other') {
                window.location.assign(pdurl5)
                if (getCookie('period5type') == 'math') {
                    window.open('https://www.pearsonsuccessnet.com/')
                } else if (getCookie('period5type') == 'science') {
                    window.open('https://my.hrw.com/')
                } else {
                    return false;
                }
            } else {
                window.location.assign(getCookie('period5type'))
            }
        } else if (m >= 5) {
            if (m <= 47) {
                if (getCookie('period6type') != 'math' || getCookie('period6type') != 'science' || getCookie('period6type') != 'other') {
                    window.location.assign(pdurl6)
                    if (getCookie('period6type') == 'math') {
                        window.open('https://www.pearsonsuccessnet.com/')
                    } else if (getCookie('period6type') == 'science') {
                        window.open('https://my.hrw.com/')
                    } else {
                        return false;
                    }
                } else {
                    window.location.assign(getCookie('period6type'))
                }
            }
        } else if (m >= 48) {
            if (getCookie('period7type') != 'math' || getCookie('period7type') != 'science' || getCookie('period7type') != 'other') {
                window.location.assign(pdurl7)
                if (getCookie('period7type') == 'math') {
                    window.open('https://www.pearsonsuccessnet.com/')
                } else if (getCookie('period7type') == 'science') {
                    window.open('https://my.hrw.com/')
                } else {
                    return false;
                }
            } else {
                window.location.assign(getCookie('period7type'))
            }
        }
    } else if (h == 12) {
        if (m <= 31) {
            if (getCookie('period7type') != 'math' || getCookie('period7type') != 'science' || getCookie('period7type') != 'other') {
                window.location.assign(pdurl7)
                if (getCookie('period7type') == 'math') {
                    window.open('https://www.pearsonsuccessnet.com/')
                } else if (getCookie('period7type') == 'science') {
                    window.open('https://my.hrw.com/')
                } else {
                    return false;
                }
            } else {
                window.location.assign(getCookie('period7type'))
            }
        } else if (m >= 32) {
            if (getCookie('period8type') != 'math' || getCookie('period8type') != 'science' || getCookie('period8type') != 'other') {
                window.location.assign(pdurl8)
                if (getCookie('period8type') == 'math') {
                    window.open('https://www.pearsonsuccessnet.com/')
                } else if (getCookie('period8type') == 'science') {
                    window.open('https://my.hrw.com/')
                } else {
                    return false;
                }
            } else {
                window.location.assign(getCookie('period8type'))
            }
        }
    } else if (h == 13) {
        if (m <= 14) {
            if (getCookie('period8type') != 'math' || getCookie('period8type') != 'science' || getCookie('period8type') != 'other') {
                window.location.assign(pdurl8)
                if (getCookie('period8type') == 'math') {
                    window.open('https://www.pearsonsuccessnet.com/')
                } else if (getCookie('period8type') == 'science') {
                    window.open('https://my.hrw.com/')
                } else {
                    return false;
                }
            } else {
                window.location.assign(getCookie('period8type'))
            }
        } else if (m >= 15) {
            if (getCookie('period9type') != 'math' || getCookie('period9type') != 'science' || getCookie('period9type') != 'other') {
                window.location.assign(pdurl9)
                if (getCookie('period9type') == 'math') {
                    window.open('https://www.pearsonsuccessnet.com/')
                } else if (getCookie('period9type') == 'science') {
                    window.open('https://my.hrw.com/')
                } else {
                    return false;
                }
            } else {
                window.location.assign(getCookie('period9type'))
            }
        }
    } else if (h == 14) {
        if (m <= 34) {
            if (getCookie('period10type') != 'math' || getCookie('period10type') != 'science' || getCookie('period10type') != 'other') {
                window.location.assign(pdurl10)
                if (getCookie('period10type') == 'math') {
                    window.open('https://www.pearsonsuccessnet.com/')
                } else if (getCookie('period10type') == 'science') {
                    window.open('https://my.hrw.com/')
                } else {
                    return false;
                }
            } else {
                window.location.assign(getCookie('period10type'))
            }
        } else {
            alert("Classes are done for the day. Please try again tomorrow.");
            document.getElementById('Status').innerHTML = "";
        }
    } else {
        alert("Classes are done for the day. Please try again tomorrow.");
        document.getElementById('Status').innerHTML = "";
    }
}

function scriptSuccess() {
    return pageTime();
    document.getElementById('Status').innerHTML = ""
}
