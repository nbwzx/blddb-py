"use strict";

$.ajaxSettings.async = false;
const jsonNameList = ["pyAlgToInfo"];
const jsonLoaded = jsonNameList.map((name) => $.getJSON(`assets/json/${name}.json`, (json) => {
    window[`${name}`] = json;
}));

function algSearch() {
    const idValue = document.getElementById("pyinput1").value + document.getElementById("pyinput2").value + document.getElementById("pyinput3").value + document.getElementById("pyinput4").value + document.getElementById("pyinput5").value;
    const div1 = document.getElementById("div1");
    if (pyAlgToInfo.hasOwnProperty(idValue)) {
        document.getElementById("tw").setAttribute("alg", pyAlgToInfo[idValue][0]);
        const rows = pyAlgToInfo[idValue].length;
        let tab = `<table id="table"><thead><tr><th>${arrLang[lang]["no"]}</th><th>${arrLang[lang]["algorithm"]}</th><th>${arrLang[lang]["commutator"]}</th><th>${arrLang[lang]["rightThumbPosition"]}</th><th>${arrLang[lang]["leftThumbPosition"]}</th></tr></thead><tbody>`;
        for (let i = 0; i < rows; i++) {
            tab += "<tr>";
            tab += `<td>${i + 1}</td>`;
            tab += `<td>${pyAlgToInfo[idValue][i]}</td>`;
            tab += `<td>${commutator(pyAlgToInfo[idValue][i])}</td>`;
            tab += `<td>${fingerrbeginfrom(pyAlgToInfo[idValue][i])}</td>`;
            tab += `<td>${fingerlbeginfrom(pyAlgToInfo[idValue][i])}</td>`;
            tab += "</tr>";
        }
        tab += "</tbody></table>";
        div1.innerHTML = tab;
    } else {
        document.getElementById("tw").setAttribute("alg", "");
        div1.innerHTML = "";
    }
    const r = $("#table").width() / $("#div1").width();
    if (r > 1) {
        $("#table").css("font-size", 16 / r);
    }
}