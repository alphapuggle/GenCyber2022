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
}
function pageLoad() {
	if (getCookie('firstRun') == null || getCookie('firstRun') != "1") {
		for (var i = 1; i <= 10; i++){
			if (getCookie('period' + String(i)) != undefined) {
				document.getElementById("pd" + String(i) + "code").value = getCookie('period' + String(i));
			}
		}
	} else {
		getTime();
	}
}
function submitCookies() {
	document.cookie = "firstRun=1"
	for (var i = 1; i <= 10; i++){
		document.cookie = "period" + String(i) + "=" + document.getElementById("pd" + String(i) + "code").value;
	}
	window.location.reload();
}
function classroomNavigate() {
	window.location.assign(getCookie("redirect"));
}
function gotoClassroom(period) {
	document.cookie = "redirect=" + 'https://classroom.google.com/u/1/c/' + getCookie(period);
	document.getElementById('Cards').innerHTML = "<div class='card'><div class='card-body'><h4 class='card-title'>Go to Classroom</h4><input type='button' value ='Go!' onclick='return classroomNavigate();' class='btn btn-block btn-primary'><input type='button' value ='Reset' onclick='resetFirstrun()' class='btn btn-block btn-danger'></div></div>"
}
function resetFirstrun() {
	document.cookie = "firstRun="
	window.location.reload();
}
function getTime() {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    if (h == "7") {
        if (m >= 30) {
           return gotoClassroom('period1');
        }
    } else if (h == 8) {
        if (m <= 13) {
            return gotoClassroom('period1');
        } else if (m >= 14) {
            if (m <= 56) {
                return gotoClassroom('period2');
            } else {
                return gotoClassroom('period3');
            }
        }
    } else if (h == 9) {
        if (m <= 37) {
            return gotoClassroom('period3');
        } else if (m >= 38) {
            return gotoClassroom('period4');
        }
    } else if (h == 10) {
        if (m <= 22) {
            return gotoClassroom('period4');
        } else {
            return gotoClassroom('period5');
        }
    } else if (h == 11) {
        if (m <= 4) {
            return gotoClassroom('period5');
        } else if (m >= 5) {
            if (m <= 47) {
                return gotoClassroom('period6');
            }
        } else if (m >= 48) {
            return gotoClassroom('period7');
        }
    } else if (h == 12) {
        if (m <= 31) {
            return gotoClassroom('period7');
        } else if (m >= 32) {
            return gotoClassroom('period8');
        }
    } else if (h == 13) {
        if (m <= 14) {
            return gotoClassroom('period8');
        } else if (m >= 15) {
            return gotoClassroom('period9');
        }
    } else if (h == 14) {
        if (m <= 34) {
            return gotoClassroom('period10');
        } else {
            alert("Classes are done for the day. Please try again tomorrow.");
        }
    } else {
        alert("Classes are done for the day. Please try again tomorrow.");
    }
}
