console.log(
  "%c婷宝儿我送你归于人海了,祝你幸福🍀",
  "border:2px solid deepskyblue;color:lightpink;font-size:16px;font-weight:900;"
);

!(function () {
  let OriginTitle = document.title;
  let titleTime;
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
      document.title = "ヽ(●-`Д´-)ノ你丑你就走！";
      clearTimeout(titleTime);
    } else {
      document.title = "ヾ(Ő∀Ő3)ノ欢迎回来!";
      titleTime = setTimeout(function () {
        document.title = OriginTitle;
      }, 2000);
    }
  });

})();

import("https://code.jquery.com/jquery-3.3.1.min.js").then(res =>
  $("body").append(`<img title="我爱中国!!!" id="china" src="../img/china.svg" style="right:0px;position:fixed!important;top:10%!important;" loading="lazy">`)
);
!function (e, t, a) { function n() { c(".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 500%;-moz-border-radius: 50%;position: fixed;}.heart:after{top: -5px;}.heart:before{left: -5px;}"), o(), r() } function r() { for (var e = 0; e < d.length; e++)d[e].alpha <= 0 ? (t.body.removeChild(d[e].el), d.splice(e, 1)) : (d[e].y--, d[e].scale += .004, d[e].alpha -= .013, d[e].el.style.cssText = "left:" + d[e].x + "px;top:" + d[e].y + "px;opacity:" + d[e].alpha + ";transform:scale(" + d[e].scale + "," + d[e].scale + ") rotate(45deg);background:" + d[e].color + ";z-index:99999"); requestAnimationFrame(r) } function o() { var t = "function" == typeof e.onclick && e.onclick; e.onclick = function (e) { t && t(), i(e) } } function i(e) { var a = t.createElement("div"); a.className = "heart", d.push({ el: a, x: e.clientX - 5, y: e.clientY - 5, scale: 1, alpha: 1, color: s() }), t.body.appendChild(a) } function c(e) { var a = t.createElement("style"); a.type = "text/css"; try { a.appendChild(t.createTextNode(e)) } catch (t) { a.styleSheet.cssText = e } t.getElementsByTagName("head")[0].appendChild(a) } function s() { return "rgb(" + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + ")" } var d = []; e.requestAnimationFrame = function () { return e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function (e) { setTimeout(e, 1e3 / 60) } }(), n() }(window, document);


// (!(~+[])+{})[--[~+""][+[]]*[~+[]]+~~!+[]]+({}+[])[[~!+[]]*~+[]]

// 天气插件
import("https://code.jquery.com/jquery-3.3.1.min.js").then(res =>
  $("body").append(`<div id="tp-weather-widget"></div>`)
);


(function (a, h, g, f, e, d, c, b) { b = function () { d = h.createElement(g); c = h.getElementsByTagName(g)[0]; d.src = e; d.charset = "utf-8"; d.async = 1; c.parentNode.insertBefore(d, c) }; a["SeniverseWeatherWidgetObject"] = f; a[f] || (a[f] = function () { (a[f].q = a[f].q || []).push(arguments) }); a[f].l = +new Date(); if (a.attachEvent) { a.attachEvent("onload", b) } else { a.addEventListener("load", b, false) } }(window, document, "script", "SeniverseWeatherWidget", "//cdn.sencdn.com/widget2/static/js/bundle.js?t=" + parseInt((new Date().getTime() / 100000000).toString(), 10)));
window.SeniverseWeatherWidget('show', {
  flavor: "bubble",
  location: "WMXY3PVX93RV",
  geolocation: false,
  language: "zh-Hans",
  unit: "c",
  theme: "auto",
  token: "d852ae57-7cfb-4ae1-bbd1-53b22f96d905",
  hover: "enabled",
  container: "tp-weather-widget"
})

