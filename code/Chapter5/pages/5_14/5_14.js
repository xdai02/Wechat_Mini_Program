// pages/5_14/5_14.js
Page({
  startCompass: function() {
    var that = this;
    wx.startCompass({
      success: function() {
        wx.onCompassChange(function(res) {
          that.setData({
            resCompass: res
          })
        })
      }
    })
  },

  stopCompass: function() {
    var that = this;
    wx.stopCompass({
      success: function(res) {
        console.log("罗盘已经停止！");
      }
    })
  },

  startAcc: function() {
    var that = this;
    wx.startAccelerometer({
      success: function() {
        wx.onAccelerometerChange(function(res) {
          that.setData({
            resAcc: res
          })
        })
      }
    })
  },

  stopAcc: function() {
    var that = this;
    wx.stopAccelerometer({
      success: function(res) {
        console.log("已停止加速度传感器监听！");
      }
    })
  },

  startGyroscope: function() {
    var that = this;
    wx.startGyroscope({
      success: function() {
        wx.onGyroscopeChange(function(res) {
          that.setData({
            resGyroscope: res
          })
        })
      }
    })
  },

  stopGyroscope: function() {
    var that = this;
    wx.stopGyroscope({
      success: function(res) {
        console.log("已停止陀螺仪传感器监听！");
      }
    })
  }
})