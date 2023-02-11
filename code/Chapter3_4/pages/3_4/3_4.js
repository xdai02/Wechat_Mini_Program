// index.js
const app = getApp(); // 获取全局应用实例

var util = require("../utils/util.js"); // 获取utils模块应用实例

var indexMsg = "我是来自index.js的变量"; // 定义本模块的变量

// 定义本模块的函数
function indexFunc() {
  return "我是来自index.js的函数";
}

Page({
  data: {
    msg1: app.globalMsg, // 使用全局变量
    msg2: app.globalFunc(), // 使用全局函数
    msg3: indexMsg, // 使用本模块变量
    msg4: indexFunc(), // 使用本模块函数
    msg5: util.utilMsg, // 使用utils模块变量
    msg6: util.utilFunc() // 使用utils模块函数
  }
})