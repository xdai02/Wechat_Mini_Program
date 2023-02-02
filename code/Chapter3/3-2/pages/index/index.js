// index.js

Page({
  data: {
    flag: true,
    name: '',
    chinese_score: '',
    math_score: '',
    average: ''
  },

  nameInput: function(e) {
    console.log("name");
    this.setData({
      name: e.detail.value
    });
  },

  chineseInput: function(e) {
    this.setData({
      chinese_score: e.detail.value
    });
  },

  mathInput: function(e) {
    this.setData({
      math_score: e.detail.value
    });
  },

  mysubmit: function() {
    console.log("test");
    if(this.data.name == "" || this.data.chinese_score == "" || this.data.math_score == "") {
      
      return;
    } else {
      var avg = (this.data.chinese_score * 1 + this.data.math_score * 1) / 2;
      this.setData({
        flag: false,
        average: avg,
      });
    }
  }
})