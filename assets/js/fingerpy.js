"use strict";

function finger(s1, positionr, positionl) {
    let fingerrposition = positionr;
    let fingerlposition = positionl;
    const arr = s1.split(" ");
    for (let i = 0; i <= arr.length - 1; i++) {
        if (fingerlposition !== 2 && fingerrposition !== 2 && arr[i][0] === "U") {
            return 0;
        }
        if (arr[i] === "R") {
            fingerrposition = fingerrposition + 1;
        }
        if (arr[i] === "R'") {
            fingerrposition = fingerrposition - 1;
        }
        if (arr[i] === "R2") {
            if (fingerrposition === 1) {
                fingerrposition = 3;
            } else {
                return 0;
            }
        }
        if (arr[i] === "R2'") {
            if (fingerrposition === 3) {
                fingerrposition = 1;
            } else {
                return 0;
            }
        }
        if (fingerrposition === 4 || fingerrposition === 0) {
            return 0;
        }
        if (arr[i] === "L'") {
            fingerlposition = fingerlposition + 1;
        }
        if (arr[i] === "L") {
            fingerlposition = fingerlposition - 1;
        }
        if (arr[i] === "L2'") {
            if (fingerlposition === 1) {
                fingerlposition = 3;
            } else {
                return 0;
            }
        }
        if (arr[i] === "L2") {
            if (fingerlposition === 3) {
                fingerlposition = 1;
            } else {
                return 0;
            }
        }
        if (fingerlposition === 4 || fingerlposition === 0) {
            return 0;
        }
    }
    if (fingerrposition === 4 || fingerrposition === 0) {
        return 0;
    }
    if (fingerlposition === 4 || fingerlposition === 0) {
        return 0;
    }
    return 1;
}

function fingerrbeginfrom(s1) {
    if (s1 === "") {
        return "";
    }
    if (finger(s1, 2, 2) === 1) {
        return arrLang[lang]["homegrip"];
    } else if (finger(s1, 2, 1) === 1) {
        return arrLang[lang]["homegrip"];
    } else if (finger(s1, 2, 3) === 1) {
        return arrLang[lang]["homegrip"];
    } else if (finger(s1, 1, 2) === 1) {
        return arrLang[lang]["thumbdown"];
    } else if (finger(s1, 3, 2) === 1) {
        return arrLang[lang]["thumbup"];
    }
    return "";
}

function fingerlbeginfrom(s1) {
    if (s1 === "") {
        return "";
    }
    if (finger(s1, 2, 2) === 1) {
        return arrLang[lang]["homegrip"];
    } else if (finger(s1, 1, 2) === 1) {
        return arrLang[lang]["homegrip"];
    } else if (finger(s1, 3, 2) === 1) {
        return arrLang[lang]["homegrip"];
    } else if (finger(s1, 2, 1) === 1) {
        return arrLang[lang]["thumbdown"];
    } else if (finger(s1, 2, 3) === 1) {
        return arrLang[lang]["thumbup"];
    }
    return "";
}