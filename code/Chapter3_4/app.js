// app.js
App({
  onLaunch: function() {
    console.log("app.js -- onLaunch -- 小程序初始化");
  },

  onShow: function() {
    console.log("app.js -- onShow -- 小程序显示");
  },

  onHide: function() {
    console.log("app.js -- onHide -- 小程序隐藏");
  },

  globalMsg: "我是来自app.js的全局变量",
  globalFunc: function() {
    return "我是来自app.js的全局函数";
  }
})