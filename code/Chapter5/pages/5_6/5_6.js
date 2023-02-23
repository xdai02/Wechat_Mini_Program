// pages/5_6/5_6.js
var ctx = wx.createCanvasContext('myCanvas');
Page({
  onLoad: function(options) {
    this.drawSinX();
  },

  // 绘制实心圆点
  drawDot: function(x, y) {
    ctx.arc(x, y, 5, 0, 2*Math.PI);
    ctx.setFillStyle("black");
    ctx.fill();
    ctx.draw(true);
  },

  drawSinX: function() {
    for(var x = 0; x < 2 * Math.PI; x += Math.PI / 180) {
      var y = Math.sin(x);
      // 放大x和y的比例
      this.drawDot(10 + 50*x, 60 + 50*y);
    }
  }
})