var app = getApp()
var to1;
Page({
  data: {
    userInfo: {},
    motto: 'Hello World',
    },

  identification: function () {
    wx.navigateTo({
      url: '../mine/identification/identification',
    })
  },

  order: function () {
    wx.navigateTo({
      url: '../mine/order/order',
    })
  },

  onLoad: function () {
    var that = this;
    to1 = app.globalData.token;
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    }),
    wx.request({
      url: 'http://119.28.179.110/recycle/user/uremain.action',
      method:'POST',
      data:{
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
