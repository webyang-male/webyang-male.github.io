<link rel="stylesheet" class="aplayer-secondary-style-marker" href="https://cdn.jsdelivr.net/npm/aplayer@latest/dist/APlayer.min.css"><script src="https://cdn.jsdelivr.net/npm/aplayer@latest/dist/APlayer.min.js" class="aplayer-secondary-script-marker"></script><script class="meting-secondary-script-marker" src="https://cdn.jsdelivr.net/npm/meting@1/dist/Meting.min.js"></script>console.log(
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
