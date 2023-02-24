// pages/5_7/5_7.js
Page({
  isClear: false,   // 不启动擦除

  data: {
    pen: 5,    // 画笔粗细默认值
    color: "#000000"  // 画笔颜色默认值
  },

  onLoad: function() {
    this.ctx = wx.createCanvasContext('myCanvas', this);
  },

  touchStart: function(e) {
    this.x1 = e.changedTouches[0].x;  // 开始触摸屏幕点x坐标
    this.y1 = e.changedTouches[0].y;  // 开始触摸屏幕点y坐标
    
    // 如果是擦除模式
    if(this.isClear) {
      this.ctx.setStrokeStyle("#FFFFFF"); // 设置画布颜色为背景颜色（白色）
      this.ctx.setLineCap("round");     // 设置线条端点样式
      this.ctx.setLineJoin("round");    // 设置线条交点样式
      this.ctx.setLineWidth(20);
      this.ctx.beginPath();
    }
    // 如果是绘图模式
    else {
      this.ctx.setStrokeStyle(this.data.color);
      this.ctx.setLineWidth(this.data.pen);
      this.ctx.setLineCap("round");
      this.ctx.beginPath();
    }
  },

  touchMove: function(e) {
    var x2 = e.changedTouches[0].x;  // 当前触摸屏幕点x坐标
    var y2 = e.changedTouches[0].y;  // 当前触摸屏幕点y坐标

    if(this.isClear) {
      this.ctx.moveTo(this.x1, this.y1);
      this.ctx.lineTo(x2, y2);
      this.ctx.stroke();
      this.x1 = x2;
      this.y1 = y2;
    } else {
      this.ctx.moveTo(this.x1, this.y1);
      this.ctx.lineTo(x2, y2);
      this.ctx.stroke();
      this.x1 = x2;
      this.y1 = y2;
    }

    this.ctx.draw(true);
  },

  touchEnd: function() {},

  penSelect: function(e) {
    this.setData({
      pen: parseInt(e.currentTarget.dataset.param)
    });
    this.isClear = false;
  },

  colorSelect: function(e) {
    this.setData({
      color: e.currentTarget.dataset.param
    });
    this.isClear = false;
  },

  clear: function() {
    this.isClear = true;
  },

  clearAll: function() {
    this.setData({
      pen: 5,
      color: "#000000"
    });
    this.ctx.draw();
  }
})