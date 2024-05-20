let gacha = localStorage.getItem("gacha");

if (gacha == null) {
    gacha = 0;
    localStorage.setItem("gacha", 0);
}

let url = window.location.href;
let urlParts = url.split('/');
let dem = 0;
for (let i of urlParts) {
    dem++;
}
let vi_tri_url = urlParts[dem - 2];

switch (vi_tri_url) {
    case "wuthering_waves":
        gacha++;
        localStorage.setItem("gacha", gacha);
        break;
    case "azur_promilia":
        gacha++;
        localStorage.setItem("gacha", gacha);
        break;

    case "arknights_endfield":
        gacha++;
        localStorage.setItem("gacha", gacha);
        break;

    case "project_mugen":
        gacha++;
        localStorage.setItem("gacha", gacha);
        break;

    case "zenless_zone_zero":
        gacha++;
        localStorage.setItem("gacha", gacha);
        break;
}

document.getElementById("so_gacha").textContent = gacha;