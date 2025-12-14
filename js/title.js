//动态标题
var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
  if (document.hidden) {
    //离开当前页面时标签显示内容
    document.title = '糟糕！页面崩溃啦！w(ﾟДﾟ)w';
    clearTimeout(titleTime);
  } else {
    //返回当前页面时标签显示内容
    document.title = '骗你哒，欢迎回家ο(=•ω＜=)ρ⌒☆';
    //两秒后变回正常标题
    titleTime = setTimeout(function () {
      document.title = OriginTitile;
    }, 2000);
  }
});