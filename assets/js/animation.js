// Inisialisasi Variabel Form
var email = document.querySelector("#emailInput"),
    mySVG = document.querySelector(".svgContainer"),
    password = document.querySelector("#passwordInput"),
    togglePassword = document.querySelector(".toggle-password"),
    input = document.querySelector(togglePassword.getAttribute("toggle"));
    showPasswordCheck = document.querySelector("#showPasswordCheck");

// Inisialisasi Bariabel SVG
var badanLuar = document.querySelector(".badanLuar"),
    badanDalam = document.querySelector(".badanDalam"),
    badanLuarBiasa = document.querySelector(".badanLuarBiasa"),
    badanDalamBiasa = document.querySelector(".badanDalamBiasa"),
    badanLuarIntip = document.querySelector(".badanLuarIntip"),
    badanDalamIntip = document.querySelector(".badanDalamIntip"),
    tangan = document.querySelector(".tangan"),
    mataKiri = document.querySelector(".mataKiri"),
    mataKanan = document.querySelector(".mataKanan"),
    tgnKiriDalam = document.querySelector(".tgnKiriDalam"),
    tgnKiriLuar = document.querySelector(".tgnKiriLuar"),
    tgnKiriDalamKecil = document.querySelector(".tgnKiriDalamKecil"),
    tgnKiriLuarKecil = document.querySelector(".tgnKiriLuarKecil"),
    tgnKiriDalamBuka = document.querySelector(".tgnKiriDalamBuka"),
    tgnKiriLuarBuka = document.querySelector(".tgnKiriLuarBuka"),
    tgnKiriDalamIntip = document.querySelector(".tgnKiriDalamIntip"),
    tgnKiriLuarIntip = document.querySelector(".tgnKiriLuarIntip"),
    tgnKiriDalamTutupKecil = document.querySelector(".tgnKiriDalamTutupKecil"),
    tgnKiriLuarTutupKecil = document.querySelector(".tgnKiriLuarTutupKecil"),
    tgnKiriDalamTutupKecilBawah = document.querySelector(".tgnKiriDalamTutupKecilBawah"),
    tgnKiriLuarTutupKecilBawah = document.querySelector(".tgnKiriLuarTutupKecilBawah"),
    tgnKiriDalamTutupLurus = document.querySelector(".tgnKiriDalamTutupLurus"),
    tgnKiriLuarTutupLurus = document.querySelector(".tgnKiriLuarTutupLurus"),
    tgnKananDalam = document.querySelector(".tgnKananDalam"),
    tgnKananLuar = document.querySelector(".tgnKananLuar"),
    tgnKananDalamKecil = document.querySelector(".tgnKananDalamKecil"),
    tgnKananLuarKecil = document.querySelector(".tgnKananLuarKecil"),
    tgnKananDalamBuka = document.querySelector(".tgnKananDalamBuka"),
    tgnKananLuarBuka = document.querySelector(".tgnKananLuarBuka"),
    tgnKananDalamIntip = document.querySelector(".tgnKananDalamIntip"),
    tgnKananLuarIntip = document.querySelector(".tgnKananLuarIntip"),
    tgnKananDalamTutupKecil = document.querySelector(".tgnKananDalamTutupKecil"),
    tgnKananLuarTutupKecil = document.querySelector(".tgnKananLuarTutupKecil"),
    tgnKananDalamTutupKecilBawah = document.querySelector(".tgnKananDalamTutupKecilBawah"),
    tgnKananLuarTutupKecilBawah = document.querySelector(".tgnKananLuarTutupKecilBawah"),
    tgnKananDalamTutupLurus = document.querySelector(".tgnKananDalamTutupLurus"),
    tgnKananLuarTutupLurus = document.querySelector(".tgnKananLuarTutupLurus"),
    lidah = document.querySelector(".lidah"),
    taring = document.querySelector(".taring"),
    mulut = document.querySelector(".mulut"),
    bentukMulut = document.querySelector("#bentukMulut"),
    garisBibir = document.querySelector(".garisBibir"),
    mulutBulat = document.querySelector(".mulutBulat"),
    mulutKecil = document.querySelector(".mulutKecil"),
    mulutSedang = document.querySelector(".mulutSedang"),
    mulutBesar = document.querySelector(".mulutBesar"),
    mulutBiasa = document.querySelector(".mulutBiasa");


// Inisialisasi Status Awal
var statusMulut = "kecil",
    statusMata = true,
    eyesCovered = false,
    activeElement,
    pencet = false,
    speedPeek,
    speedHands=50,
    curEmailIndex,
    screenCenter,
    svgCoords,
    emailCoords,
    emailScrollMax,
    dFromC;

var mataKiriCoords,
    mataKananCoords,
    mulutCoords,
    mataKiriAngle,
    mataKiriX,
    mataKiriY,
    mataKananAngle,
    mataKananX,
    mataKananY,
    tanganAngle,
    tanganX,
    tanganY,
    mulutAngle,
    mulutX,
    mulutY,
    mulutR;

function initLoginForm() {
    svgCoords = getPosition(mySVG);
    emailCoords = getPosition(email);
    screenCenter = svgCoords.x + mySVG.offsetWidth / 2;
    mataKiriCoords = {
        x: svgCoords.x + 84,
        y: svgCoords.y + 76
    };
    mataKananCoords = {
        x: svgCoords.x + 113,
        y: svgCoords.y + 76
    };
    mulutCoords = {
        x: svgCoords.x + 100,
        y: svgCoords.y + 100
    };
    tanganCoords = {
        x: svgCoords.x + 100,
        y: svgCoords.y + 100
    };

    //Email Event Listener
    email.addEventListener("focus", onEmailFocus);
    email.addEventListener("blur", onEmailBlur);
    email.addEventListener("input", onEmailInput);

    // Password Event Listener
    password.addEventListener("focus", onPasswordFocus);
    password.addEventListener("blur", onPasswordBlur);

    //Toggle Password Event Listener
    togglePassword.addEventListener("click", onTogglePasswordClick);
    // togglePassword.addEventListener("mouseup", onPasswordToggleMouseUp);
    togglePassword.addEventListener("mousedown", onPasswordToggleMouseDown);

    //Check Password Listener
    showPasswordCheck.addEventListener("click", onPasswordToggleClick);
    showPasswordCheck.addEventListener("change", onPasswordToggleChange);

    //Actifkan Kedip
    startBlinking(5);

    // determine how far email input can go before scrolling occurs
    // will be used as the furthest point avatar will look to the right
    emailScrollMax = email.scrollWidth;

    // check if we're on mobile/tablet, if so then show password initially
    // if (isMobileDevice()) {
    //     password.type = "text";
    //     showPasswordCheck.checked = true;
    //     TweenMax.set(twoFingers, {
    //         transformOrigin: "bottom left",
    //         rotation: 30,
    //         x: -9,
    //         y: -2,
    //         ease: Power2.easeInOut
    //     });
    // }

    // clear the console
    console.clear();
}

initLoginForm();

function getPosition(el) {
    var xPos = 0;
    var yPos = 0;

    while (el) {
        if (el.tagName == "BODY") {
            // deal with browser quirks with body/window/document and page scroll
            var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
            var yScroll = el.scrollTop || document.documentElement.scrollTop;

            xPos += el.offsetLeft - xScroll + el.clientLeft;
            yPos += el.offsetTop - yScroll + el.clientTop;
        } else {
            // for all other non-BODY elements
            xPos += el.offsetLeft - el.scrollLeft + el.clientLeft;
            yPos += el.offsetTop - el.scrollTop + el.clientTop;
        }

        el = el.offsetParent;
    }
    //console.log("xPos: " + xPos + ", yPos: " + yPos);
    return {
        x: xPos,
        y: yPos
    };
}

function getAngle(x1, y1, x2, y2) {
    var angle = Math.atan2(y1 - y2, x1 - x2);
    return angle;
}

function calculateFaceMove(e) {
    var carPos = email.selectionEnd,
        div = document.createElement("div"),
        span = document.createElement("span"),
        copyStyle = getComputedStyle(email),
        caretCoords = {};
    if (carPos == null || carPos == 0) {
        // if browser doesn't support 'selectionEnd' property on input[type="email"], use 'value.length' property instead
        carPos = email.value.length;
    }
    [].forEach.call(copyStyle, function (prop) {
        div.style[prop] = copyStyle[prop];
    });
    div.style.position = "absolute";
    document.body.appendChild(div);
    div.textContent = email.value.substr(0, carPos);
    span.textContent = email.value.substr(carPos) || ".";
    div.appendChild(span);

    if (email.scrollWidth <= emailScrollMax) {
        caretCoords = getPosition(span);
        dFromC = screenCenter - (caretCoords.x + emailCoords.x);
        mataKiriAngle = getAngle(
            mataKiriCoords.x,
            mataKiriCoords.y,
            emailCoords.x + caretCoords.x,
            emailCoords.y + 25
        );
        mataKananAngle = getAngle(
            mataKananCoords.x,
            mataKananCoords.y,
            emailCoords.x + caretCoords.x,
            emailCoords.y + 25
        );
        mulutAngle = getAngle(
            mulutCoords.x,
            mulutCoords.y,
            emailCoords.x + caretCoords.x,
            emailCoords.y + 25
        );
        tanganAngle = getAngle(
            tanganCoords.x,
            tanganCoords.y,
            emailCoords.x + caretCoords.x,
            emailCoords.y + 25
        );
    } else {
        mataKiriAngle = getAngle(
            mataKiriCoords.x,
            mataKiriCoords.y,
            emailCoords.x + emailScrollMax,
            emailCoords.y + 25
        );
        mataKananAngle = getAngle(
            mataKananCoords.x,
            mataKananCoords.y,
            emailCoords.x + emailScrollMax,
            emailCoords.y + 25
        );
        mulutAngle = getAngle(
            mulutCoords.x,
            mulutCoords.y,
            emailCoords.x + emailScrollMax,
            emailCoords.y + 25
        );
        tanganAngle = getAngle(
            tanganCoords.x,
            tanganCoords.y,
            emailCoords.x + emailScrollMax,
            emailCoords.y + 25
        );
    }

    mataKiriX = Math.cos(mataKiriAngle) * 15;
    mataKiriY = Math.sin(mataKiriAngle) * 3;
    mataKananX = Math.cos(mataKananAngle) * 15;
    mataKananY = Math.sin(mataKananAngle) * 3;
    mulutX = Math.cos(mulutAngle) * 15;
    mulutY = Math.sin(mulutAngle) * 3;
    mulutR = Math.cos(mulutAngle) * 10;
    tanganX = Math.cos(tanganAngle) * 6;
    tanganY = Math.sin(tanganAngle) * 8;
    

    TweenMax.to(mataKiri, 1, {
        x: -mataKiriX,
        y: -mataKiriY,
        ease: Expo.easeOut
    });
    TweenMax.to(mataKanan, 1, {
        x: -mataKananX,
        y: -mataKananY,
        ease: Expo.easeOut
    });
    TweenMax.to(mulut, 1, {
        x: -mulutX,
        y: -mulutY,
        ease: Expo.easeOut
    });
    TweenMax.to(tangan, 1, {
        x: -tanganX,
        y: -tanganY,
        ease: Expo.easeOut
    });
    TweenMax.to(tgnKiriDalam, 1, {
        morphSVG: tgnKiriDalamKecil,
        ease: Expo.easeOut,
    });
    TweenMax.to(tgnKiriLuar, 1, {
        morphSVG: tgnKiriLuarKecil,
        ease: Expo.easeOut,
    });
    TweenMax.to(tgnKananDalam, 1, {
        morphSVG: tgnKananDalamKecil,
        ease: Expo.easeOut,
    });
    TweenMax.to(tgnKananLuar, 1, {
        morphSVG: tgnKananLuarKecil,
        ease: Expo.easeOut,
    });

    document.body.removeChild(div);
}

window.onblur = () => {
    password.blur();
};

function resetFace(e) {
    TweenMax.to([mulutBiasa,bentukMulut,garisBibir], 1, {
        ease: Expo.easeOut,
        x: 0,
        y: 0,
        morphSVG: mulutKecil,
    });
    TweenMax.to(mulut, 1, {
        ease: Expo.easeOut,
        x: 0,
        y: 0,
    });
    TweenMax.to(taring, 1, {
        x: 0,
        y: 0,
        ease: Expo.easeOut
    });
    TweenMax.to(lidah, 1, {
        x: 1,
        y: 1.4,
        ease: Expo.easeOut
    });
    TweenMax.to([mataKiri, mataKanan], 1, {
        scaleX: 1,
        scaleY: 1,
        x: 0,
        y: 0,
        ease: Expo.easeOut
    });
}

function resetHands(e) {
    TweenMax.to(tangan, 1, {
        x: 0,
        y: 0,
        ease: Expo.easeOut
    });
    TweenMax.to(tgnKiriDalam, 1, {
        morphSVG: tgnKiriDalamBuka,
        ease: Expo.easeOut,
    });
    TweenMax.to(tgnKiriLuar, 1, {
        morphSVG: tgnKiriLuarBuka,
        ease: Expo.easeOut,
    });
    TweenMax.to(tgnKananDalam, 1, {
        morphSVG: tgnKananDalamBuka,
        ease: Expo.easeOut,
    });
    TweenMax.to(tgnKananLuar, 1, {
        morphSVG: tgnKananLuarBuka,
        ease: Expo.easeOut,
    });
}

function resetBody(e) {
    TweenMax.to(badanLuar, 0.6, {
        y: 0,
        morphSVG: badanLuarBiasa,
        ease: Quad.easeOut,
    });
    TweenMax.to(badanDalam, 0.6, {
        y: 0,
        morphSVG: badanDalamBiasa,
        ease: Quad.easeOut,
    });
}

function onEmailInput(e) {
    calculateFaceMove(e);
    var value = email.value;
    curEmailIndex = value.length;

    // Scan form email untuk Ukuran Mulut
    if (curEmailIndex > 0) {
        if (statusMulut == "kecil") {
            statusMulut = "sedang";
            TweenMax.to([bentukMulut, garisBibir, mulutBiasa], 1, {
                morphSVG: mulutSedang,
                shapeIndex: 8,
                ease: Expo.easeOut
            });
            TweenMax.to(taring, 1, {
                x: -0.16,
                y: 4,
                ease: Expo.easeOut
            });
            TweenMax.to(lidah, 1, {
                x: 1.87,
                y: 3.41,
                ease: Expo.easeOut
            });
            TweenMax.to([mataKiri, mataKanan], 1, {
                scaleX: 0.85,
                scaleY: 0.85,
                ease: Expo.easeOut
            });
        }
        if (value.includes("@")) {
            statusMulut = "besar";
            TweenMax.to([bentukMulut, garisBibir, mulutBiasa], 1, {
                morphSVG: mulutBesar,
                ease: Expo.easeOut
            });
            TweenMax.to(taring, 1, {
                x: 0,
                y: 0,
                ease: Expo.easeOut
            });
            TweenMax.to(lidah, 1, {
                x: 0.4,
                y: 0,
                ease: Expo.easeOut
            });
            TweenMax.to([mataKiri, mataKanan], 1, {
                scaleX: 0.80,
                scaleY: 0.80,
                ease: Expo.easeOut,
                transformOrigin: "center center"
            });
        } else {
            statusMulut = "sedang";
            TweenMax.to([bentukMulut, garisBibir, mulutBiasa], 1, {
                morphSVG: mulutSedang,
                ease: Expo.easeOut
            });
            TweenMax.to(taring, 1, {
                x: -0.16,
                y: 4,
                ease: Expo.easeOut
            });
            TweenMax.to(lidah, 1, {
                x: 1.87,
                y: 3.41,
                ease: Expo.easeOut
            });
            TweenMax.to([mataKiri, mataKanan], 1, {
                scaleX: 0.85,
                scaleY: 0.85,
                ease: Expo.easeOut
            });
        }
    } else {
        statusMulut = "kecil";
        TweenMax.to([bentukMulut, garisBibir, mulutBiasa], 1, {
            morphSVG: mulutKecil,
            shapeIndex: 9,
            ease: Expo.easeOut
        });
        TweenMax.to(taring, 1, {
            x: 0,
            y: 0,
            ease: Expo.easeOut
        });
        TweenMax.to(lidah, 1, {
            y: 0,
            ease: Expo.easeOut
        });
        TweenMax.to([mataKiri, mataKanan], 1, {
            scaleX: 1,
            scaleY: 1,
            ease: Expo.easeOut
        });
    }
}

function onEmailFocus(e) {
    setTimeout(() => {
        onEmailInput();
    },speedHands);
}

function onEmailBlur(e) {
    resetFace();
    resetHands();
}

function onPasswordFocus(e) {
    activeElement = "password";
    speedPeek = 100;
    if (!eyesCovered) {
        speedPeek = 870;
        coverEyes();
    }
}

function onPasswordBlur(e) {
    activeElement = null;
    speedHands = 800;
    setTimeout(() => {
        if (activeElement == "password" || pencet == true) {} else {
            if (togglePassword.classList.includes = "fa-eye-slash") {
                togglePassword.classList.replace("fa-eye-slash", "fa-eye");
                resetFace();
                resetBody();
            }
            password.type = "password";
            showPasswordCheck.checked = false;
            uncoverEyes();
        }
        speedHands = 100;
    }, 100);
}

function onPasswordToggleChange(e) {
    // Jika Checkbox On Intip
    if (showPasswordCheck.checked) {
        password.type = "text";
        if (eyesCovered) {
            // coverEyes();
            setTimeout(function () {
                if (showPasswordCheck.checked) {
                    peek();
                }
                else { 
                    hide();
                }
            }, speedPeek);
        } else {
            peek();
        }
    
    // Jika Checkbox off tutup mata
    } else {
        password.type = "password";
        hide();
    }
}

function onPasswordToggleClick(e) {
    password.focus();
}

function onPasswordToggleMouseDown(e) {
    pencet = true;
    setTimeout(function () {
        pencet = false;
    }, 500);
}

function peek() {
    TweenMax.to(tgnKananDalam, 0.6, {
        ease: Quad.easeOut,
        morphSVG: tgnKananDalamIntip,
    });
    TweenMax.to(tgnKananLuar, 0.6, {
        morphSVG: tgnKananLuarIntip,
        ease: Quad.easeOut,
    });

    TweenMax.to(tgnKiriDalam, 0.6, {
        ease: Quad.easeOut,
        morphSVG: tgnKiriDalamIntip,
    });
    TweenMax.to(tgnKiriLuar, 0.6, {
        morphSVG: tgnKiriLuarIntip,
        ease: Quad.easeOut,
    });

    TweenMax.to(mataKiri, 0.6, {
        y: -5,
        ease: Quad.easeOut,
    });

    TweenMax.to(mataKanan, 0.6, {
        y: -5,
        ease: Quad.easeOut,
    });
    TweenMax.to([bentukMulut, garisBibir, mulutBiasa], 0.6, {
        x: 1,
        y: -5,
        morphSVG: mulutBulat,
        ease: Quad.easeOut,
    });
    TweenMax.to(lidah, 0.6, {
        x:1,
        y: -5,
        ease: Quad.easeOut,
    });
    TweenMax.to(badanLuar, 0.6, {
        y: -3,
        morphSVG: badanLuarIntip,
        ease: Quad.easeOut,
    });
    TweenMax.to(badanDalam, 0.6, {
        y: -3,
        morphSVG: badanDalamIntip,
        ease: Quad.easeOut,
    });
}

function hide() {
    TweenMax.killTweensOf([tgnKananLuar, tgnKananDalam, tgnKiriDalam, tgnKiriLuar, bentukMulut, garisBibir, mulutBiasa, lidah, mataKanan, mataKiri]);
    TweenMax.to(tgnKananDalam, 0.6, {
        ease: Quad.easeOut,
        morphSVG: tgnKananDalamTutupLurus,
    });
    TweenMax.to(tgnKananLuar, 0.6, {
        morphSVG: tgnKananLuarTutupLurus,
        ease: Quad.easeOut,
    });

    TweenMax.to(tgnKiriDalam, 0.6, {
        ease: Quad.easeOut,
        morphSVG: tgnKiriDalamTutupLurus,
    });
    TweenMax.to(tgnKiriLuar, 0.6, {
        morphSVG: tgnKiriLuarTutupLurus,
        ease: Quad.easeOut,
    });
    resetFace();
    resetBody();
}

function coverEyes() {
    TweenMax.to(tgnKananDalam, 0.2, {
        ease: Quad.easeOut,
        morphSVG: tgnKananDalamTutupKecilBawah,
    });
    TweenMax.to(tgnKananLuar, 0.2, {
        morphSVG: tgnKananLuarTutupKecilBawah,
        ease: Quad.easeOut,
        onComplete: () => {
            TweenMax.to(tgnKananDalam, 0.2, {
                ease: Quad.easeOut,
                morphSVG: tgnKananDalamTutupKecil,
            });
            TweenMax.to(tgnKananLuar, 0.2, {
                morphSVG: tgnKananLuarTutupKecil,
                ease: Quad.easeOut,
                onComplete: () => {
                    TweenMax.to(tgnKananDalam, 0.4, {
                        ease: Quad.easeOut,
                        morphSVG: tgnKananDalamTutupLurus,
                    });
                    TweenMax.to(tgnKananLuar, 0.4, {
                        morphSVG: tgnKananLuarTutupLurus,
                        ease: Quad.easeOut,
                    });
                }
            });
        }
    });

    TweenMax.to(tgnKiriDalam, 0.2, {
        ease: Quad.easeOut,
        morphSVG: tgnKiriDalamTutupKecilBawah,
    });
    TweenMax.to(tgnKiriLuar, 0.2, {
        morphSVG: tgnKiriLuarTutupKecilBawah,
        ease: Quad.easeOut,
        onComplete: () => {
            TweenMax.to(tgnKiriDalam, 0.2, {
                ease: Quad.easeOut,
                morphSVG: tgnKiriDalamTutupKecil,
            });
            TweenMax.to(tgnKiriLuar, 0.2, {
                morphSVG: tgnKiriLuarTutupKecil,
                ease: Quad.easeOut,
                onComplete: () => {
                    TweenMax.to(tgnKiriDalam, 0.4, {
                        ease: Quad.easeOut,
                        morphSVG: tgnKiriDalamTutupLurus,
                    });
                    TweenMax.to(tgnKiriLuar, 0.4, {
                        morphSVG: tgnKiriLuarTutupLurus,
                        ease: Quad.easeOut,
                    });
                }
            });
        }
    });
    eyesCovered = true;


}

function uncoverEyes() {
    TweenMax.killTweensOf([tgnKananLuar, tgnKananDalam, tgnKiriDalam, tgnKiriLuar]);
    TweenMax.to(tgnKananDalam, 0.3, {
        morphSVG: tgnKananDalamTutupKecil,
        ease: Quad.easeOut
    });
    TweenMax.to(tgnKananLuar, 0.3, {
        morphSVG: tgnKananLuarTutupKecil,
        ease: Quad.easeOut,
        onComplete: () => {
            TweenMax.to(tgnKananDalam, 0.2, {
                morphSVG: tgnKananDalamTutupKecilBawah,
                ease: Quad.easeOut
            });
            TweenMax.to(tgnKananLuar, 0.2, {
                morphSVG: tgnKananLuarTutupKecilBawah,
                ease: Quad.easeOut,
                onComplete: () => {
                    TweenMax.to(tgnKananDalam, 0.6, {
                        morphSVG: tgnKananDalamBuka,
                        ease: Quad.easeOut
                    });
                    TweenMax.to(tgnKananLuar, 0.6, {
                        morphSVG: tgnKananLuarBuka,
                        ease: Quad.easeOut
                    });
                }
            });
        }
    });

    TweenMax.to(tgnKiriDalam, 0.3, {
        morphSVG: tgnKiriDalamTutupKecil,
        ease: Quad.easeOut
    });
    TweenMax.to(tgnKiriLuar, 0.3, {
        morphSVG: tgnKiriLuarTutupKecil,
        ease: Quad.easeOut,
        onComplete: () => {
            TweenMax.to(tgnKiriDalam, 0.2, {
                morphSVG: tgnKiriDalamTutupKecilBawah,
                ease: Quad.easeOut
            });
            TweenMax.to(tgnKiriLuar, 0.2, {
                morphSVG: tgnKiriLuarTutupKecilBawah,
                ease: Quad.easeOut,
                onComplete: () => {
                    TweenMax.to(tgnKiriDalam, 0.6, {
                        morphSVG: tgnKiriDalamBuka,
                        ease: Quad.easeOut
                    });
                    TweenMax.to(tgnKiriLuar, 0.6, {
                        morphSVG: tgnKiriLuarBuka,
                        ease: Quad.easeOut
                    });
                }
            });
        }
    });
    eyesCovered = false;
}

function onTogglePasswordClick(e) {
    showPasswordCheck.click();
    togglePassword.classList.toggle("fa-eye-slash");
}

function startBlinking(delay) {
    if (delay) {
        delay = getRandomInt(delay);
    } else {
        delay = 1;
    }
    blinking = TweenMax.to([mataKiri, mataKanan], 0.1, {
        delay: delay,
        scaleY: 0,
        yoyo: true,
        repeat: 1,
        transformOrigin: "center center",
        onComplete: () => {
            startBlinking(12);
        }
    });
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}