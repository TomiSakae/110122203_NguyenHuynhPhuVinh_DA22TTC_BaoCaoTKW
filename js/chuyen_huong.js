function TrangChu() {
    let url = window.location.href;
    let urlParts = url.split('/');
    let dem = 0;
    for (let i of urlParts) {
        dem++;
    }
    let vi_tri_url = urlParts[dem - 2];

    switch (vi_tri_url) {
        case "wuthering_waves":
            window.location.href = "../index.html#r1";
            break;
        case "azur_promilia":
            window.location.href = "../index.html#r2";
            break;

        case "arknights_endfield":
            window.location.href = "../index.html#r3";
            break;

        case "project_mugen":
            window.location.href = "../index.html#r4";
            break;

        case "zenless_zone_zero":
            window.location.href = "../index.html#r5";
            break;

        default:
            window.location.href = "../index.html";
            break;
    }

}
let logo = document.getElementById("logo");

logo.addEventListener("click", TrangChu);
