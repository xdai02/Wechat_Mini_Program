// index.js

var start, end, sum; // ćšć±ćé

Page({
  startNum: function (e) {
    start = parseInt(e.detail.value);
  },

  endNum: function (e) {
    end = parseInt(e.detail.value);
  },

  calc: function () {
    sum = 0;
    for (var i = start; i <= end; i++) {
      sum = sum + i;
    }
    this.setData({
      sum: sum
    })
  }
})