"use strict";

$.ajaxSettings.async = false;
const jsonNameList = ["pyAlgToInfo"];
const jsonLoaded = jsonNameList.map((name) => $.getJSON(`assets/json/${name}.json`, (json) => {
    window[`${name}`] = json;
}));

function algSearch() {
    let idValue = "";
    for (let i = 0; i < 6; i++) {
        let temp = document.getElementById(`pyinput${i + 1}`).value;
        if (temp === "") {
            temp = "  ";
        }
        idValue = idValue + temp;
    }
    const div1 = document.getElementById("div1");
    let cnt = 0;
    let tab = `<table id="table"><thead><tr><th>${arrLang[lang]["no"]}</th><th>${arrLang[lang]["image"]}</th><th>${arrLang[lang]["algorithm"]}</th><th>${arrLang[lang]["rightThumbPosition"]}</th><th>${arrLang[lang]["leftThumbPosition"]}</th></tr></thead><tbody>`;
    const rows = 5;
    for (const i in pyAlgToInfo) {
        let isNotMatch = false;
        for (let j = 0; j < 6; j++) {
            if (i.slice(2 * j, 2 * j + 2) !== idValue.slice(2 * j, 2 * j + 2) && idValue.slice(2 * j, 2 * j + 2) !== "  ") {
                isNotMatch = true;
                break;
            }
        }
        if (isNotMatch) {
            continue;
        }
        cnt = cnt + 1;
        if (cnt > 100) {
            tab += "<tr>";
            tab += "<td colspan = 5>......</td>";
            tab += "</tr>";
            break;
        }
        tab += "<tr>";
        tab += `<td rowspan="${rows}">${cnt}</td>`;
        tab += `<td rowspan="${rows}"><div>
            <twisty-player id="tw" style="width: 10em; height: 10em; margin: -1em -1.2em -1.5em -1.2em; pointer-events:none;" puzzle="pyraminx" alg="F' B U D' ${pyAlgToInfo[i][0]}"
              experimental-setup-anchor="end" hint-facelets="none" control-panel="none" back-view="none"
              background="none" camera-latitude="-22.5" camera-longitude="60"></twisty-player>
          </div></td>`;
        tab += `<td style="border-left: 0px;">${pyAlgToInfo[i][0]}</td>`;
        tab += `<td>${fingerrbeginfrom(pyAlgToInfo[i][0])}</td>`;
        tab += `<td>${fingerlbeginfrom(pyAlgToInfo[i][0])}</td>`;
        tab += "</tr>";
        for (let j = 1; j < rows; j++) {
            tab += "<tr>";
            tab += `<td style="border-left: 0px;">${pyAlgToInfo[i][j]}</td>`;
            tab += `<td>${fingerrbeginfrom(pyAlgToInfo[i][j])}</td>`;
            tab += `<td>${fingerlbeginfrom(pyAlgToInfo[i][j])}</td>`;
            tab += "</tr>";
        }
    }
    tab += "</tbody></table>";
    if (cnt === 0) {
        tab = "Not found.";
    }
    div1.innerHTML = tab;
    const r = $("#table").width() / $("#div1").width();
    if (r > 1) {
        $("#table").css("font-size", 16 / r);
    }
}

algSearch();