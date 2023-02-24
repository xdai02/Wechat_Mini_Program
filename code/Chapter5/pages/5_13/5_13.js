// pages/5_13/5_13.js
Page({
  data: {
    status: "获取中..."
  },

  onLoad: function(options) {
    var that = this;

    // 调用获取网络类型函数
    wx.getNetworkType({
      success: function(res) {
        that.setData({
          status: res.networkType
        })
      }
    })

    // 调用监听网络状态变化的函数
    wx.onNetworkStatusChange(function(res) {
      if(res.isConnected) {
        that.setData({
          status: res.networkType // 如果联网，显示网络类型
        })
      } else {
        that.setData({
          status: "未联网！"
        })
      }
    })
  },

  wifiStatus: function() {
    var that = this;
    // 获取已经连接的wifi
    wx.getConnectedWifi({
      success: function(res) {
        that.setData({
          res: res.wifi
        })
      }
    })
  }
})