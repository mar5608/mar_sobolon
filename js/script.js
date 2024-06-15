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
jQuery('#js-drawer-content a[href^="#"]').on("click", function (e) {
  e.preventDefault();
  console.log("メソッドが正しく呼び出されました。");
  jQuery("#js-drawer-icon").removeClass("is-checked");
  jQuery("#js-drawer-content").removeClass("is-checked");
});

// jQuery('a[href^="#"]').on("click", function (e) {
//   const speed = 300;
//   const id = jQuery(this).attr("href");
//   const target = jQuery("#" == id ? "html" : id);
//   const position = jQuery(target).offset().top;
//   jQuery("html,body").animate(
//     {
//       scrollTop: position,
//     },
//     speed,
//     "swing" // swing or liner
//   );
// });
