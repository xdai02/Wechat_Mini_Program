// pages/5_10/5_10.js
Page({
  latitude: 39.93111, // 纬度
  longitude: 116.199167,  // 经度
  markers: [
    {
      id: 1,
      latitude: 39.93111,
      longitude: 116.199167,
      iconPath: "/images/guanyu_youshi.png", // 标记点图标
      // 标记点标签
      label: {
        content: "我的位置",
        color: "#0000ff",
        bgColor: "#ffff00",
        fontSize: 20
      }
    },
    {
      latitude: 39.92528,
      longitude: 116.20111,
      iconPath: "/images/guanyu_youshi.png"
    }
  ],

  chooseLocation: function() {
    wx.chooseLocation({
      success: function(res) {
        console.log(res)
      }
    })
  },

  openLocation: function() {
    wx.getLocation({
      type: "gcj02",
      success: function(res) {
        wx.openLocation({
          latitude: res.latitude,
          longitude: res.longitude,
          scale: 15
        })
      }
    })
  }
})