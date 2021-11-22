let turn = 0;
let playera = 0;
let playerb = 0;
let win = 0;
let circle;
let sq;
let box1 = 0;
let box2 = 0;
let box3 = 0;
let box4 = 0;
let box5 = 0;
let box6 = 0;
let box7 = 0;
let box8 = 0;
let box9 = 0;

playera = localStorage.getItem('playera');
playerb = localStorage.getItem('playerb');
document.getElementById("playa").innerText = playera;
document.getElementById("playb").innerText = playerb;

function boox1() {
    if (box1 == 0) {
        if (turn == 0) {
            sq = document.getElementById('sq1');
            sq.style.display = "none";
            circle = document.getElementById('circle1');
            circle.style.display = "block";
            turn = 1;
            box1 = 1;
        } else {
            circle = document.getElementById('circle1');
            circle.style.display = "none";
            sq = document.getElementById('sq1');
            sq.style.display = "block";
            turn = 0;
            box1 = 2;
        } check();
    }
}

function boox2() {
    if (box2 == 0) {
        if (turn == 0) {
            sq = document.getElementById('sq2');
            sq.style.display = "none";
            circle = document.getElementById('circle2');
            circle.style.display = "block";
            turn = 1;
            box2 = 1;
        } else {
            circle = document.getElementById('circle2');
            circle.style.display = "none";
            sq = document.getElementById('sq2');
            sq.style.display = "block";
            turn = 0;
            box2 = 2;

        } check()
    }
}
function boox3() {
    if (box3 == 0) {
        if (turn == 0) {
            sq = document.getElementById('sq3');
            sq.style.display = "none";
            circle = document.getElementById('circle3');
            circle.style.display = "block";
            turn = 1;
            box3 = 1;
        } else {
            circle = document.getElementById('circle3');
            circle.style.display = "none";
            sq = document.getElementById('sq3');
            sq.style.display = "block";
            turn = 0; box3 = 2;

        }
        check();
    }
}
function boox4() {
    if (box4 == 0) {
        if (turn == 0) {
            sq = document.getElementById('sq4');
            sq.style.display = "none";
            circle = document.getElementById('circle4');
            circle.style.display = "block";
            turn = 1;
            box4 = 1;
        } else {
            circle = document.getElementById('circle4');
            circle.style.display = "none";
            sq = document.getElementById('sq4');
            sq.style.display = "block";
            turn = 0;
            box4 = 2;

        } check()
    }
}
function boox5() {
    if (box5 == 0) {
        if (turn == 0) {
            sq = document.getElementById('sq5');
            sq.style.display = "none";
            circle = document.getElementById('circle5');
            circle.style.display = "block";
            turn = 1;
            box5 = 1;
        } else {
            circle = document.getElementById('circle5');
            circle.style.display = "none";
            sq = document.getElementById('sq5');
            sq.style.display = "block";
            turn = 0;
            box5 = 2;
        } check()
    }
}
function boox6() {
    if (box6 == 0) {
        if (turn == 0) {
            sq = document.getElementById('sq6');
            sq.style.display = "none";
            circle = document.getElementById('circle6');
            circle.style.display = "block";
            turn = 1;
            box6 = 1;
        } else {
            circle = document.getElementById('circle6');
            circle.style.display = "none";
            sq = document.getElementById('sq6');
            sq.style.display = "block";
            turn = 0;
            box6 = 2;
        } check()
    }
}
function boox7() {
    if (box7 == 0) {
        if (turn == 0) {
            sq = document.getElementById('sq7');
            sq.style.display = "none";
            circle = document.getElementById('circle7');
            circle.style.display = "block";
            turn = 1;
            box7 = 1;
        } else {
            circle = document.getElementById('circle7');
            circle.style.display = "none";
            sq = document.getElementById('sq7');
            sq.style.display = "block";
            turn = 0;
            box7 = 2;
        } check()
    }
}
function boox8() {
    if (box8 == 0) {
        if (turn == 0) {
            sq = document.getElementById('sq8');
            sq.style.display = "none";
            circle = document.getElementById('circle8');
            circle.style.display = "block";
            turn = 1;
            box8 = 1;
        } else {
            circle = document.getElementById('circle8');
            circle.style.display = "none";
            sq = document.getElementById('sq8');
            sq.style.display = "block";
            turn = 0;
            box8 = 2;
        } check()
    }
}
function boox9() {
    if (box9 == 0) {
        if (turn == 0) {
            sq = document.getElementById('sq9');
            sq.style.display = "none";
            circle = document.getElementById('circle9');
            circle.style.display = "block";
            turn = 1;
            box9 = 1;
        } else {
            circle = document.getElementById('circle9');
            circle.style.display = "none";
            sq = document.getElementById('sq9');
            sq.style.display = "block";
            turn = 0;
            box9 = 2;
        } check()
    }
}
function check() {
    if (box1 != 0) {
        if (win == 0) {
            if (box1 == box2 && box2 == box3) {
                document.getElementById('box1').style.borderColor = "red";
                document.getElementById('box2').style.borderColor = "red";
                document.getElementById('box3').style.borderColor = "red";
                scorecheck();
            }
            if (box1 == box4 && box4 == box7) {
                document.getElementById('box1').style.borderColor = "red";
                document.getElementById('box4').style.borderColor = "red";
                document.getElementById('box7').style.borderColor = "red";
                scorecheck();
            }
            if (box1 == box5 && box5 == box9) {
                document.getElementById('box1').style.borderColor = "red";
                document.getElementById('box5').style.borderColor = "red";
                document.getElementById('box9').style.borderColor = "red";
                scorecheck();
            }

        }
    }
    if (box2 != 0) {
        if (win == 0) {

            if (box2 == box5 && box5 == box8) {
                document.getElementById('box2').style.borderColor = "red";
                document.getElementById('box5').style.borderColor = "red";
                document.getElementById('box8').style.borderColor = "red";
                scorecheck();
            } if (box1 == box2 && box2 == box3) {
                document.getElementById('box1').style.borderColor = "red";
                document.getElementById('box2').style.borderColor = "red";
                document.getElementById('box3').style.borderColor = "red";

                scorecheck();
            }
        }
    }

    if (box3 != 0) {
        if (win == 0) {

            if (box1 == box2 && box2 == box3) {
                document.getElementById('box1').style.borderColor = "red";

                document.getElementById('box2').style.borderColor = "red";
                document.getElementById('box3').style.borderColor = "red";
                scorecheck();
            }
            if (box3 == box6 && box6 == box9) {
                document.getElementById('box3').style.borderColor = "red";
                document.getElementById('box6').style.borderColor = "red";
                document.getElementById('box9').style.borderColor = "red";
                scorecheck();
            }
            if (box3 == box5 && box5 == box7) {
                document.getElementById('box3').style.borderColor = "red";
                document.getElementById('box5').style.borderColor = "red";
                document.getElementById('box7').style.borderColor = "red";
                scorecheck();
            }
        }
    }


    if (box4 != 0) {
        if (win == 0) {

            if (box4 == box5 && box5 == box6) {
                document.getElementById('box4').style.borderColor = "red";
                document.getElementById('box5').style.borderColor = "red";
                document.getElementById('box6').style.borderColor = "red";
                scorecheck();
            }
            if (box1 == box4 && box4 == box7) {
                document.getElementById('box1').style.borderColor = "red";
                document.getElementById('box4').style.borderColor = "red";
                document.getElementById('box7').style.borderColor = "red";

                scorecheck();
            }
        }
    }
    if (box5 != 0) {
        if (win == 0) {

            if (box4 == box5 && box5 == box6) {
                document.getElementById('box4').style.borderColor = "red";
                document.getElementById('box5').style.borderColor = "red";
                document.getElementById('box6').style.borderColor = "red";
                scorecheck();
            }

            if (box2 == box5 && box5 == box8) {
                document.getElementById('box2').style.borderColor = "red";
                document.getElementById('box5').style.borderColor = "red";
                document.getElementById('box8').style.borderColor = "red";
                scorecheck();
            }
            if (box3 == box5 && box5 == box7) {
                document.getElementById('box3').style.borderColor = "red";
                document.getElementById('box5').style.borderColor = "red";
                document.getElementById('box7').style.borderColor = "red";
                scorecheck();
            }
        }

    }
    if (box6 != 0) {
        if (win == 0) {

            if (box4 == box5 && box5 == box6) {
                document.getElementById('box4').style.borderColor = "red";
                document.getElementById('box5').style.borderColor = "red";
                document.getElementById('box6').style.borderColor = "red";
                scorecheck();
            }
            if (box3 == box6 && box6 == box8) {
                document.getElementById('box3').style.borderColor = "red";
                document.getElementById('box6').style.borderColor = "red";
                document.getElementById('box8').style.borderColor = "red";
                scorecheck();
            }
        }
    }
    if (box7 != 0) {
        if (win == 0) {

            if (box3 == box5 && box5 == box7) {
                document.getElementById('box3').style.borderColor = "red";
                document.getElementById('box5').style.borderColor = "red";

                document.getElementById('box7').style.borderColor = "red";
                scorecheck();
            }
            if (box7 == box8 && box8 == box9) {
                document.getElementById('box7').style.borderColor = "red";
                document.getElementById('box8').style.borderColor = "red";
                document.getElementById('box9').style.borderColor = "red";
                scorecheck();
            }
            if (box1 == box4 && box4 == box7) {
                document.getElementById('box1').style.borderColor = "red";
                document.getElementById('box4').style.borderColor = "red";
                document.getElementById('box7').style.borderColor = "red";
                scorecheck();
            }
        }
    }


    if (box8 != 0) {
        if (win == 0) {

            if (box2 == box5 && box5 == box8) {
                document.getElementById('box2').style.borderColor = "red";
                document.getElementById('box5').style.borderColor = "red";
                document.getElementById('box8').style.borderColor = "red";
                scorecheck();
            }
            if (box7 == box8 && box8 == box9) {
                document.getElementById('box7').style.borderColor = "red";
                document.getElementById('box8').style.borderColor = "red";
                document.getElementById('box9').style.borderColor = "red";
                scorecheck();
            }
        }
    }

    if (box9 != 0) {
        if (win == 0) {

            if (box7 == box8 && box8 == box9) {
                document.getElementById('box7').style.borderColor = "red";

                document.getElementById('box8').style.borderColor = "red";
                document.getElementById('box9').style.borderColor = "red";
                scorecheck();
            }
            if (box3 == box6 && box6 == box9) {
                document.getElementById('box3').style.borderColor = "red";
                document.getElementById('box6').style.borderColor = "red";
                document.getElementById('box9').style.borderColor = "red";
                scorecheck();
            }
            if (box1 == box5 && box5 == box9) {
                document.getElementById('box1').style.borderColor = "red";
                document.getElementById('box5').style.borderColor = "red";
                document.getElementById('box9').style.borderColor = "red";
                scorecheck();
            }
        }
    }



    function scorecheck() {
        if (turn == 1) {
            playera++;
            win = 1;
            localStorage.setItem('playera', playera);
            document.getElementById("playa").innerText = playera;

        } else {
            playerb++;
            win = 1;
            localStorage.setItem('playerb', playerb);
            document.getElementById("playb").innerText = playerb;

        }
    }
}

function tryagain() {
    location.reload();

}
function resetgame() {
    localStorage.clear();
    location.reload();
}