// pages/4_2/4_2.js
Page({
  formSubmit: function (e) {
    var a = parseFloat(e.detail.value.a);
    var b = parseFloat(e.detail.value.b);
    var c = parseFloat(e.detail.value.c);

    var area;
    if (a + b <= c || a + c <= b || b + c <= a) {
      wx.showToast({
        title: '三角形的两边之和小于第三边！', // 对话框标题
        icon: "none", // 对话框图标
        duration: 2000, // 对话框显示时长
      });
      this.clear(); // 调用函数清空input组件中的数据
      return;
    } else {
      var s = (a + b + c) / 2;
      area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    }

    this.setData({
      result: area
    });
  },

  clear: function() {
    this.setData({
      a: "",
      b: "",
      c: "",
      result: ""
    })
  }
})