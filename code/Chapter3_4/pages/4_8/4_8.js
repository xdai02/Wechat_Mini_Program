// pages/4_8/4_8.js
Page({
  data: {
    poster: "http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000",
    name: "歌曲名",
    author: "歌手名",
    // src: "http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46"
    src: "/audios/music.mp3",
  },

  onLoad: function(options) {
    this.audioCtx = wx.createAudioContext("myAudio");
  },

  audioPlay: function() {
    this.audioCtx.play();
  },

  audioPause: function() {
    this.audioCtx.pause();
  },

  audio14: function() {
    this.audioCtx.seek(14);
  },

  audioStart: function() {
    this.audioCtx.seek(0);
  }
})