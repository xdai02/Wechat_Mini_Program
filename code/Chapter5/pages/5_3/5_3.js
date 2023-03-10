// pages/5_3/5_3.js
var ctx = wx.createCanvasContext('myCanvas')

Page({
  clear: function () {
    ctx.draw(); // 刷新屏幕，显示绘制效果（无参数或参数为false时要先清除画布）
  },

  drawDot: function (e) {
    ctx.arc(200, 200, 10, 0, 2 * Math.PI);
    ctx.setFillStyle("black");
    ctx.fill(); // 对当前路径中的内容进行填充，默认的填充色为黑色
    ctx.draw();
  },

  drawCircle: function () {
    ctx.setFillStyle("black");
    ctx.arc(200, 200, 10, 0, 2 * Math.PI);
    ctx.fill();

    ctx.setStrokeStyle("red") // 设置描边颜色
    ctx.moveTo(300, 200); // 把路径移动到画布中的指定点，不创建线条
    ctx.arc(200, 200, 100, 0, 2 * Math.PI); // 创建以(200,200)为圆心，以100为半径的圆
    ctx.stroke(); // 画出当前路径的边框
    ctx.draw()
  },

  drawDash: function () {
    ctx.setStrokeStyle("red");
    ctx.setLineDash([20, 10]); // 线条的长度为20，线条与线条的间隔为10
    ctx.setLineWidth(10); // 设置宽度
    ctx.moveTo(50, 100); // 把路径移动到画布中的指定点
    ctx.lineTo(250, 100);
    ctx.lineTo(150, 300);
    ctx.lineTo(50, 100);

    ctx.stroke();
    ctx.draw();
    ctx.setLineDash([0, 0]); // 恢复默认线条样式
    ctx.setLineWidth(1); // 恢复默认线条宽度
  },

  capAndJoin: function () {
    ctx.setStrokeStyle("red");
    ctx.setLineWidth(20);
    ctx.setLineCap("round"); // 设置线条端点样式
    ctx.setLineJoin("miter"); // 设置线条连接样式
    ctx.moveTo(50, 50);
    ctx.lineTo(250, 50);
    ctx.lineTo(50, 250);
    ctx.lineTo(250, 250);
    ctx.stroke();
    ctx.draw();
    ctx.setLineWidth(1);
    ctx.setLineCap("butt"); // 设置线条端点样式
    ctx.setLineJoin("mitter");
  },

  drawText: function() {
    ctx.setFillStyle("red");
    ctx.setFontSize(40);
    ctx.setTextBaseline("bottom");  // 设置文本基线
    ctx.fillText("北方工业大学", 80, 80);

    ctx.setFillStyle("yellow");
    ctx.setTextBaseline("top");
    ctx.fillText("北方工业大学", 80, 80);

    ctx.setFillStyle("black");
    ctx.rotate(30 * Math.PI / 180);   // 旋转字体
    ctx.fillText("北方工业大学", 150, 80);

    ctx.draw();
  },

  circularGrad: function() {
    var grd = ctx.createCircularGradient(175, 175, 125);  // 创建以点(175,175)为圆心，以125为半径的圆形渐变
    grd.addColorStop(0, "purple");  // 添加渐变起点
    grd.addColorStop(1, "white");   // 添加渐变终点
    ctx.setFillStyle(grd);      // 设置圆形渐变填充样式
    ctx.fillRect(50, 50, 250, 250); // 创建起点(50,50)，宽度和高度都为250的填充矩形
    ctx.draw();
  },

  shadowRect: function() {
    ctx.setFillStyle("orange");
    ctx.setShadow(20, 20, 50, "yellow");  // 设置阴影
    ctx.fillRect(50, 50, 250, 250);
    ctx.draw();
  },

  translucent: function() {
    ctx.setFillStyle("red");
    ctx.setGlobalAlpha(0.2);  // 设置全局透明度
    ctx.fillRect(50, 50, 250, 250);
    ctx.draw();
    ctx.setGlobalAlpha(1);    // 恢复以前设置
  }
})