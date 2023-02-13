// pages/5_1/5_1.js
function createRandomIndex() {
  return Math.floor(Math.random() * 10);
}

Page({
  data: {
    index: 0,
    imgArr: [
      "/images/01.jpg",
      "/images/02.jpg",
      "/images/03.jpg",
      "/images/04.jpg",
      "/images/05.jpg",
      "/images/06.jpg",
      "/images/07.jpg",
      "/images/08.jpg",
      "/images/09.jpg",
      "/images/10.jpg"
    ]
  },

  changeFace: function() {
    this.setData({
      index: createRandomIndex()
    })
  },

  onShow: function() {
    var that = this;
    wx.onAccelerometerChange(function(res) {
      // 设置加速度在某个坐标轴方向得到的数值
      if(res.x > 0.5 || res.y > 0.5 || res.z > 0.5) {
        wx.showToast({
          title: '摇一摇成功',
          icon: "success",
          duration: 2000
        })

        that.changeFace();
      }
    })
  }
})