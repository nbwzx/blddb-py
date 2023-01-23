const arrLang = {
    "en": {
        "L5E": "Last 5 Edges (L5E)",
        "L5EHint": "Enter the position that these edges need to go to.",
        "thumbup": "Thumb up",
        "thumbdown": "Thumb down",
        "homegrip": "Home grip",
        "no": "No.",
        "algorithm": "Algorithm",
        "commutator": "Commutator",
        "rightThumbPosition": "Right Thumb Position",
        "leftThumbPosition": "Left Thumb Position"
    },
    "zh": {
        "L5E": "五棱 (L5E)",
        "L5EHint": "请选择这些位置上的棱块要去哪里。",
        "thumbup": "上",
        "thumbdown": "下",
        "homegrip": "中",
        "no": "序号",
        "algorithm": "公式",
        "commutator": "交换子",
        "rightThumbPosition": "右起手",
        "leftThumbPosition": "左起手"
    }
};

// Check for cookie support
// The default language is English
let lang = getCookie("lang") || navigator.language.slice(0, 2) || navigator.userLanguage.slice(0, 2) || "en";
if (!Object.keys(arrLang).includes(lang)) {
    lang = "en";
}
if (lang === "zh") {
    $(".language").html("<div class=\"status_circle status_circle_online\">简体中文</div>");
    $("#introduction").attr("href", "https://docs.blddb.net/zh");
    $("#nightmareIntroduction").attr("href", "https://docs.blddb.net/zh/#nightmare");
    $("#donate").attr("href", "donate.html");
    $("#codeinput").width("5.5em");
    $("#cornerstyle").width("5em");
    $("#edgemode").width("4em");
    $("#image").show();
} else if (lang === "en") {
    $(".language").html("<div class=\"status_circle status_circle_hide\">English</div>");
    $("#introduction").attr("href", "https://docs.blddb.net/en");
    $("#nightmareIntroduction").attr("href", "https://docs.blddb.net/en/#nightmare");
    $("#donate").attr("href", "donate_en.html");
    $("#codeinput").width("14em");
    $("#cornerstyle").width("7em");
    $("#edgemode").width("6em");
    $("#image").hide();
}

$(document).ready(() => {
    $(".lang").each(function(index, element) {
        $(this).text(arrLang[lang][$(this).attr("key")]);
    });
    if (typeof $(".allscreen")[0] !== "undefined") {
        $(".allscreen")[0].style.display = "block";
    }
    const r = $("#table").width() / $("#div1").width();
    if (r > 1) {
        $("#table").css("font-size", 16 / r);
    }
});

// get/set the selected language
$(".translate").click(() => {
    // Switch between Chinese and English
    if (lang === "en") {
        lang = "zh";
    } else if (lang === "zh") {
        lang = "en";
    }
    // update cookie key
    setCookie("lang", lang, 30);
    if (!Object.keys(arrLang).includes(lang)) {
        lang = "en";
    }
    if (lang === "zh") {
        $(".language").html("<div class=\"status_circle status_circle_online\">简体中文</div>");
    } else if (lang === "en") {
        $(".language").html("<div class=\"status_circle status_circle_hide\">English</div>");
    }
    $(".lang").each(function(index, element) {
        $(this).text(arrLang[lang][$(this).attr("key")]);
    });
    if (typeof algSearch === "function") {
        algSearch();
    }
});