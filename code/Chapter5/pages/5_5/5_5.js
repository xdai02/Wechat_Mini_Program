// pages/5_5/5_5.js
Page({
  onReady: function() {
    this.ctx = wx.createCanvasContext('myCanvas', this);
  },

  drawRect: function() {
    var ctx = this.ctx;
    ctx.rect(0, 0, 50, 50);
    ctx.stroke();
    ctx.draw(true); // 参数为true表示保留以前画布图形
  },

  scale: function() {
    this.ctx.scale(2, 2); // 缩放图形
    this.drawRect();
  },

  translate: function() {
    this.ctx.translate(20, 20); // 移动图形
    this.drawRect();
  },

  rotate: function() {
    this.ctx.rotate(30 * Math.PI / 180);
    this.drawRect();
  }
})