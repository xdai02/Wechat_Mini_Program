// pages/5_15/5_15.js
Page({
  name: "",
  phone: "",

  scanCode: function () {
    var that = this;
    wx.scanCode({
      onlyFromCamera: false, // 通过摄像头和调用相册图片都可以进行扫码
      scanType: [], // 不指定码的类型
      success: function (res) {
        that.setData({
          resCode: res
        })
      }
    })
  },

  inputName: function (e) {
    this.name = e.detail.value;
  },

  inputPhone: function (e) {
    this.phone = e.detail.value;
  },

  makeCall: function () {
    let phone = this.name;
    wx.makePhoneCall({
      phoneNumber: phone,
    })
  },

  addPerson: function() {
    let name = this.name;
    let phone = this.phone;
    if(name == '' || phone == '') {
      wx.showToast({
        title: '姓名和电话不能为空',
        icon: 'none',
        duration: 2000
      })
    } else {
      wx.addPhoneContact({
        firstName: name,
        mobilePhoneNumber: phone
      })
    }
  }
})