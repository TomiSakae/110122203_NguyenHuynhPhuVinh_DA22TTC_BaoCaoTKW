/*!
* Start Bootstrap - Blog Home v5.0.9 (https://startbootstrap.com/template/blog-home)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-blog-home/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
function performSearch() {
    var searchInput = document.getElementById("o_tim_kiem").value.toLowerCase();
    // Your search logic here, this is just a dummy example
    let ten_bd_1 = "wuthering waves";
    let ten_bd_2 = "azur promilia";
    let ten_bd_3 = "arknights: endfield";
    let ten_bd_4 = "project mugen";
    let ten_bd_5 = "zenless zone zero";
    let tach_bd_1 = ten_bd_1.split('');
    let tach_bd_2 = ten_bd_2.split('');
    let tach_bd_3 = ten_bd_3.split('');
    let tach_bd_4 = ten_bd_4.split('');
    let tach_bd_5 = ten_bd_5.split('');
    let tach_nd_tk = searchInput.split('');
    if (searchInput == "") {
        document.getElementById("ww").classList.add("d-none");
        document.getElementById("ap").classList.add("d-none");
        document.getElementById("ae").classList.add("d-none");
        document.getElementById("pm").classList.add("d-none");
        document.getElementById("zzz").classList.add("d-none");
    }
    for (let i = 0; i < tach_nd_tk.length; i++) {
        if (tach_nd_tk[i] == tach_bd_1[i]) {
            document.getElementById("ww").classList.remove("d-none");
        }
        else {
            document.getElementById("ww").classList.add("d-none");
            break;
        }
    }
    for (let i = 0; i < tach_nd_tk.length; i++) {
        if (tach_nd_tk[i] == tach_bd_2[i]) {
            document.getElementById("ap").classList.remove("d-none");
        }
        else {
            document.getElementById("ap").classList.add("d-none");
            break;
        }
    }
    for (let i = 0; i < tach_nd_tk.length; i++) {
        if (tach_nd_tk[i] == tach_bd_3[i]) {
            document.getElementById("ae").classList.remove("d-none");
        }
        else {
            document.getElementById("ae").classList.add("d-none");
            break;
        }
    }
    for (let i = 0; i < tach_nd_tk.length; i++) {
        if (tach_nd_tk[i] == tach_bd_4[i]) {
            document.getElementById("pm").classList.remove("d-none");
        }
        else {
            document.getElementById("pm").classList.add("d-none");
            break;
        }
    }
    for (let i = 0; i < tach_nd_tk.length; i++) {
        if (tach_nd_tk[i] == tach_bd_5[i]) {
            document.getElementById("zzz").classList.remove("d-none");
        }
        else {
            document.getElementById("zzz").classList.add("d-none");
            break;
        }
    }
}

// Event listener for input in search field
document.getElementById("o_tim_kiem").addEventListener("input", function () {
    performSearch();
});