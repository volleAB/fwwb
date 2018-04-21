var app = getApp()
var to1;
Page({
  data: {
    userInfo: {},
    motto: 'Hello World',
    // orderItems
  },

  serve: function () {
    wx.navigateTo({
      url: '../remine/serve/serve',
    })
  },

  order: function () {
    wx.navigateTo({
      url: '../remine/serve/serve',
    })
  },
  recharge: function () {
    wx.navigateTo({
      url: '../remine/recharge/recharge',
    })
  },

  onLoad: function () {
    var that = this;
    to1 = app.globalData.token;
    //调用应用实例的方法获取全局数据
    console.log(to1);
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    }),
      wx.request({
      url: 'http://119.28.179.110/recycle/guser/gremain.action',
        method: 'POST',
        data: {
          token: to1
        },
        success: function (res) {
          console.log(res.data);
          that.setData({
            myprice: res.data[0]
          })
        }
      })
  }
})
