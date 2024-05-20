let gacha = parseInt(localStorage.getItem("gacha"));

if (isNaN(gacha)) {
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
    case "azur_promilia":
    case "arknights_endfield":
    case "project_mugen":
    case "zenless_zone_zero":
        gacha++;
        localStorage.setItem("gacha", gacha);
        break;
}

document.getElementById("so_gacha").textContent = gacha;

function KTGacha(so_lan) {
    let gacha = parseInt(localStorage.getItem("gacha"));  // Lấy lại giá trị từ localStorage
    document.getElementById("noi_gacha").innerHTML = `<p>Bạn không đủ vé quay!</p>`;
    if (gacha >= so_lan) {
        let lan_gacha = localStorage.getItem("lan_gacha");
        if (isNaN(lan_gacha)) {
            lan_gacha = 0;
            localStorage.setItem("lan_gacha", 0);
        }
        gacha -= so_lan;
        localStorage.setItem("gacha", gacha);
        document.getElementById("so_gacha").textContent = gacha;
        document.getElementById("noi_gacha").innerHTML = `
        <h6>Các vật phẩm mà bạn nhận được là:</h6>
        <hr>
         `;

        let min = 1;
        let max = 100;
        let randomInteger;
        let url_anh;
        let ten_sp;
        for (let i = 0; i < so_lan; i++) {
            randomInteger = Math.floor(Math.random() * (max - min + 1)) + min;
            lan_gacha++;
            if (lan_gacha == 10) {
                randomInteger = Math.floor(Math.random() * (30 - 1 + 1)) + min;
                lan_gacha = 0;
            }
            localStorage.setItem("lan_gacha", lan_gacha);
            if (randomInteger <= 6) {
                url_anh = "assets/anime-rezero-puck-and-emilia-pack.png";
                ten_sp = "Ảnh nền chuột Emilia x1";
            } else if (randomInteger <= 30 && randomInteger > 6) {
                if (randomInteger <= 18 && randomInteger > 6) {
                    url_anh = "assets/konosuba-megumin-and-staff-pack.png";
                    ten_sp = "Ảnh nền chuột Megumin x1";
                } else if (randomInteger > 18 && randomInteger <= 30) {
                    url_anh = "assets/miss-kobayashi-s-dragon-maid-kanna-and-dragon-form-pack.png";
                    ten_sp = "Ảnh nền chuột Kanna x1";
                }
            } else if (randomInteger > 30) {
                if (randomInteger > 30 && randomInteger <= 50) {
                    url_anh = "assets/gold_key.png";
                    ten_sp = "Chìa khóa vàng x1";
                } else if (randomInteger > 50) {
                    url_anh = "assets/sliver_key.png";
                    ten_sp = "Chìa khóa bạc x1";
                }
            }

            document.getElementById("noi_gacha").innerHTML += `
            <div class="d-flex align-items-center">
                <div class="khung-gacha py-1 px-1">
                    <img src="`+ url_anh + `" class="w-100 h-auto">
                </div>
                <p class="mt-3 mx-4">`+ ten_sp + `</p>
            </div>
            <hr>
         `;
        }
    }
}
