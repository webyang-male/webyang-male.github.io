<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\assets\css\APlayer.min.css"><script src="\assets\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script>!(function () {
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
  console.log(
    "%c婷宝儿我送你归于人海了,祝你幸福🍀",
    "border:2px solid deepskyblue;color:lightpink;font-size:16px;font-weight:900;"
  );
})();

!(function (e, t, a) {
  function n() {
    c(
      ".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 500%;-moz-border-radius: 50%;position: fixed;}.heart:after{top: -5px;}.heart:before{left: -5px;}"
    ),
      o(),
      r();
  }

  function r() {
    for (var e = 0; e < d.length; e++)
      d[e].alpha <= 0
        ? (t.body.removeChild(d[e].el), d.splice(e, 1))
        : (d[e].y--,
          (d[e].scale += 0.004),
          (d[e].alpha -= 0.013),
          (d[e].el.style.cssText =
            "left:" +
            d[e].x +
            "px;top:" +
            d[e].y +
            "px;opacity:" +
            d[e].alpha +
            ";transform:scale(" +
            d[e].scale +
            "," +
            d[e].scale +
            ") rotate(45deg);background:" +
            d[e].color +
            ";z-index:99999"));
    requestAnimationFrame(r);
  }

  function o() {
    var t = "function" == typeof e.onclick && e.onclick;
    e.onclick = function (e) {
      t && t(), i(e);
    };
  }

  function i(e) {
    var a = t.createElement("div");
    (a.className = "heart"),
      d.push({
        el: a,
        x: e.clientX - 5,
        y: e.clientY - 5,
        scale: 1,
        alpha: 1,
        color: s(),
      }),
      t.body.appendChild(a);
  }

  function c(e) {
    var a = t.createElement("style");
    a.type = "text/css";
    try {
      a.appendChild(t.createTextNode(e));
    } catch (t) {
      a.styleSheet.cssText = e;
    }
    t.getElementsByTagName("head")[0].appendChild(a);
  }

  function s() {
    return (
      "rgb(" +
      ~~(255 * Math.random()) +
      "," +
      ~~(255 * Math.random()) +
      "," +
      ~~(255 * Math.random()) +
      ")"
    );
  }
  var d = [];
  (e.requestAnimationFrame = (function () {
    return (
      e.requestAnimationFrame ||
      e.webkitRequestAnimationFrame ||
      e.mozRequestAnimationFrame ||
      e.oRequestAnimationFrame ||
      e.msRequestAnimationFrame ||
      function (e) {
        setTimeout(e, 1e3 / 60);
      }
    );
  })()),
    n();
})(window, document);
