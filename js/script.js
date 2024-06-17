// alert("おはよう");

/* jQuery */
/*js-drawer*/
jQuery("#js-drawer-icon").on("click", function (e) {
  e.preventDefault();
  jQuery("#js-drawer-icon").toggleClass("is-checked");
  jQuery("#js-drawer-content").toggleClass("is-checked");
});

/** スムーススクロール*/
/** drawer 制御 */
// jQuery('#js-drawer-content a[href^="#"]').on("click", function (e) {
//   // e.preventDefault();
//   // console.log("メソッドが正しく呼び出されました。");
//   jQuery("#js-drawer-icon").removeClass("is-checked");
//   jQuery("#js-drawer-content").removeClass("is-checked");
// });

/** JavaScript */
document
  .querySelectorAll('#js-drawer-content a[href^="#"]')
  .forEach(function(link) { //各リンクに対してイベントを追加していく
    link.addEventListener("click", function (e) {
      document.querySelector("#js-drawer-icon").classList.remove("is-checked");
      document
        .querySelector("#js-drawer-content")
        .classList.remove("is-checked");
    });
  });
