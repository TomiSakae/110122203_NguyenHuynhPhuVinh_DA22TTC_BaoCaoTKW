

// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(Flip, Draggable);

    const vi_tri_dau1 = document.querySelector(".khung-chon"),
        vi_tri_dich1 = document.querySelector(".khung-dich");

    const vi_tri_dau2 = document.querySelector(".khung-dich"),
        vi_tri_dich2 = document.querySelector(".khung-chon");
    let ten_class = "";
    let kt = 0;
    for (let i = 1; i <= 9; i++) {
        const nut1 = document.querySelector(`.nut-${i}`);
        nut1.addEventListener('click', (event) => {
            if (event.target.parentNode.className != ten_class && kt == 0) {
                document.getElementById("khung_noi_dung").classList.add("d-none");
                document.getElementById("nut-xt").classList.add("d-none");
                document.getElementById("nut-xt").style.opacity = 0;
                switch (ten_class) {
                    case "nut-1":
                        document.getElementById("tgm").style.display = "none";
                        document.getElementById("tgm").style.opacity = 0;
                        break;
                    case "nut-2":
                        document.getElementById("pl").style.display = "none";
                        document.getElementById("pl").style.opacity = 0;
                        break;
                }
                if (ten_class != "") {
                    const nut_ve = document.querySelector("." + ten_class);
                    const state2 = Flip.getState(nut_ve);
                    (nut_ve.parentNode === vi_tri_dau2 ? vi_tri_dich2 : vi_tri_dau2).appendChild(nut_ve);
                    Flip.from(state2, { duration: 1, ease: "power1.inOut" });
                }
                ten_class = event.target.parentNode.className;
                const state1 = Flip.getState(nut1);
                (nut1.parentNode === vi_tri_dau1 ? vi_tri_dich1 : vi_tri_dau1).appendChild(nut1);
                Flip.from(state1, { duration: 1, ease: "power1.inOut" });
                kt = 1;
                setTimeout(() => {
                    document.getElementById("khung_noi_dung").classList.remove("d-none");
                    document.getElementById("nut-xt").classList.remove("d-none");
                    var tl = gsap.timeline();
                    switch (ten_class) {
                        case "nut-1":
                            tl
                                .to("#tgm", { "display": "block", y: -25, duration: 0 })
                                .to("#tgm", { "opacity": "1", y: 0, duration: 1 });
                            break;
                        case "nut-2":
                            tl
                                .to("#pl", { "display": "block", y: -25, duration: 0 })
                                .to("#pl", { "opacity": "1", y: 0, duration: 1 });
                            break;
                    }
                    gsap.to("#nut-xt", {
                        delay: 1,
                        "opacity": "1",
                        duration: 1,
                    })
                    kt = 0;
                }, 1000);
            }
        });
    }


    // Lấy danh sách các nút
    const buttons = document.querySelectorAll('.khung-tuy-chinh');

    // Thêm sự kiện mouseenter cho mỗi nút
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            // Loại bỏ lớp "mờ đi" từ tất cả các nút
            buttons.forEach(btn => {
                btn.classList.add('mo-di');
                btn.classList.remove('bo-mo');
            });
            // Thêm lớp "mờ đi" cho nút được di chuột vào
            button.classList.remove('mo-di');
            button.classList.add('bo-mo');
        });
    });

    document.querySelectorAll('#lua_chon').forEach(button => {
        button.addEventListener('mouseleave', () => {
            // Loại bỏ lớp "mờ đi" từ tất cả các nút
            buttons.forEach(btn => {
                btn.classList.remove('mo-di');
                btn.classList.add('bo-mo');
            });
        });
    });
});